'use strict';

/**
 * dummy-api controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dummy-api.dummy-api');
