const express = require("express");
const Nohm = require("nohm").Nohm;
const StatsModel = require("./model.ts");
const redis = require("redis");
const fs = require("fs");
const bodyParser = require("body-parser");
const http = require("http");
const https = require("https");
const cors = require("cors");
const userAgentList = require("./userAgents");
const geoip = require('geoip-lite');
const device = require('express-device');
const { getName } = require('country-list');
const timestampToDate = require('timestamp-to-date');
const capitalize = require('string-capitalize')
const requestIp = require('request-ip');
const parseRange = require('range-parser')

function randomNum(minNum: number, maxNum: number): number {
  return Math.round(Math.random() * (maxNum - minNum + 1) + minNum);
}

interface IntervalResult {
  name: number,
  plays: number,
  countries: {
    [name: string]: {
      plays: number,
      cities: {
        [name: string]: number
      }
    },
  },
  devices: { [name: string]: number },
  clients: { [name: string]: number }
}

interface RecordInterface {
  episodeCuid: string;
  country: string;
  city: string;
  device: string;
  client: string;
  createdAt: number;
}

const updateIntervalResult = (
  record: RecordInterface,
  intervalResult: IntervalResult
): IntervalResult => {
  if (intervalResult) {
    /* plays */
    let new_plays = intervalResult.plays + 1;

    /* country */
    let new_countries = intervalResult.countries;
    // current country exists
    if (new_countries[record.country]) {
      new_countries[record.country].plays += 1;
      // current city exists
      if (new_countries[record.country].cities[record.city]) {
        new_countries[record.country].cities[record.city] += 1;
      } else {
        new_countries[record.country].cities[record.city] = 1;
      }
    } else {
      new_countries[record.country] = {
        plays: 1,
        cities: {}
      }
    }

    /* device */
    let new_devices = intervalResult.devices;
    // current device exists
    if (new_devices[record.device]) {
      new_devices[record.device] += 1;
    } else {
      new_devices[record.device] = 1;
    }

    /* clients */
    let new_clients = intervalResult.clients;
    // current device exists
    if (new_clients[record.client]) {
      new_clients[record.client] += 1;
    } else {
      new_clients[record.client] = 1;
    }
    return {
      name: intervalResult.name,
      plays: new_plays,
      countries: new_countries,
      devices: new_devices,
      clients: new_clients
    }
  } else {
    return {
      name: new Date(timestampToDate(record.createdAt.toString(), 'yyyy/MM/dd')).getTime(),
      plays: 1,
      countries: {
        [record.country]: {
          plays: 1,
          cities: {
            [record.city]: 1
          }
        }
      },
      devices: {
        [record.device]: 1
      },
      clients: {
        [record.client]: 1
      }
    }
  }
}

const redisOptions = {
  host: "snapodcast.redis.cn-chengdu.rds.aliyuncs.com",
  port: 6379,
  auth_pass: "Goodhlp_-616877",
};

const redisClient = redis.createClient(redisOptions);
const pubSubClient = redis.createClient(redisOptions);

