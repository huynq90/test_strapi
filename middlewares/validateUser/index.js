const axios = require('axios');

module.exports = strapi => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        if (ctx.request.url.match(/^\/api/)) {
          console.log('in middleware');
          console.log(ctx.state);
          ctx.state.aa = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.data);
        }
        await next();
      });
    },
  };
};
