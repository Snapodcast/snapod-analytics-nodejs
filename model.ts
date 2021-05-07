const nohm = require("nohm").Nohm;

module.exports = nohm.model("Stats", {
  properties: {
    episodeCuid: {
      type: "string",
      validations: ["notEmpty"],
      index: true,
    },
    podcastCuid: {
      type: "string",
      validations: ["notEmpty"],
      index: true,
    },
    createdAt: {
      defaultValue: () => Date.now(),
      load_pure: true,
      type: "timestamp",
      index: true,
    },
    country: {
      type: "string",
      validations: ["notEmpty"],
    },
    city: {
      type: "string",
      validations: ["notEmpty"],
    },
    device: {
      type: "string",
      validations: ["notEmpty"],
    },
    client: {
      type: "string",
      validations: ["notEmpty"],
    },
  },
  methods: {
    fill(data, fields, fieldCheck) {
      const props = {};
      const doFieldCheck = typeof fieldCheck === "function";

      fields = Array.isArray(fields) ? fields : Object.keys(data);

      fields.forEach((propKey) => {
        if (
          !Object.prototype.hasOwnProperty.call(this.getDefinitions(), propKey)
        ) {
          return;
        }

        if (doFieldCheck) {
          const fieldCheckResult = fieldCheck(propKey, data[propKey]);
          if (fieldCheckResult === false) {
            return;
          } else if (fieldCheckResult) {
            props[propKey] = fieldCheckResult;
            return;
          }
        }

        props[propKey] = data[propKey];
      });
      this.property(props);
      return props;
    },
    async store(data) {
      this.fill(data);
      await this.save();
    },
    async checkProperties(data, fields) {
      this.fill(data, fields);
      return this.valid(false, false);
    },
    safeAllProperties(stringify) {
      const props = this.allProperties();
      return stringify ? JSON.stringify(props) : props;
    },
  },
});
