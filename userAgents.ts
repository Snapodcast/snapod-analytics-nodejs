module.exports = [
  {
    user_agents: ["^Acast.+[Aa]ndroid"],
    app: "Acast",
    device: "phone",
    os: "android",
  },
  {
    user_agents: ["^Acast.+iOS"],
    app: "Acast",
    device: "phone",
    os: "ios",
  },
  {
    user_agents: ["AdsBot-Google"],
    app: "Google AdsBot",
    bot: true,
    info_url: "http://www.google.com/adsbot.html",
  },
  {
    user_agents: ["AhrefsBot/"],
    app: "AhrefsBot",
    bot: true,
    info_url: "http://ahrefs.com/robot/",
    examples: [
      "Mozilla/5.0 (compatible; AhrefsBot/7.0; http://ahrefs.com/robot/)",
    ],
  },
  {
    user_agents: ["^Airr/"],
    app: "Airr",
    info_url: "https://www.airr.io/",
    examples: [
      "Airr/3787 CFNetwork/1128.0.1 Darwin/19.6.0",
      "Airr/4070 CFNetwork/1206 Darwin/20.1.0",
    ],
  },
  {
    user_agents: [
      "^AlexaMediaPlayer/1\\.",
      "^AlexaMediaPlayer/16\\.",
      "^AlexaMediaPlayer/2\\.",
    ],
    app: "Alexa-enabled device",
    device: "speaker",
    os: "alexa",
    svg: "amazon.svg",
  },
  {
    user_agents: ["^AmazonNewsContentService"],
    app: "Alexa Flash Briefing cache",
    description:
      "A service which downloads, caches and normalises audio for the Flash Briefing service on Alexa-enabled devices",
    os: "alexa",
    info_url:
      "https://developer.amazon.com/docs/flashbriefing/flash-briefing-skill-api-feed-reference.html#performance-requirements",
    developer_notes: "Stats are available within the Alexa skills dashboard.",
    svg: "amazon.svg",
    bot: true,
  },
  {
    user_agents: ["^AmazonMusic(?!.iPhone|Android)"],
    examples: ["AmazonMusic"],
    app: "Amazon Music Podcasts",
    description: "A music and podcasts streaming app",
    svg: "amazon.svg",
  },
  {
    user_agents: ["^AmazonMusic.*iPhone"],
    examples: [
      "AmazonMusic/9.15.2 iPhone7,2 CFNetwork/978.0.7 Darwin/18.7.0",
      "AmazonMusic/9.16.1 iPhone9,1 CFNetwork/1128.0.1 Darwin/19.6.0",
      "AmazonMusic/9.16.0 iPhone12,1 CFNetwork/1128.0.1 Darwin/19.6.0",
    ],
    app: "Amazon Music Podcasts",
    description: "A music and podcasts streaming app",
    os: "ios",
    device: "phone",
    developer_notes: "Examples are from an Amazon contact",
    svg: "amazon.svg",
  },
  {
    user_agents: ["^AmazonMusic.*Android"],
    examples: [
      "AmazonMusic/16.17.0 Dalvik/2.1.0 (Linux; U; Android 6.0.1; vivo 1610 Build/MMB29M)",
    ],
    app: "Amazon Music Podcasts",
    description: "A music and podcasts streaming app",
    os: "android",
    developer_notes: "Examples are from an Amazon contact",
    svg: "amazon.svg",
  },
  {
    user_agents: ["^Amazon Music Podcast"],
    app: "Amazon Music Podcasts",
    description: "A music and podcasts streaming app",
    developer_notes: "Backend ingestion service",
    svg: "amazon.svg",
    bot: true,
  },
  {
    user_agents: ["^AlexaMediaPlayer/5\\."],
    app: "Amazon Echo Dot",
    device: "speaker",
    os: "alexa",
    svg: "amazon.svg",
  },
  {
    user_agents: ["^com.audible.playersdk.player", "^Audible,"],
    app: "Audible",
    os: "android",
  },
  {
    user_agents: ["^Audible.*Darwin"],
    app: "Audible",
    os: "ios",
  },
  {
    user_agents: ["^AndroidDownloadManager"],
    os: "android",
  },
  {
    user_agents: ["^AntennaPod/", "^de.danoeh.antennapod/"],
    app: "AntennaPod",
    examples: [
      "de.danoeh.antennapod/1.7.3b (Linux;Android 8.0.0) ExoPlayerLib/2.9.3",
    ],
    info_url: "https://github.com/AntennaPod/AntennaPod",
    os: "android",
    developer_notes:
      "The de.danoeh version was used when streaming only, and will been phased out as of v2",
  },
  {
    user_agents: ["Apache-HttpClient"],
    bot: true,
  },
  {
    user_agents: ["^AppleCoreMedia/1\\..*iPod"],
    device: "mp3_player",
    examples: [
      "AppleCoreMedia/1.0.0.16G114 (iPod touch; U; CPU OS 12_4_2 like Mac OS X; en_us)",
    ],
    os: "ios",
    description: "AppleCoreMedia library",
    info_url: "https://podnews.net/article/applecoremedia-user-agent",
    developer_notes:
      "This is a library used by a number of apps when progressively downloading podcasts. It is not (just) Apple Podcasts, and should not be treated as an Apple Podcasts useragent",
  },
  {
    user_agents: ["^AppleCoreMedia/1\\..*Macintosh"],
    examples: [
      "AppleCoreMedia/1.0.0.19A583 (Macintosh; U; Intel Mac OS X 10_15; en_us)",
    ],
    device: "pc",
    os: "macos",
    description: "AppleCoreMedia library",
    info_url: "https://podnews.net/article/applecoremedia-user-agent",
    developer_notes:
      "This is a library used by a number of apps when progressively downloading podcasts. It is not (just) Apple Podcasts, and should not be treated as an Apple Podcasts useragent",
  },
  {
    user_agents: ["^AppleCoreMedia/1\\..*iPhone"],
    device: "phone",
    examples: [
      "AppleCoreMedia/1.0.0.15G77 (iPhone; U; CPU OS 11_4_1 like Mac OS X; en_us)",
    ],
    os: "ios",
    description: "AppleCoreMedia library",
    info_url: "https://podnews.net/article/applecoremedia-user-agent",
    developer_notes:
      "This is a library used by a number of apps when progressively downloading podcasts. It is not (just) Apple Podcasts, and should not be treated as an Apple Podcasts useragent",
  },
  {
    user_agents: ["^AppleCoreMedia/1\\..*iPad"],
    device: "tablet",
    examples: [
      "AppleCoreMedia/1.0.0.17A860 (iPad; U; CPU OS 13_1_2 like Mac OS X; en_us)",
    ],
    os: "ios",
    description: "AppleCoreMedia library",
    info_url: "https://podnews.net/article/applecoremedia-user-agent",
    developer_notes:
      "This is a library used by a number of apps when progressively downloading podcasts. It is not (just) Apple Podcasts, and should not be treated as an Apple Podcasts useragent",
  },
  {
    user_agents: ["^AppleCoreMedia/1\\..*HomePod"],
    device: "speaker",
    examples: [
      "AppleCoreMedia/1.0.0.16G78 (HomePod; U; CPU OS 12_4 like Mac OS X; en_us)",
    ],
    os: "homepodos",
    description: "AppleCoreMedia library",
    info_url: "https://podnews.net/article/applecoremedia-user-agent",
    developer_notes:
      "This is a library used by a number of apps when progressively downloading podcasts. It is not (just) Apple Podcasts, and should not be treated as an Apple Podcasts useragent",
  },
  {
    user_agents: ["^AppleCoreMedia/1\\..*Apple TV"],
    device: "tv",
    examples: [
      "AppleCoreMedia/1.0.0.17J586 (Apple TV; U; CPU OS 13_0 like Mac OS X; en_us)",
    ],
    os: "tvos",
    description: "AppleCoreMedia library",
    info_url: "https://podnews.net/article/applecoremedia-user-agent",
    developer_notes:
      "This is a library used by a number of apps when progressively downloading podcasts. It is not (just) Apple Podcasts, and should not be treated as an Apple Podcasts useragent",
  },
  {
    user_agents: ["^AppleCoreMedia/1\\..*Apple Watch"],
    device: "watch",
    os: "watchos",
    description: "AppleCoreMedia library",
    info_url: "https://podnews.net/article/applecoremedia-user-agent",
    developer_notes:
      "This is a library used by a number of apps when progressively downloading podcasts. It is not (just) Apple Podcasts, and should not be treated as an Apple Podcasts useragent",
  },
  {
    user_agents: ["^atc/.* watchOS/.* model/Watch"],
    app: "Apple Podcasts",
    device: "watch",
    os: "watchos",
    bot: true,
    developer_notes:
      "All of these examples given are verified (via stamping the audio URL with the RSS useragent) as being sourced from Apple Podcasts; and accordingly this is marked as a bot since these downloads are duplicated with the phone.",
    examples: [
      "atc/1.0 watchOS/6.2 model/Watch3,3 hwp/t8004 build/17T529 (6; dt:155)",
      "atc/1.0 watchOS/6.2.8 model/Watch2,3 hwp/t8002 build/17U63 (6; dt:133)",
      "atc/1.0 watchOS/6.2.8 model/Watch3,3 hwp/t8004 build/17U63 (6; dt:155)",
      "atc/1.0 watchOS/6.2.8 model/Watch4,2 hwp/t8006 build/17U63 (6; dt:191)",
      "atc/1.0 watchOS/7.0.2 model/Watch5,10 hwp/t8006 build/18R402 (6; dt:233)",
      "atc/1.0 watchOS/7.0.2 model/Watch5,11 hwp/t8006 build/18R402 (6; dt:234)",
      "atc/1.0 watchOS/7.1 model/Watch4,2 hwp/t8006 build/18R590 (6; dt:191)",
      "atc/1.0 watchOS/7.1 model/Watch4,3 hwp/t8006 build/18R590 (6; dt:192)",
      "atc/1.0 watchOS/7.1 model/Watch4,4 hwp/t8006 build/18R590 (6; dt:193)",
      "atc/1.0 watchOS/7.1 model/Watch5,1 hwp/t8006 build/18R590 (6; dt:201)",
      "atc/1.0 watchOS/7.1 model/Watch5,3 hwp/t8006 build/18R590 (6; dt:202)",
      "atc/1.0 watchOS/7.1 model/Watch5,4 hwp/t8006 build/18R590 (6; dt:202)",
    ],
  },
  {
    user_agents: [
      "^Podcasts/.*\\(.*\\)",
      "^Balados/.*\\(.*\\)",
      "^Podcasti/.*\\(.*\\)",
      "^Podcastit/.*\\(.*\\)",
      "^Podcasturi/.*\\(.*\\)",
      "^Podcasty/.*\\(.*\\)",
      "^Podcast’ler/.*\\(.*\\)",
      "^Podkaster/.*\\(.*\\)",
      "^Podcaster/.*\\(.*\\)",
      "^Podcastok/.*\\(.*\\)",
      "^Подкасти/.*\\(.*\\)",
      "^Подкасты/.*\\(.*\\)",
      "^פודקאסטים/.*\\(.*\\)",
      "^البودكاست/.*\\(.*\\)",
      "^पॉडकास्ट/.*\\(.*\\)",
      "^พ็อดคาสท์/.*\\(.*\\)",
      "^播客/.*\\(.*\\)",
      "^팟캐스트/.*\\(.*\\)",
    ],
    examples: [
      "Podcasts/1410.53 CFNetwork/1111 Darwin/19.0.0 (x86_64)",
      "Podcaster/1410.53 CFNetwork/1111 Darwin/19.0.0 (x86_64)",
    ],
    app: "Apple Podcasts",
    device: "pc",
    os: "macos",
    description: "The Apple Podcasts app on MacOS Catalina and above",
    developer_notes:
      "Used when downloading podcasts (not progressive downloads), with support for the following languages: Arabic, Chinese, Finnish, French, English, Hebrew, Hindi, Hungarian, Korean, Polish, Romanian, Russian, Serbian, Slovenian, Swedish, Thai, Turkish.",
  },
  {
    user_agents: [
      "^Podcasts/.*\\d$",
      "^Balados/.*\\d$",
      "^Podcasti/.*\\d$",
      "^Podcastit/.*\\d$",
      "^Podcasturi/.*\\d$",
      "^Podcasty/.*\\d$",
      "^Podcast’ler/.*\\d$",
      "^Podkaster/.*\\d$",
      "^Podcaster/.*\\d$",
      "^Podcastok/.*\\d$",
      "^Подкасти/.*\\d$",
      "^Подкасты/.*\\d$",
      "^פודקאסטים/.*\\d$",
      "^البودكاست/.*\\d$",
      "^पॉडकास्ट/.*\\d$",
      "^พ็อดคาสท์/.*\\d$",
      "^%E6%92%AD%E5%AE%A2/.*\\d$",
      "^播客/.*\\d$",
      "^팟캐스트/.*\\d$",
    ],
    app: "Apple Podcasts",
    description: "The Apple Podcasts app",
    developer_notes:
      "Used when downloading podcasts (not progressive downloads). This could be on iOS or iPadOS.",
    examples: ["Podcasts/1440.4 CFNetwork/1128.0.1 Darwin/19.6.0"],
  },
  {
    user_agents: ["^BashPodder"],
    app: "BashPodder",
    device: "pc",
    info_url: "http://lincgeek.org/bashpodder/",
  },
  {
    user_agents: ["Barkrowler/"],
    app: "Babbar",
    bot: true,
    info_url: "https://beta.babbar.tech/crawler",
  },
  {
    user_agents: ["BBC%20Sounds/"],
    app: "BBC Sounds",
    device: "phone",
    examples: ["BBC%20Sounds/1.13.1.7716 CFNetwork/1107.1 Darwin/19.0.0"],
    info_url:
      "https://www.bbc.co.uk/sounds/help/questions/getting-started-with-bbc-sounds/sounds-intro",
  },
  {
    user_agents: ["BBCiPlayerRadio/"],
    app: "BBC iPlayer Radio",
    device: "phone",
    examples: ["BBCiPlayerRadio/2.16.0.8764 CFNetwork/1107.1 Darwin/19.0.0"],
    info_url: "https://www.bbc.co.uk/programmes/p00zh17p",
  },
  {
    user_agents: ["; BeyondPod"],
    app: "BeyondPod",
    device: "phone",
    examples: ["Mozilla/5.0 (Linux; U; en-us; BeyondPod 4)"],
    os: "android",
  },
  {
    user_agents: ["^Bitcast/"],
    app: "Bitcast",
    os: "ios",
    info_url: "https://bitcast.fm/",
    examples: ["Bitcast/336 CFNetwork/1197 Darwin/20.0.0"],
  },
  {
    user_agents: ["^Bose/"],
    app: "Bose SoundTouch",
    device: "speaker",
  },
  {
    user_agents: ["^Breaker/Android"],
    app: "Breaker",
    os: "android",
  },
  {
    user_agents: ["^Breaker/iOS"],
    app: "Breaker",
    os: "ios",
  },
  {
    user_agents: ["Android.+(?:B|b)rave"],
    app: "Brave",
    os: "android",
  },
  {
    user_agents: ["Linux.+(?:B|b)rave"],
    app: "Brave",
    device: "pc",
    os: "linux",
  },
  {
    user_agents: ["Mac OS X.+(?:B|b)rave"],
    app: "Brave",
    device: "pc",
    os: "macos",
  },
  {
    user_agents: ["Windows.+(?:B|b)rave"],
    app: "Brave",
    device: "pc",
    os: "windows",
  },
  {
    user_agents: ["BroadwayPodcastNetwork/iOS"],
    app: "Broadway Podcast Network",
    description: "The Broadway Podcast Network iOS App",
    device: "phone",
    examples: ["BroadwayPodcastNetwork/iOS"],
    os: "ios",
  },
  {
    user_agents: ["^Cast(?:b|B)ox/.+Android"],
    app: "CastBox",
    device: "phone",
    examples: [
      "CastBox/8.2.6-191015245 (Linux;Android 10) ExoPlayerLib/2.10.4",
      "CastBox/8.19.0-200927161 (Linux;Android 10) ExoPlayerLib/2.10.4",
      "CastBox/8.18.1-200917153 (Linux;Android 8.0.0) ExoPlayerLib/2.10.4",
    ],
    os: "android",
  },
  {
    user_agents: ["^Cast(?:b|B)ox/.+iOS"],
    app: "CastBox",
    device: "phone",
    examples: [
      "CastBox/8.5.1 (fm.castbox.audiobook.radio.podcast; build:11; iOS 13.1.2)",
    ],
    os: "ios",
  },
  {
    user_agents: ["^Cast(?:b|B)ox(?!.*(Android|iOS))"],
    app: "CastBox",
    developer_notes:
      "There are CastBox compatible User Agents that come without Android/iOS platform marker",
    examples: ["CastBox/5.7.5-190508115.r1a805d3"],
  },
  {
    user_agents: ["^castget "],
    app: "castget",
    examples: ["castget 1.2.4 (castget rss enclosure downloader)"],
    info_url: "https://castget.johndal.com/",
    device: "pc",
  },
  {
    user_agents: ["Castopod/1.0"],
    app: "Castopod",
    examples: ["Castopod/1.0"],
    bot: true,
  },
  {
    user_agents: ["Castro "],
    app: "Castro",
    device: "phone",
    examples: ["Castro 2019.13/1167", "Castro 2020.14/1287"],
    os: "ios",
  },
  {
    user_agents: ["\\ CrKey/"],
    app: "Chromecast device",
    device: "speaker",
    os: "android",
  },
  {
    user_agents: ["^Clementine "],
    app: "Clementine Music Player",
    device: "pc",
    info_url: "https://www.clementine-player.org/",
  },
  {
    user_agents: ["^curl"],
    bot: true,
  },
  {
    user_agents: ["^Dalvik/"],
    examples: [
      "Dalvik/2.1.0 (Linux; U; Android 9; SM-N950U Build/PPR1.180610.011)",
    ],
    os: "android",
  },
  {
    user_agents: ["^datagnionbot"],
    bot: true,
  },
  {
    user_agents: ["Deezer/.*Android;"],
    app: "Deezer",
    os: "android",
    examples: [
      "Deezer/6.2.2.80 (Android; 9; Mobile; fr) samsung SM-G950F",
      "Deezer/6.2.3.96 (Android; 10; Mobile; fr) samsung SM-A405FN",
    ],
    info_url:
      "https://play.google.com/store/apps/details?id=deezer.android.app",
  },
  {
    user_agents: ["^Deezer/.*CFNetwork/"],
    app: "Deezer",
    os: "ios",
    examples: ["Deezer/8.13.0.4 CFNetwork/1125.2 Darwin/19.4.0"],
    info_url:
      "https://apps.apple.com/us/app/deezer-music-podcast-player/id292738169",
  },
  {
    user_agents: ["^Deezer.*Electron; windows"],
    app: "Deezer",
    examples: ["Deezer/4.20.0 (Electron; windows/10.0.18362; Desktop; fr)"],
    device: "pc",
    os: "windows",
  },
  {
    user_agents: ["^Deezer.*Electron; osx"],
    app: "Deezer",
    examples: ["Deezer/4.20.0 (Electron; osx/10.14.6; Desktop; fr)"],
    device: "pc",
    os: "macos",
  },
  {
    user_agents: ["DoggCatcher"],
    app: "DoggCatcher",
    device: "phone",
    examples: [
      "Mozilla/5.0 (Linux; U; Windows NT 6.1; en-us; dream) DoggCatcher",
    ],
    os: "android",
  },
  {
    user_agents: ["DotBot/1"],
    app: "DotBot",
    examples: [
      "Mozilla/5.0 (compatible; DotBot/1.1; http://www.opensiteexplorer.org/dotbot, help@moz.com)",
    ],
    bot: true,
  },
  {
    user_agents: ["^doubleTwist CloudPlayer"],
    examples: ["doubleTwist CloudPlayer"],
    app: "doubleTwist CloudPlayer",
    device: "phone",
    info_url: "https://www.doubletwist.com/cloudplayer",
    os: "android",
  },
  {
    user_agents: ["Downcast/.*iPhone"],
    app: "Downcast",
    device: "phone",
    examples: ["Downcast/2.9.42 (iPhone; iOS 12.4.1; Scale/3.00)"],
    os: "ios",
  },
  {
    user_agents: ["Downcast/.*iPad"],
    app: "Downcast",
    device: "tablet",
    examples: ["Downcast/2.9.57 (iPad; iOS 14.2; Scale/2.00)"],
    os: "ios",
  },
  {
    user_agents: ["Downcast/.*Mac OS X"],
    app: "Downcast",
    examples: ["Downcast/2.9.57 (Mac OS X Version 10.15.7 (Build 19H15))"],
    os: "macos",
    device: "pc",
  },
  {
    user_agents: ["Xbox.+Edge/"],
    app: "Edge",
    device: "games_console",
    os: "windows",
  },
  {
    user_agents: ["Android.+EdgA/"],
    app: "Microsoft Edge",
    os: "android",
    info_url:
      "https://play.google.com/store/apps/details?id=com.microsoft.emmx&hl=en_AU&gl=US",
  },
  {
    user_agents: ["Windows Phone.+Edge/"],
    app: "Edge",
    device: "phone",
    os: "windows",
  },
  {
    user_agents: ["Windows.+Edge/"],
    app: "Edge",
    device: "pc",
    examples: [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; WebView/3.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299",
    ],
    os: "windows",
  },
  {
    user_agents: ["^Echo/1\\."],
    device: "speaker",
    os: "alexa",
    svg: "amazon.svg",
  },
  {
    user_agents: ["FacebookBot", "facebookexternalhit/"],
    bot: true,
    app: "Facebook",
    info_url: "https://www.facebook.com/externalhit_uatext.php",
    examples: [
      "facebookexternalhit/1.1 ( http://www.facebook.com/externalhit_uatext.php)",
    ],
  },
  {
    user_agents: ["^feedly/"],
    app: "Feedly",
    examples: ["feedly/81.0.1 CFNetwork/1206 Darwin/20.1.0"],
    description: "An RSS reader",
  },
  {
    user_agents: ["Linux.*Firefox/"],
    app: "Firefox",
    device: "pc",
    os: "linux",
  },
  {
    user_agents: ["Mac OS X.*Firefox/"],
    app: "Firefox",
    device: "pc",
    os: "macos",
  },
  {
    user_agents: ["Windows.*Firefox/"],
    app: "Firefox",
    device: "pc",
    examples: [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0",
    ],
    os: "windows",
  },
  {
    user_agents: ["Android.*(Focus|Firefox)/"],
    app: "Firefox",
    os: "android",
  },
  {
    user_agents: ["iPhone.*Focus/"],
    app: "Firefox",
    device: "phone",
    os: "ios",
  },
  {
    user_agents: ["iPad.*Focus/"],
    app: "Firefox",
    device: "tablet",
    os: "ios",
  },
  {
    user_agents: ["^Lavf/"],
    developer_notes:
      "ffmpeg is a library used within TuneIn, VLC, ffmpeg and other programs. This is the default useragent for the ffmpeg library. Since it's a library, not an app by itself, we don't add its name here.",
  },
  {
    user_agents: ["^MAC "],
    app: "Flash",
    device: "pc",
    os: "macos",
  },
  {
    user_agents: ["^WIN\\ "],
    app: "Flash",
    device: "pc",
    os: "windows",
  },
  {
    user_agents: ["^foobar2000/"],
    app: "foobar2000",
    examples: ["foobar2000/1.x"],
    info_url: "https://www.foobar2000.org/",
  },
  {
    user_agents: ["^fyyd-poll"],
    app: "Fyyd",
    bot: true,
  },
  {
    user_agents: ["^Go-http-client"],
    developer_notes:
      "This has been seen being used by a TuneIn client, and may be within WinAMP code.",
    examples: ["Go-http-client/2.0"],
  },
  {
    user_agents: ["Googlebot/", "Googlebot-Video/", "Googlebot-Image/"],
    examples: [
      "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; http://www.google.com/bot.html)",
      "Googlebot-Image/1.0",
    ],
    description: "Google's search bots",
    app: "Googlebot",
    info_url: "http://www.google.com/bot.html",
    bot: true,
  },
  {
    user_agents: ["Google-Podcast"],
    bot: true,
    app: "Google Podcasts Manager",
  },
  {
    user_agents: ["^Google-Speech-Actions"],
    app: "Google Assistant",
    device: "speaker",
    developer_notes:
      "This is audio downloaded as a result of a Google Assistant voice action. It's unlikely to appear in podcast host logs, since voice actions can only use up to 120 seconds of audio.",
    os: "google_assistant",
    info_url: "https://cloud.google.com/text-to-speech/docs/ssml",
  },
  {
    user_agents: ["GoogleChirp"],
    app: "Google Podcasts",
    device: "speaker",
    description: "Google Podcasts on smart speakers",
    os: "google_assistant",
  },
  {
    user_agents: [
      "(iPhone|iPad|iPod touch).*GSA/",
      "^Podcasts$",
      "^GooglePodcasts/",
    ],
    app: "Google Podcasts",
    description: "Google Podcasts on iOS",
    examples: [
      "GooglePodcasts/2.0.2%20iPod_touch/13.4.1%20hw/iPod9_1",
      "Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/107.0.310639584 Mobile/15E148 Safari/604.1",
      "Mozilla/5.0 (iPod touch; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/107.0.310639584 Mobile/15E148 Safari/601.1",
    ],
    developer_notes:
      "'GooglePodcasts' is the iOS app, while (?:(?:iPhone|iPad|iPod touch);.+)?GSA/ is used in the Google app when searching and playing podcasts. The first useragent was simply 'Podcasts'.",
    os: "ios",
  },
  {
    user_agents: ["(?:Android;.+)?GSA/"],
    app: "Google Podcasts",
    os: "android",
    description: "Google Podcasts on Android (the app or player)",
    examples: [
      "Mozilla/5.0 (Linux; Android 10; Pixel 3a Build/QQ2A.200305.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.149 Mobile Safari/537.36 GSA/11.2.7.21.arm64",
      "Mozilla/5.0 (Linux; Android 10; SM-G986U Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.75 Mobile Safari/537.36 GSA/11.31.12.21.arm64",
    ],
    developer_notes:
      "*GSA/ is used in the Google app when searching and playing podcasts, and in the Google Podcasts app",
  },
  {
    user_agents: ["Linux; Android.*SM-T350"],
    device: "tablet",
    os: "android",
  },
  {
    user_agents: ["Android.*Chrome/(?!.*(Googlebot|CrKey|GSA|EdgA/))"],
    app: "Google Chrome",
    os: "android",
    developer_notes:
      "This won't match Googlebot, a Chromecast device, Google speaker or Google app",
  },
  {
    user_agents: ["CrOS.*Chrome/"],
    app: "Google Chrome",
    device: "pc",
    os: "chromeos",
  },
  {
    user_agents: ["Linux(?!.*(Android)).*Chrome/(?!.*(CrKey|GSA/))"],
    app: "Google Chrome",
    device: "pc",
    os: "linux",
    developer_notes:
      "This won't match an Android device, Chromecast device, Google speaker or Google app",
  },
  {
    user_agents: ["Mac OS X.*Chrome/(?!.*(Spreaker/|OPR/))"],
    app: "Google Chrome",
    device: "pc",
    examples: [
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36",
    ],
    os: "macos",
    developer_notes: "This won't match the Spreaker app",
  },
  {
    user_agents: ["Windows.*Chrome/(?!.*(OPR/))"],
    app: "Google Chrome",
    device: "pc",
    examples: [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36",
    ],
    os: "windows",
  },
  {
    user_agents: ["iPad.*CriOS/"],
    app: "Google Chrome",
    device: "tablet",
    os: "ios",
  },
  {
    user_agents: ["iPhone.*CriOS/"],
    app: "Google Chrome",
    device: "phone",
    os: "ios",
  },
  {
    user_agents: ["^gPodder/.*Windows", "^gpodder\\.net"],
    app: "gPodder",
    os: "windows",
    device: "pc",
    examples: ["gPodder/3.10.8 (+http://gpodder.org/) Windows/10"],
  },
  {
    user_agents: ["^GStreamer"],
    device: "radio",
  },
  {
    user_agents: ["^GaanaAndroid-"],
    app: "Gaana",
    os: "android",
    examples: [
      "GaanaAndroid-8.13.0/Dalvik/2.1.0 (Linux; U; Android 9; vivo 1906 Build/PKQ1.190616.001)",
      "GaanaAndroid-8.13.0/Dalvik/2.1.0 (Linux; U; Android 5.1; Micromax P701 Build/LMY47D)",
    ],
  },
  {
    user_agents: ["^Guardian-iOSLive/"],
    app: "Guardian",
    os: "ios",
  },
  {
    user_agents: ["GuardianAndroidApp/"],
    app: "Guardian",
    os: "android",
  },
  {
    user_agents: ["^gvfs"],
    bot: true,
  },
  {
    user_agents: ["^\\+hermespod\\.com/"],
    app: "HermesPod",
    device: "pc",
    examples: ["+hermespod.com/v1.5.x"],
    info_url: "http://hermespod.com/",
    os: "windows",
  },
  {
    user_agents: ["^Himalaya/.+iPhone"],
    app: "Himalaya",
    device: "phone",
    examples: [
      "Himalaya/2.4.41 (iPhone; iOS 14.0.1; Scale/3.00; CFNetwork; iPhone9,4)",
      "Himalaya/2.4.42 (iPhone; iOS 14.2; Scale/2.00; CFNetwork; iPhone8,1)",
    ],
    os: "ios",
    description: "Himalaya is a podcast app",
  },
  {
    user_agents: ["^iCatcher"],
    app: "iCatcher",
    device: "phone",
    os: "ios",
  },
  {
    user_agents: ["^iHeartRadio/.*Android"],
    app: "iHeartRadio",
    os: "android",
    examples: [
      "iHeartRadio/9.19.0 (Android 10; SM-G960U Build/QP1A.190711.020)",
      "iHeartRadio/9.19.0 (Android 9; SM-G950U Build/PPR1.180610.011)",
    ],
    info_url:
      "https://play.google.com/store/apps/details?id=com.clearchannel.iheartradio.controller",
  },
  {
    user_agents: ["^iHeartRadio/.* CFNetwork/", "^iHeartRadio/.* iOS"],
    app: "iHeartRadio",
    os: "ios",
    examples: [
      "iHeartRadio/2020052002 CFNetwork/1125.2 Darwin/19.4.0",
      "iHeartRadio/9.20.0 (iPhone; iOS 13.4.1; iPhone11,8)",
      "iHeartRadio/9.20.0 (iPad; iOS 13.4.1; iPad6,12)",
      "iHeartRadio/9.7.0 (iPod touch; iOS 12.4.5; iPod7,1)",
    ],
    info_url:
      "https://apps.apple.com/us/app/iheart-radio-music-podcasts/id290638154",
  },
  {
    user_agents: ["MSIE "],
    app: "Internet Explorer",
    device: "pc",
    examples: [
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)",
    ],
    os: "windows",
  },
  {
    user_agents: ["iVoox"],
    app: "iVoox",
    info_url: "https://www.ivoox.com/",
  },
  {
    user_agents: ["iTMS", "itunesstored"],
    bot: true,
  },
  {
    user_agents: ["^iTunes/.+Mac OS", "^iTunes/.+OS X"],
    examples: [
      "iTunes/10.6.3 (Macintosh; Intel Mac OS X 10.5.8) AppleWebKit/534.50.2",
    ],
    app: "iTunes",
    device: "pc",
    info_url: "https://www.apple.com/itunes/",
    os: "macos",
  },
  {
    user_agents: ["^iTunes/.+Windows"],
    examples: [
      "iTunes/11.4 (Windows; Microsoft Windows 7 x64 Home Premium Edition (Build 7600)) AppleWebKit/7600.1017.0.24",
      "iTunes/12.10.9 (Windows; Microsoft Windows 10 x64 Home Premium Edition (Build 19041); x64) AppleWebKit/7609.3005.1003.3",
    ],
    app: "iTunes",
    device: "pc",
    os: "windows",
  },
  {
    user_agents: ["^iTunes/4"],
    device: "speaker",
  },
  {
    user_agents: ["J. River Internet Reader"],
    examples: [
      "Microsoft-Windows-XP/2002, UPnP/1.1, J. River Internet Reader/2.0 (compatible; Windows-Media-Player/10)",
    ],
    app: "JRiver Media Center",
    device: "pc",
    info_url: "https://www.jriver.com/",
    os: "windows",
  },
  {
    user_agents: [".*KAIOS/"],
    app: "KAIOS podcast app",
    device: "phone",
    os: "kaios",
    info_url: "https://kaiostech.com",
    examples: [
      "Mozilla/5.0 (Mobile; LYF/F271i/LYF_F271i-000-01-20-101019; Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5",
    ],
    developer_notes:
      "This is a standard useragent for KaiOS, the cut-down operating system for mobile phones in developing countries. Watch out - it may also contain Android.",
  },
  {
    user_agents: [".*PodLP/"],
    app: "PodLP podcast app for KaiOS",
    device: "phone",
    os: "kaios",
    info_url: "https://podlp.com",
    examples: [
      "Mozilla/5.0 (Mobile; LYF/F271i/LYF_F271i-000-01-20-101019; Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5 PodLP/1.3.2.0",
    ],
    description:
      "PodLP is the first podcast app available for KaiOS smart feature phones on the KaiStore.",
    developer_notes:
      "Introduced in version v1.2.0.0 for limited content (downloads); available for all content after v1.3.0.0",
  },
  {
    user_agents: ["^Laughable.+iOS"],
    app: "Laughable",
    device: "phone",
    os: "ios",
  },
  {
    user_agents: ["^lesindesradios$"],
    app: "Les Indés Radios",
    os: "ios",
    device: "phone",
    description:
      "Les Indés Radios is a radio app, available on multiple devices and OSs",
    info_url: "https://www.lesindesradios.fr/",
    examples: ["lesindesradios"],
  },
  {
    user_agents: ["^lesindesradios/.*\\(Linux;Android"],
    app: "Les Indés Radios",
    os: "android",
    device: "phone",
    description:
      "Les Indés Radios is a radio app, available on multiple devices and OSs",
    info_url: "https://www.lesindesradios.fr/",
    examples: [
      "lesindesradios/9.1.0 (Linux;Android 8.0.0) ExoPlayerLib/2.9.2",
      "lesindesradios/9.1.0 (Linux;Android 11) ExoPlayerLib/2.9.2",
    ],
  },
  {
    user_agents: ["^com.jio.media.jiobeats", "^com.saavn.android", "^saavn"],
    app: "JioSaavn",
    os: "android",
    info_url: "https://www.jiosaavn.com/",
    description:
      "A music streaming and podcast app from India. Earn Your Happy!",
    developer_notes:
      "The user-agent will start with one of the above strings followed by the app version and player version.",
    examples: [
      "com.jio.media.jiobeats/7.3.1 (Linux;Android 8.1.0) ExoPlayerLib/2.11.4",
    ],
  },
  {
    user_agents: ["^lamarr-iOS", "^TheEconomist-Lamarr-ios"],
    app: "The Economist",
    device: "phone",
    os: "ios",
    examples: ["lamarr-iOS-2.20.3-116", "TheEconomist-Lamarr-ios-2.22.2-12002"],
  },
  {
    user_agents: ["^lamarr-android", "^TheEconomist-Lamarr-android"],
    app: "The Economist",
    device: "phone",
    os: "android",
    examples: [
      "lamarr-android-2.18.1-21810",
      "TheEconomist-Lamarr-android-2.22.2-12002",
    ],
  },
  {
    user_agents: ["LG Player"],
    device: "phone",
    os: "android",
  },
  {
    user_agents: ["^libwww-perl"],
    bot: true,
  },
  {
    user_agents: ["Listen5"],
    app: "Listen5",
    device: "phone",
    os: "ios",
  },
  {
    user_agents: ["LivelapBot"],
    bot: true,
  },
  {
    user_agents: ["^Luminary/.+Android"],
    app: "Luminary",
    device: "phone",
    os: "android",
  },
  {
    user_agents: ["^Luminary/.+iOS"],
    app: "Luminary",
    device: "phone",
    os: "ios",
  },
  {
    user_agents: ["^MajelanApp"],
    app: "Majelan",
  },
  {
    user_agents: ["^Mechanize"],
    bot: true,
  },
  {
    user_agents: ["^MediaMonkey"],
    app: "MediaMonkey",
    device: "pc",
    os: "windows",
  },
  {
    user_agents: ["^Miro/.+Windows"],
    app: "Miro",
    device: "pc",
    examples: [
      "Miro/6.0 (http://www.getmiro.com/; Windows post2008Server x86)",
    ],
    info_url: "http://www.getmiro.com/",
    os: "windows",
  },
  {
    user_agents: [".*MJ12bot"],
    app: "MJ12bot",
    examples: ["Mozilla/5.0 (compatible; MJ12bot/v1.4.8; http://mj12bot.com/)"],
    bot: true,
  },
  {
    user_agents: ["^mpv 0\\."],
    app: "mpv",
    info_url: "https://mpv.io/",
  },
  {
    user_agents: ["^MusicBee"],
    app: "MusicBee",
    device: "pc",
    examples: ["MusicBee"],
    info_url: "https://getmusicbee.com/",
    os: "windows",
  },
  {
    user_agents: ["^NPR%20One/"],
    app: "NPR One",
    examples: ["NPR%20One/234 CFNetwork/1197 Darwin/20.0.0"],
  },
  {
    user_agents: ["^NPROneAndroid"],
    app: "NPR One",
    os: "android",
    examples: ["NPROneAndroid"],
  },
  {
    user_agents: ["^OkDownload/"],
  },
  {
    user_agents: ["okhttp"],
    examples: ["okhttp/3.11.0"],
  },
  {
    user_agents: ["Opera/.*Android;"],
    app: "Opera",
    os: "android",
  },
  {
    user_agents: ["Opera/.*\\(Linux"],
    app: "Opera",
    device: "pc",
    os: "linux",
  },
  {
    user_agents: ["Opera/.*\\(Macintosh"],
    app: "Opera",
    device: "pc",
    os: "macos",
  },
  {
    user_agents: ["Opera/.*\\(Windows", "Windows.*OPR/"],
    app: "Opera",
    device: "pc",
    os: "windows",
  },
  {
    user_agents: ["Macintosh.*OPR/"],
    app: "Opera",
    os: "macos",
    device: "pc",
    examples: [
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36 OPR/72.0.3815.186",
    ],
  },
  {
    user_agents: ["^MauiBot"],
    app: "MauiBot",
    bot: true,
    examples: ["MauiBot (crawler.feedback dc@gmail.com)"],
  },
  {
    user_agents: ["Opera[/ ]"],
    app: "Opera",
  },
  {
    user_agents: ["^Overcast/2", "^Overcast/3"],
    app: "Overcast",
    examples: ["Overcast/3.0 (+http://overcast.fm/; iOS podcast app)"],
    os: "ios",
  },
  {
    user_agents: ["^Overcast.*Apple Watch"],
    app: "Overcast",
    examples: ["Overcast ( http://overcast.fm/; Apple Watch podcast app)"],
    os: "watchos",
    device: "watch",
  },
  {
    user_agents: ["^Overcast/1.0 Podcast Sync"],
    app: "Overcast feed parser",
    examples: ["Overcast/1.0 Podcast Sync"],
    developer_notes:
      "Marco Arment says: when a new episode is detected, the servers fetch a copy of it to seed these values with an initial set of data to make the privacy screen more accurate.",
    bot: true,
  },
  {
    user_agents: ["^PandoraRSSCrawler"],
    bot: true,
    app: "Pandora RSS crawler",
  },
  {
    user_agents: ["^Pandora.+Android"],
    app: "Pandora",
    os: "android",
    examples: [
      "Pandora/2009.2 Android/7.1.1 gteslteatt (ExoPlayerLib1.5.14.1)",
    ],
  },
  {
    user_agents: ["iPhone.+Pandora/"],
    app: "Pandora",
    device: "phone",
    os: "ios",
    examples: [
      "Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Pandora/2009.2",
    ],
  },
  {
    user_agents: ["PaperLiBot/"],
    app: "PaperLi",
    examples: [
      "Mozilla/5.0 (compatible; PaperLiBot/2.1; https://support.paper.li/entries/20023257-what-is-paper-li)",
    ],
    bot: true,
  },
  {
    user_agents: ["^Player FM"],
    app: "Player FM",
  },
  {
    user_agents: ["^Pingdom"],
    bot: true,
  },
  {
    user_agents: ["^Pocket Casts", "^PocketCasts/"],
    app: "Pocket Casts",
    examples: ["Pocket Casts"],
    info_url: "https://www.pocketcasts.com/",
    description: "A podcast app and web player",
    developer_notes:
      "'PocketCasts' is a feed parser; 'Pocket Casts' is the app. There is also a web player.",
    svg: "pocketcasts.svg",
  },
  {
    user_agents: ["^Podcast.*Addict/"],
    app: "PodcastAddict",
    device: "phone",
    examples: [
      "PodcastAddict/v2 - Dalvik/2.1.0 (Linux; U; Android 9; SM-N950U Build/PPR1.180610.011)",
      "PodcastAddict/v5 ( https://podcastaddict.com/; Android podcast app)",
    ],
    os: "android",
  },
  {
    user_agents: ["iOS.*The Podcast App/", "com.evolve.podcast/"],
    app: "The Podcast App",
    os: "ios",
    examples: [
      "podcast/2358 iOS/Version 13.5.1 (Build 017F80) The Podcast App/3.22.1",
      "com.evolve.podcast/3.22.1 (iPhone; ) (build 2358, iOS 13.5.1)",
    ],
    developer_notes:
      "The com.evolve version of the useragent is an error, and has been reported to the developers as a bug. Caution: the beginning of their main useragent is similar to Google Podcasts.",
  },
  {
    user_agents: ["^PodcastGuru "],
    app: "Podcast Guru",
    os: "android",
    info_url: "https://podcastguru.io/",
    description: "Podcast Guru is the simple and free podcast player",
  },
  {
    user_agents: ["^PodcastRepublic.+Android"],
    app: "PodcastRepublic",
    device: "phone",
    examples: [
      "PodcastRepublic/18.0 (Linux; U; Android 10;blueline/QP1A.190711.020.C3)",
    ],
    os: "android",
  },
  {
    user_agents: ["podCloud"],
    app: "PodCloud",
    description:
      "Le podcast, simplement. A French-language web-based podcast player.",
    bot: true,
    developer_notes:
      "This useragent is a bot, doing feed updates and downloading media files. It was observed every six hours. User plays will have a standard browser useragent with a referer of https://podcloud.fr/ ",
    info_url: "https://podcloud.fr",
  },
  {
    user_agents: ["^Podcoin"],
    app: "Podcoin",
  },
  {
    user_agents: ["^PodCruncher/.* CFNetwork/"],
    app: "PodCruncher",
    os: "ios",
    examples: [
      "PodCruncher/3.7.1 CFNetwork/1125.2 Darwin/19.4.0",
      "PodCruncher/3.7.1 CFNetwork/978.0.7 Darwin/18.7.0",
    ],
    info_url:
      "https://apps.apple.com/us/app/podcruncher-podcast-player/id421894356",
  },
  {
    user_agents: ["^Podbean/Android App", "^Podbean/Android generic"],
    app: "Podbean",
    os: "android",
    examples: [
      "Podbean/Android App 7.6.4 (http://podbean.com),1927526fe23b5acf535b3e91b64cee95",
      "Podbean/Android App 8.1.5 (http://podbean.com),4f6852f59091d32475ef75a53325a4fe",
      "Podbean/Android generic 1.1.2 (http://podbean.com),9376c517335ded9a716022cc1f15c884",
    ],
    info_url:
      "https://play.google.com/store/apps/details?id=com.podbean.app.podcast",
  },
  {
    user_agents: ["^Podbean/iOS"],
    app: "Podbean",
    os: "ios",
    examples: [
      "Podbean/iOS (http://podbean.com) 5.2.0 - 19c4ff292bd09cd2ccbad22cc6755a45",
    ],
    info_url:
      "https://apps.apple.com/us/app/podbean-podcast-app-player/id973361050",
  },
  {
    user_agents: ["podfollowbot/"],
    app: "Podfollow",
    examples: ["Mozilla/5.0 https://podfollow.com/crawling podfollowbot/1.0"],
    info_url: "https://podfollow.com",
    description: "Podfollow, a service to help link to your podcast",
    bot: true,
  },
  {
    user_agents: ["^Podhero", "^Swoot/"],
    app: "Podhero",
    examples: ["Podhero%20Alpha/4373 CFNetwork/1197 Darwin/20.0.0"],
    info_url: "https://podhero.com",
    description: "Podhero app on iOS and Android.",
  },
  {
    user_agents: ["^Podkicker"],
    app: "Podkicker Pro",
    os: "android",
  },
  {
    user_agents: ["PodLink"],
    app: "PodLink",
    info_url: "https://pod.link/faq/crawler",
  },
  {
    user_agents: ["^PodMN/Android"],
    description: "Minnesota Podcasts Live Here",
    examples: ["PodMN/Android 1.2.6 (Android 7.1.1; SM-J510FN Build/NMF26X)"],
    info_url: "https://play.google.com/store/apps/details?id=com.podmn.app",
    app: "PodMN",
    device: "phone",
    os: "android",
    svg: "podmn.svg",
  },
  {
    user_agents: ["^PodMN/iOS"],
    description: "Minnesota Podcasts Live Here",
    examples: ["PodMN/iOS 1.2.6 (iPhone XR/13.6.1)"],
    info_url: "https://apps.apple.com/us/app/podmn/id1464935818",
    app: "PodMN",
    device: "phone",
    os: "ios",
    svg: "podmn.svg",
  },
  {
    user_agents: ["PodnewsBot"],
    app: "Podnews",
    bot: true,
    description:
      "Podnews runs a number of bots to read and test RSS and audio files",
    info_url: "http://podnews.net",
  },
  {
    user_agents: ["podnods-crawler", "podnods"],
    app: "Podnods",
    bot: true,
    description:
      "Podnods is a podcast discovery site. This user agent is for crawling podcast data.",
    info_url: "https://podnods.com/about",
  },
  {
    user_agents: ["podnods-player"],
    app: "Podnods",
    description:
      "Podnods is a podcast discovery site. This user agent is for users to sample and play podcasts.",
    info_url: "https://podnods.com/about",
  },
  {
    user_agents: ["Podyssey App"],
    app: "Podyssey",
    description:
      "Podyssey is a community for people that love podcasts. It's like Goodreads, but for podcasts.",
    info_url: "https://podyssey.fm",
  },
  {
    user_agents: ["com.toysinboxes.Echo"],
    app: "Podyssey",
    description:
      "Podyssey is a community for people that love podcasts. It's like Goodreads, but for podcasts.",
    info_url: "https://podyssey.fm",
    os: "ios",
  },
  {
    user_agents: ["fm.podyssey.podcasts"],
    app: "Podyssey",
    description:
      "Podyssey is a community for people that love podcasts. It's like Goodreads, but for podcasts.",
    info_url: "https://podyssey.fm",
    os: "android",
  },
  {
    user_agents: ["python-requests"],
    bot: true,
  },
  {
    user_agents: ["^radio.de/app.+Android"],
    app: "radio.de",
    os: "android",
    description: "Radio.de is a radio and podcast app in Germany",
    info_url: "https://www.radio.de/",
  },
  {
    user_agents: ["^Radioplayer Android app"],
    app: "RadioPlayer",
    os: "android",
    description:
      "Radioplayer is a radio and podcast app, with country-specific versions available in selected countries.",
    info_url: "http://radioplayer.org",
  },
  {
    user_agents: ["^Radioplayer iOS app"],
    app: "RadioPlayer",
    os: "ios",
    description:
      "Radioplayer is a radio and podcast app, with country-specific versions available in selected countries.",
    info_url: "http://radioplayer.org",
  },
  {
    user_agents: ["^RadioPublic/android-", "^RadioPublic Android"],
    app: "RadioPublic",
    description:
      "RadioPublic’s free, easy to use podcast player makes listening to podcasts simple, enjoyable, and fun.",
    examples: ["RadioPublic/android-2.2"],
    info_url: "https://radiopublic.com/",
    svg: "radiopublic.svg",
    os: "android",
  },
  {
    user_agents: [
      "RadioPublic iOS",
      "RadioPublic.+CFNetwork",
      "^RadioPublic/iOS",
    ],
    app: "RadioPublic",
    description:
      "RadioPublic’s free, easy to use podcast player makes listening to podcasts simple, enjoyable, and fun.",
    examples: ["RadioPublic/iOS-2.0"],
    info_url: "https://radiopublic.com/",
    svg: "radiopublic.svg",
    os: "ios",
  },
  {
    user_agents: ["request\\.js"],
    bot: true,
  },
  {
    user_agents: ["^Roku/DVP-8.*\\(04"],
    device: "tv",
    os: "roku",
  },
  {
    user_agents: ["^RSSRadio \\("],
    bot: true,
  },
  {
    user_agents: ["^RSSRadio"],
    app: "RSS Radio",
    device: "phone",
    examples: [
      "RSSRadio7/9252 CFNetwork/1107.1 Darwin/19.0.0",
      "RSSRadio/9710",
    ],
    info_url: "http://rssrad.io",
    os: "ios",
  },
  {
    user_agents: ["^Ruby"],
    developer_notes: "The generic Ruby user-agent.",
  },
  {
    user_agents: ["SemrushBot/"],
    app: "SEMrushBot",
    examples: [
      "Mozilla/5.0 (compatible; SemrushBot/6~bl; http://www.semrush.com/bot.html)",
    ],
    bot: true,
  },
  {
    user_agents: ["SerendeputyBot/"],
    app: "Serendeputy",
    examples: [
      "SerendeputyBot/0.8.6 (http://serendeputy.com/about/serendeputy-bot)",
    ],
    bot: true,
    info_url: "https://serendeputy.com/about/serendeputy-bot",
  },
  {
    user_agents: ["^Spotify/.+Linux"],
    app: "Spotify",
    device: "pc",
    os: "linux",
  },
  {
    user_agents: ["Macintosh.+Spotify/", "^Spotify/.+OSX"],
    app: "Spotify",
    device: "pc",
    os: "macos",
  },
  {
    user_agents: ["Windows.+Spotify/", "^Spotify/.+Win32"],
    app: "Spotify",
    device: "pc",
    os: "windows",
  },
  {
    user_agents: ["^Spotify/.+Android"],
    app: "Spotify",
    device: "phone",
    os: "android",
  },
  {
    user_agents: ["^Spotify/.*iOS"],
    app: "Spotify",
    device: "phone",
    os: "ios",
  },
  {
    user_agents: ["^Spotify/1.0$"],
    app: "Spotify cache service",
    bot: true,
    examples: ["Spotify/1.0"],
    developer_notes:
      "This useragent, currently simply Spotify/1.0, is used when retrieving the RSS and audio for Spotify's catalogue. It isn't used for passthru.",
  },
  {
    user_agents: [
      "Macintosh.*AppleWebKit(?!.*(Chrome/)).*Safari/(?!.*(AdsBot/))",
    ],
    app: "Safari",
    device: "pc",
    os: "macos",
    examples: [
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15",
    ],
  },
  {
    user_agents: ["Windows.*AppleWebKit(?!.*(Chrome/)).*Safari/"],
    app: "Safari",
    device: "pc",
    os: "windows",
  },
  {
    user_agents: ["iPhone.*AppleWebKit(?!.*(AdsBot|bingbot|CriOS)).*Safari/"],
    app: "Safari",
    device: "phone",
    os: "ios",
  },
  {
    user_agents: ["iPad.*AppleWebKit.*Safari/"],
    app: "Safari",
    device: "tablet",
    os: "ios",
  },
  {
    user_agents: ["^Slack/"],
    app: "Slack",
  },
  {
    user_agents: ["^Subcast"],
    app: "Subcast",
  },
  {
    user_agents: ["Sonnet"],
    app: "Sonnet",
    description:
      "Sonnet is a simple, easy to use podcast app aimed at new listeners",
    os: "android",
    info_url: "https://sonnet.fm",
    svg: "sonnet.svg",
  },
  {
    user_agents: ["Sonos"],
    app: "Sonos",
    device: "speaker",
    os: "sonos",
  },
  {
    user_agents: ["^Spreaker for Android"],
    app: "Spreaker",
    os: "android",
  },
  {
    user_agents: ["Spreaker/"],
    app: "Spreaker",
  },
  {
    user_agents: ["support@dorada.co.uk"],
    bot: true,
  },
  {
    user_agents: ["^Stitcher/Android", "^Stitcher Demo/"],
    examples: [
      "Stitcher Demo/4.8.0 (Linux;Android 11) ExoPlayerLib/2.10.7",
      "Stitcher/Android",
    ],
    app: "Stitcher",
    os: "android",
  },
  {
    user_agents: ["^AlexaMediaPlayer/Stitcher"],
    app: "Stitcher",
    device: "speaker",
    os: "alexa",
  },
  {
    user_agents: ["^Stitcher/iOS"],
    app: "Stitcher",
    os: "ios",
    device: "phone",
  },
  {
    user_agents: ["^StitcherBot"],
    app: "Stitcher",
    bot: true,
  },
  {
    user_agents: ["^Storiyoh/"],
    app: "Storiyoh",
  },
  {
    user_agents: ["^Swinsian/"],
    app: "Swinsian",
    device: "pc",
    examples: ["Swinsian/472 CFNetwork/978.0.7 Darwin/18.7.0 (x86_64)"],
    info_url: "https://swinsian.com/",
    os: "macos",
  },
  {
    user_agents: ["TrendsmapResolver/"],
    app: "Trendsmap Resolver",
    bot: true,
  },
  {
    user_agents: ["^Trackable/"],
    app: "Chartable",
    info_url: "https://chartable.com/",
    bot: true,
  },
  {
    user_agents: ["^TuneIn Radio/.*;Android"],
    examples: ["TuneIn Radio/24.2 (Linux;Android 10) ExoPlayerLib/2.11.4"],
    app: "TuneIn",
    os: "android",
    info_url: "https://play.google.com/store/apps/details?id=tunein.player",
  },
  {
    user_agents: ["^TuneIn Radio Pro/.*;Android"],
    examples: [
      "TuneIn Radio Pro/23.3.2 (Linux;Android 5.1.1) ExoPlayerLib/2.10.7",
    ],
    app: "TuneIn",
    os: "android",
    info_url: "https://play.google.com/store/apps/details?id=radiotime.player",
  },
  {
    user_agents: ["^TuneIn(%20| )Radio/.*(CFNetwork/|iPhone)"],
    examples: [
      "TuneIn Radio/1366 CFNetwork/1121.2.2 Darwin/19.3.0",
      "TuneIn Radio/18.1; iPhone12,8; iOS/13.4.1",
      "TuneIn%20Radio/1383 CFNetwork/1125.2 Darwin/19.4.0",
    ],
    app: "TuneIn",
    os: "ios",
    info_url:
      "https://apps.apple.com/us/app/tunein-radio-live-news-music/id418987775",
  },
  {
    user_agents: ["^TuneIn(%20| )Radio(%20| )Pro/.*CFNetwork/"],
    examples: [
      "TuneIn Radio Pro/1361 CFNetwork/1121.2.2 Darwin/19.3.0",
      "TuneIn%20Radio%20Pro/1383 CFNetwork/1125.2 Darwin/19.4.0",
    ],
    app: "TuneIn",
    os: "ios",
    info_url:
      "https://apps.apple.com/us/app/tunein-pro-radio-sports/id319295332",
  },
  {
    user_agents: ["^TuneIn(?!.*(CFNetwork|Android))"],
    examples: ["TuneIn Radio"],
    app: "TuneIn",
    info_url: "https://tunein.com/",
    developer_notes: "Other versions of this app use many other user agents.",
  },
  {
    user_agents: ["^Twitterbot"],
    bot: true,
  },
  {
    user_agents: ["^Typhoeus"],
    bot: true,
  },
  {
    user_agents: ["^VictorReader Stream"],
    app: "VictorReader",
    device: "speaker",
    os: "victorreader",
  },
  {
    user_agents: ["^VLC/\\d"],
    app: "VLC media player",
    device: "pc",
    examples: ["VLC/3.0.8 LibVLC/3.0.8"],
    info_url: "https://www.videolan.org/vlc/",
  },
  {
    user_agents: ["Wget"],
    app: "Wget",
    bot: true,
  },
  {
    user_agents: ["^Winamp"],
    app: "Winamp",
    device: "pc",
    examples: ["WinampMPEG/2.7"],
    os: "windows",
  },
  {
    user_agents: ["^NSPlayer", "^WMPlayer/"],
    app: "Windows Media Player",
    device: "pc",
    examples: ["NSPlayer/12.00.18362.0418 WMFSDK/12.00.18362.0418"],
    os: "windows",
  },
  {
    user_agents: ["^WordPress"],
    bot: true,
  },
  {
    user_agents: ["YandexBot/"],
    app: "YandexBot",
    bot: true,
  },
  {
    user_agents: ["^yapa/"],
    app: "Yapa",
  },
  {
    user_agents: ["stagefright/"],
    os: "android",
  },
  {
    user_agents: ["^Podimo/.*iOS"],
    app: "Podimo",
    device: "phone",
    os: "ios",
    examples: ["Podimo/1.11.3 build 121/iOS 13.3"],
    info_url:
      "https://apps.apple.com/dk/app/podimo-a-world-of-podcasts/id1476538730",
  },
  {
    user_agents: ["^Podimo/.*Android"],
    app: "Podimo",
    device: "phone",
    os: "android",
    examples: ["Podimo/1.11.3 build 91/Android 28"],
    info_url:
      "https://play.google.com/store/apps/details?id=com.podimo&hl=en_US",
  },
  {
    user_agents: ["BingPreview/", "adidxbot/", "bingbot/"],
    app: "Microsoft Bingbot",
    bot: true,
    info_url:
      "https://www.bing.com/webmaster/help/which-crawlers-does-bing-use-8c184ec0",
    examples: [
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534 (KHTML, like Gecko) BingPreview/1.0b",
    ],
  },
  {
    user_agents: ["^msnbot/"],
    bot: true,
  },
  {
    user_agents: ["^Deezer Podcasters/1\\.0"],
    bot: true,
    app: "Deezer Podcasters",
  },
  {
    user_agents: ["^devcasts/.*CFNetwork"],
    app: "DevCasts",
    os: "ios",
    description:
      "Our Devcasts app is a new kind of podcast listening app. It is simply the best way for developers to enjoy all of the excellent podcast content created for developers.",
    examples: ["devcasts/1.0.1.00 CFNetwork/1197 Darwin/20.0.0"],
    info_url: "http://devcasts.co/",
  },
  {
    user_agents: ["^got/"],
    bot: true,
    info_url:
      "https://play.google.com/store/apps/details?id=com.podimo&hl=en_US",
    developer_notes: "Got is a HTTP library for NodeJs",
  },
  {
    user_agents: ["INA dlweb"],
    bot: true,
    app: "l'Institut national de l'audiovisuel",
    info_url: "https://institut.ina.fr/collecte-du-depot-legal-web",
    developer_notes:
      "Institut National de l'Audiovisuel is a repository of all French radio and television audiovisual archives.",
  },
  {
    user_agents: ["^Instagram/"],
    app: "Instagram",
    examples: ["Instagram/252729634 CFNetwork/1126 Darwin/19.5.0"],
  },
  {
    user_agents: [
      "^SoundOn/[\\d\\.]+\\s+\\(Linux;Android",
      "^SoundOn/[^12]\\.\\d+\\.\\d+$",
      "^SoundOn/1\\.[^1][^0-2]?\\.\\d+$",
    ],
    app: "SoundOn",
    device: "phone",
    examples: ["SoundOn/1.9.17 (Linux;Android 10) ExoPlayerLib/2.9.4"],
    os: "android",
  },
  {
    user_agents: [
      "^SoundOn/1\\.1[0-2]\\.\\d+$",
      "^SoundOn/2\\.\\d+\\.\\d+$",
      "^SoundOn/[\\d\\.]+\\s+\\(iOS",
    ],
    app: "SoundOn",
    device: "phone",
    examples: ["SoundOn/1.10.1", "SoundOn/2.2.0", "SoundOn/2.2.2 (iOS)"],
    os: "ios",
  },
  {
    user_agents: ["^SoundOn/[\\d\\.]+\\s+\\(bot"],
    bot: true,
  },
  {
    user_agents: ["^Podverse/Android Mobile App/"],
    app: "Podverse Android Mobile App",
    device: "phone",
    os: "android",
    info_url:
      "https://play.google.com/store/apps/details?id=com.podverse&hl=en_US",
    description:
      "Open source podcast catcher for Android, with clip-sharing, playlists, device syncing and more.",
    developer_notes:
      "The standard device user agent is concatenated to the end of the Podverse/Android Mobile App/ user agent.",
  },
  {
    user_agents: ["^Podverse/iOS Mobile App/"],
    app: "Podverse iOS Mobile App",
    device: "phone",
    os: "ios",
    examples: [
      "Podverse/iOS Mobile App/Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/1234",
    ],
    description:
      "Open source podcast catcher for iOS, with clip-sharing, playlists, device syncing and more.",
    info_url: "https://apps.apple.com/us/app/podverse/id1390888454",
    developer_notes:
      "The standard device user agent is concatenated to the end of the Podverse/iOS Mobile App/ user agent.",
  },
  {
    user_agents: ["^Podverse/Feed Parser"],
    bot: true,
    app: "Podverse Server-Side Feed Parser",
    info_url: "https://podverse.fm",
    description: "The Podverse feed parser.",
    developer_notes:
      "This service parses publicly-accessible RSS feeds on a timer, then stores parsed data in the Podverse database.",
  },
  {
    user_agents: ["^Podcast/1."],
    app: "小宇宙",
    info_url: "https://www.coolapk.com/apk/app.podcast.cosmos",
    description: "Cosmos, a chinese podcast app",
  },
  {
    user_agents: ["^Xiaoyuzhou/.*Android/"],
    app: "Xiao Yu Zhou",
    description: "Xiao Yu Zhou, a podcast app",
    os: "android",
    examples: ["Xiaoyuzhou/1.9.6 Android/10"],
  },
  {
    user_agents: ["^Xiaoyuzhou/(?!.*(Android/))"],
    app: "Xiao Yu Zhou",
    description: "Xiao Yu Zhou, a podcast app",
    info_url:
      "https://apps.apple.com/cn/app/%E5%B0%8F%E5%AE%87%E5%AE%99-%E4%B8%80%E8%B5%B7%E5%90%AC%E6%92%AD%E5%AE%A2/id1488894313",
    os: "ios",
    examples: ["Xiaoyuzhou/1.9.0", "Xiaoyuzhou/1.5.1"],
  },
  {
    user_agents: ["^yacybot"],
    app: "YaCy",
    bot: true,
    description: "Decentralized Web Search",
    info_url: "http://yacy.net/bot.html",
    examples: [
      "yacybot (/global; amd64 Linux 5.9.8-zen1-1-zen; java 1.8.0_265; Europe/de) http://yacy.net/bot.html",
    ],
  },
  {
    user_agents: ["^Podcast-CriticalMention/"],
    app: "Critical Mention",
    description:
      "Critical Mention is a business intelligence company, monitoring podcasts on the web for their clients",
    bot: true,
    examples: ["Podcast-CriticalMention/1.0"],
  },
  {
    user_agents: ["^RSSOwl.*Windows"],
    app: "RSSOwl",
    description:
      "A Mac and Windows app, to help organize, search, and read feeds",
    device: "pc",
    os: "windows",
    info_url: "http://www.rssowl.org/",
    examples: ["RSSOwl/2.2.1.201312301314 (Windows; U; en)"],
  },
  {
    user_agents: ["^ltx71 "],
    app: "LTX71",
    info_url: "http://ltx71.com/",
    description:
      "We continuously scan the internet for security research purposes.",
    bot: true,
    examples: ["ltx71 - (http://ltx71.com/)"],
  },
  {
    user_agents: ["^bl.uk_ldfc_bot"],
    app: "British Library",
    info_url:
      "http://www.bl.uk/aboutus/legaldeposit/websites/websites/faqswebmaster/index.html",
    description: "British Library's legal deposit web crawler",
    bot: true,
    examples: [
      "bl.uk_ldfc_bot/3.4.0-20200518 ( http://www.bl.uk/aboutus/legaldeposit/websites/websites/faqswebmaster/index.html)",
    ],
  },
  {
    user_agents: ["Archive-It;"],
    app: "Internet Archive",
    info_url: "https://archive-it.org/files/site-owners-special.html",
    description:
      "Archive-It is a web archiving service that allows institutions to build and preserve collections of born digital content saving this content for future generations.",
    bot: true,
    examples: [
      "Mozilla/5.0 (compatible; special_archiver; Archive-It; http://archive-it.org/files/site-owners-special.html)",
    ],
  },
  {
    user_agents: ["VurblBot"],
    app: "Vurbl",
    info_url: "https://vurbl.com/about-us/",
    description: "An audio streaming destination",
    bot: true,
    examples: ["Mozilla/5.0 https://vurbl.com VurblBot/1.0"],
  },
  {
    user_agents: ["PetalBot"],
    app: "PetalBot",
    info_url: "https://aspiegel.com/petalbot",
    description: "PetalBot is an automatic program of the Petal search engine.",
    bot: true,
    examples: [
      "Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; PetalBot; https://aspiegel.com/petalbot)",
    ],
  },
  {
    user_agents: ["PodhoundBeta"],
    app: "Podhound",
    info_url: "http://podhound.co",
    description: "AI-powered podcast discovery",
    bot: true,
    examples: ["PodhoundBeta"],
    developer_notes:
      "'It grabs it once to get the audio file length.', says the developer.",
  },
  {
    user_agents: ["hermespod.com/"],
    app: "HermesPod",
    info_url: "http://hermespod.com/",
    description:
      "HermesPod is the easiest way to subscribe, download and listen to podcasts. It's a Windows app.",
    examples: ["hermespod.com/v1.5.x"],
    developer_notes: "HermesPod is no longer supported by its author.",
  },
  {
    user_agents: ["^gvfs/", "^rhythmbox/"],
    app: "Rhythmbox",
    info_url: "https://gitlab.gnome.org/GNOME/rhythmbox",
    description:
      "Rhythmbox is your one-stop multimedia application, supporting a music library, multiple playlists, internet radio, and more.",
    examples: ["gvfs/1.46.1"],
    developer_notes:
      "The new UA is Rhythmbox: https://gitlab.gnome.org/GNOME/rhythmbox/-/issues/1855",
  },
  {
    user_agents: ["archive.org_bot"],
    app: "Archive.org",
    info_url: "https://archive.org/details/archive.org_bot",
    description:
      "The Internet Archive is a nonprofit digital library that preserves web data and makes it available for research purposes through the Wayback Machine.",
    bot: true,
    examples: [
      "Mozilla/5.0 (compatible; archive.org_bot http://archive.org/details/archive.org_bot)",
    ],
  },
  {
    user_agents: ["AAABot"],
    app: "AAABot - unknown bot",
    bot: true,
    examples: ["AAABot"],
  },
  {
    user_agents: ["^MixerBox\\/.*Android"],
    app: "MixerBox",
    os: "android",
    examples: ["MixerBox/12.33 (Linux;Android 11) ExoPlayerLib/2.11.1"],
  },
  {
    user_agents: ["^MixerBox\\/.*iOS"],
    name: "MixerBox",
    os: "ios",
    examples: ["MixerBox/807.iOS (iPhone; iOS 14.4; en_US)"],
  },
  {
    user_agents: ["^Podcastindex\\.org/"],
    app: "Podcastindex.org",
    bot: true,
    svg: "podcast-index.svg",
    info_url: "https://podcastindex.org/",
    examples: ["Podcastindex.org/v0.3.3 (Aggrivate)"],
  },
];