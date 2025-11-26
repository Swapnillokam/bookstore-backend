const express = require('express');
const Order = require('./order.model');
const { createOrder } = require('./order.controller');
const router = express.Router();

//create a router
router.post('/', createOrder)

//get all orders bby email
router.get('/email/:email', getOrderByEmail)

module.exports = router;