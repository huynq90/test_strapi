'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: async ctx => {
    console.log('in controller');
    console.log(ctx.state.aa);
    return ctx.state.aa;
  },
};
