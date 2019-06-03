const mongoose = require('mongoose');

const config = require('../config/database');


// User Schema
const DefectSchema = mongoose.Schema ({
  company: {
    type: String,
	 required: true
  },
  status: {
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
      type: {
    type: String,
  },
    contact: {
    type: String,
  },
      startdate: {
    type: String,
  },
      enddate: {
    type: String,
  },
    price: {
    type: Number,
  }
});

const Defect = module.exports = mongoose.model('Defect', DefectSchema);

