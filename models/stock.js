const mongoose = require('mongoose');

const config = require('../config/database');


// User Schema
const StockSchema = mongoose.Schema ({
  company: {
    type: String,
	 required: true
  },

  productname: {
    type: String,
    required: true
  },
  productcompany: {
    type: String,
  required: true}
  ,
  productfamily: {
    type: String,
    required: true
  },
    quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  warehouse: {
    type: String,
    required: true
  }
});

const Stock = module.exports = mongoose.model('Stock', StockSchema);


