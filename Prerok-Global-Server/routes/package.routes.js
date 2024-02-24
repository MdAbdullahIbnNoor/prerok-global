const packageController = require('../controlers/package.controlers');

const router = require('express').Router();

router.post('/calculateCost', packageController.calculateCost);

module.exports = router;
