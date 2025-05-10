const { Router } = require('express');
const { makeInvoker } = require('awilix-express');
const createController = require('../controllers/controller-example');

const api = makeInvoker(createController);
const router = Router();

router.get('/', api('health'));

module.exports = router;
