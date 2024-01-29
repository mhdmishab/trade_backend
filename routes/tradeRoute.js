const express = require('express');
const { getTrades, addTrade, getTradeById, errorResponse } = require('../controllers/tradeController');


const route = express.Router();

route.post('/',addTrade);
route.get('/',getTrades);
route.get('/:id',getTradeById);
route.put('/:id',errorResponse)
route.patch('/:id',errorResponse)
route.delete('/:id',errorResponse)

module.exports = route