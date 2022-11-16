'use strict';

/**
 * dummy-api router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dummy-api.dummy-api');
