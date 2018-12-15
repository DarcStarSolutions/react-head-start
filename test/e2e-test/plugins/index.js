// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const configuration = require("config");

const PROD = "production";

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config

    /** @namespace configuration.clientConfig */
    config.baseUrl = configuration.clientConfig.apiHost;

    config.env.ENVIRONMENT = configuration.util.getEnv("NODE_ENV");


    if (config.env.ENVIRONMENT !== PROD) {
        console.log("Cypress Configuration: "); //eslint-disable-line no-console
        console.log(config); //eslint-disable-line no-console
    }

    return config;
};
