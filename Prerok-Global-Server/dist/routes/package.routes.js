"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packageController = require('../controlers/package.controlers');
const router = require('express').Router();
router.post('/calculateCost', packageController.calculateCost);
module.exports = router;
