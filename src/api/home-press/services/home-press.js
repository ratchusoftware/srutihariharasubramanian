'use strict';

/**
 * home-press service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-press.home-press');
