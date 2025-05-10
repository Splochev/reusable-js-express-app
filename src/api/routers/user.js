const { Router } = require('express');
const { makeInvoker } = require('awilix-express');
const userController = require('../controllers/user');

const api = makeInvoker(userController);
const router = Router();

router.get('/', api('test'));

module.exports = router;
