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

      return schema;
    } catch (e) {
      throw new Error(e);
    }
  }

  getConfig() {
    return this.config;
  }
}

const configLoader = new ConfigLoader();
// configLoader.init();

module.exports = { configLoader };
