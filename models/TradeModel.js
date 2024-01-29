const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  id: {
    type: Number,
    // required: true,
    unique: true, 
  },
  type: {
    type: String,
    required: true,
    enum: ['buy', 'sell'],
  },
  user_id: {
    type: Number,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  shares: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  price: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});


tradeSchema.pre('save', async function (next) {
  if (!this.id) {
    const lastTrade = await Trade.findOne({}, {}, { sort: { id: -1 } }); 
    this.id = lastTrade ? lastTrade.id + 1 : 1;
  }
  next();
});

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;
