const Trade = require("../models/TradeModel");

const getTrades=async(req,res)=>{
    try {
        const { type, user_id } = req.query;
        const filter = {};

        if (type) filter.type = type;
        if (user_id) filter.user_id = user_id;

        const trades = await Trade.find(filter).sort({ id: 1 });

        res.status(200).json(trades);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const addTrade=async(req,res)=>{
    try {
        console.log("here")
        const { type, user_id, symbol, shares, price } = req.body;
        const trade = await Trade.create({ type, user_id, symbol, shares, price});
        res.status(201).json(trade);
      } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Invalid input' });
      }
}

const getTradeById=async(req,res)=>{
    try {
        const tradeId = req.params.id;
        const trade = await Trade.findOne({id:tradeId});

        if (!trade) {
          res.status(404).send('ID not found');
        } else {
          res.status(200).json(trade);
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const errorResponse=async(req,res)=>{
    res.status(405).send("Not allowed")
}

module.exports={getTrades,addTrade,getTradeById,errorResponse}