redisClient.once("connect", async () => {
  Nohm.setPrefix("snapod-analytics");
  Nohm.setClient(redisClient);

  const app = express();
  const server = http.Server(app);

  app.use(cors());

  app.use(requestIp.mw())

  app.use(device.capture());

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(
    Nohm.middleware([
      {
        model: StatsModel,
      },
    ])
  );

  app.get("/stats/podcast/:podcastCuid/from/:durationStart/to/:durationEnd/interval/:interval", async function (req, res, next) {
    try {
      const lowest = parseInt(req.params.durationStart);
      const highest = parseInt(req.params.durationEnd);
      const interval = parseInt(req.params.interval);

      const record_ids = await StatsModel.find({
        createdAt: {
          min: lowest,
          max: highest,
          endpoints: '[)'
        },
        podcastCuid: req.params.podcastCuid
      });

      const record_ids_sorted = await StatsModel.sort({
        field: "createdAt",
        direction: "DESC"
      }, record_ids)

      const records = await StatsModel.loadMany(record_ids_sorted);

      let result: {
        episodeData: {
          [cuid: string]: number
        },
        intervalData: IntervalResult[]
      } = {
        episodeData: {},
        intervalData: []
      };
      let currentLow = highest - interval;
      let intervalResult: IntervalResult = null;
      let result_pos = 0;
      records.forEach((record: any, index: number) => {
        const currentRecord: RecordInterface = record.allPropertiesCache;
        // count plays by episode
        if (result.episodeData[currentRecord.episodeCuid]) {
          result.episodeData[currentRecord.episodeCuid] += 1;
        } else {
          result.episodeData[currentRecord.episodeCuid] = 1;
        }

        // current record is within current interval
        if (currentRecord.createdAt < currentLow) {
          while (currentRecord.createdAt < currentLow && currentLow > lowest) {
            currentLow -= interval;
          }
          intervalResult = null;
          if (index !== 0) {
            result_pos += 1;
          }
        }
        intervalResult = updateIntervalResult(currentRecord, intervalResult);

        result.intervalData[result_pos] = intervalResult;
      })

      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  app.get(
    "/podcast/:podcastCuid/episode/:episodeCuid",
    async function (req, res, next) {
      try {
        if (!req.headers['range'] || req.headers['range'] === 'bytes=0-1') {
          // exclude range request
          const user_agent = req.headers['user-agent'];
          const geo = geoip.lookup(req.clientIp);
          let listening_platform = "unknown";

          userAgentList.map((item) => {
            item.user_agents.map((agent) => {
              const pattern = new RegExp(unescape(agent));
              if (pattern.test(user_agent)) {
                if (item.app) {
                  listening_platform = item.app;
                }
              }
            });
          });

          const data = {
            episodeCuid: req.params.episodeCuid,
            podcastCuid: req.params.podcastCuid,
            country: geo ? getName(geo.country) : "unknown",
            city: geo ? geo.city : "unknown",
            device: capitalize(req.device.type),
            client: capitalize(listening_platform)
          };

          const stats = new StatsModel();
          try {
            await stats.store(data);
          } catch (err) {
            console.log(err);
          }
        }

        const options = req.headers['range'] ? {
          headers: {
            'Range': req.headers['range']
          }
        } : {};
        https.get(req.query.audio, options, function (resp) {
          res.setHeader('Content-Disposition', resp.headers['content-disposition']);
          res.setHeader('Content-Type', resp.headers['content-type']);
          res.setHeader('Content-Length', resp.headers['content-length']);
          if (req.headers['range']) {
            res.setHeader('Content-Range', resp.headers['content-range']);
            res.status(206);
          }
          resp.pipe(res);
        });

      } catch (err) {
        next(err);
      }
    }
  );

  app.get(
    "/test/podcast/:podcastCuid/episode/:episodeCuid",
    async function (req, res, next) {
      const user_agent = req.headers['user-agent'];
      const geo = geoip.lookup(req.clientIp);
      try {
        let listening_platform = "unknown";
        userAgentList.map((item) => {
          item.user_agents.map((agent) => {
            const pattern = new RegExp(unescape(agent));
            if (pattern.test(user_agent)) {
              listening_platform = item.app;
            }
          });
        });

        const date = randomNum(new Date().getTime() - 5 * 31 * 86400000, new Date().getTime());
        console.log(timestampToDate(date, 'yyyy/MM/dd'));

        const data = {
          episodeCuid: req.params.episodeCuid,
          podcastCuid: req.params.podcastCuid,
          country: geo ? getName(geo.country) : "unknown",
          city: geo ? geo.city : "unknown",
          device: capitalize(req.device.type),
          client: capitalize(listening_platform),
          createdAt: date
        };

        const stats = new StatsModel();
        await stats.store(data);

        res.send(JSON.stringify({
          msg: "cool"
        }));
      } catch (err) {
        next(err);
      }
    }
  );

  app.get("/", function (req, res) {
    res.send(JSON.stringify({
      ping: "pong"
    }));
  });

  app.use(function (err, _req, res, next) {
    res.status(500);
    let errData = err.message;
    if (err instanceof Error) {
      if (err.message === "not found") {
        res.status(404);
      }
    }
    if (err instanceof Nohm.ValidationError) {
      res.status(400);
      errData = err.errors;
    }
    if (res.statusCode >= 500) {
      console.error("Server error:", err);
    }
    res.send({ result: "error", data: errData });
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`listening on ${port}`);
  });
});
