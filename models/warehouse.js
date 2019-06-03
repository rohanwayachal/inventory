const mongoose = require('mongoose');

const config = require('../config/database');


// User Schema
const UserSchema = mongoose.Schema ({
  company: {
    type: String,
	 required: true
  },
  name: {
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
    capacity: {
    type: Number,
    required: true
  },
  reorder: {
    type: Number,
    required: true
  }
});

const Warehouse = module.exports = mongoose.model('Warehouse', UserSchema);


