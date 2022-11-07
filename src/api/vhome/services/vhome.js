'use strict';

/**
 * vhome service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vhome.vhome');
