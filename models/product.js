const mongoose = require('mongoose');

const config = require('../config/database');


// User Schema
const ProductSchema = mongoose.Schema ({
	
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

    price: {
    type: Number,
    required: true
  }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);

