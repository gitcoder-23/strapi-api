'use strict';

/**
 * dummy-api service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dummy-api.dummy-api');
