const { Router } = require('express');
const routerExample = require('./routers/router-example');

module.exports = (app) => {
  const router = Router();
  router.use('/ethereum', routerExample);
  app.use('/api', router);
};
