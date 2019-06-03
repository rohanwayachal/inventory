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
    quantity: {
    type: Number,
    required: true
  },
    price: {
    type: Number,
    required: true
  }
});

const Supplier = module.exports = mongoose.model('Supplier', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByComapny = function(company, callback) {
  const query = {company: company}
  Supplier.find(query, callback);
}
