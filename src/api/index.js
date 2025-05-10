const { Router } = require('express');
const userRouter = require('./routers/user');

module.exports = (app) => {
  const router = Router();
  router.use('/user', userRouter);
  app.use('/api', router);
};
