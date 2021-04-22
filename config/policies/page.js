'use strict';

/**
 * `page` policy.
 */

module.exports = async (ctx, next) => {
  console.log('in policy');
  console.log(ctx.state);
  if (!ctx.state.aa) {
    ctx.unauthorized(`You're not logged in!`);
  } else {
    return await next();
  }
};
