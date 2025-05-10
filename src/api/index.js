const { Router } = require('express');
const routerExample = require('./routers/router-example');

module.exports = (app) => {
  const router = Router();
  router.use('/example-controller-path', routerExample);
  app.use('/api', router);
};
