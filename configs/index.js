const fs = require("fs");
const yaml = require("yaml");
const path = require("path");
const $RefParser = require("@apidevtools/json-schema-ref-parser");

class ConfigLoader {
  constructor() {
    this.config = null;
  }

  async init() {
    try {
      const config = yaml.parse(
        fs.readFileSync(path.join(__dirname, "index.yaml"), "utf8")
      );

      const schema = await $RefParser.dereference(config);

      this.config = schema;

      console.log("schema", schema);
      return schema;
    } catch (e) {
      throw new Error(e);
    }
  }

  getConfig() {
    return this.config;
  }

  getConfigBasedOnFlow(flowId) {
    let filteredInput = null;
    let filteredCalls = null;
    let filteredDomain = null;
    let filteredSessiondata = null;
    let filteredAdditionalFlows = null;

    this.config.flows.forEach((flow) => {
      if (flow.id === flowId) {
        const { input, calls, domain, sessionData, additioalFlows } = flow;
        filteredInput = input;
        filteredCalls = calls;
        filteredDomain = domain;
        filteredSessiondata = sessionData;
        filteredAdditionalFlows = additioalFlows || [];
      }
    });

    return {
      filteredCalls,
      filteredInput,
      filteredDomain,
      filteredSessiondata,
      filteredAdditionalFlows,
    };
  }
}

const configLoader = new ConfigLoader();

module.exports = { configLoader };
