const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Supplier = require('../models/supplier');


// Profile
router.get('/:companyId', (req, res, next) => {
	const companyId = req.params.companyId;
	
  Supplier.find({company:companyId}).exec()
		.then(data => {
		  console.log(data);
		  res.status(200).json(data);
		  })
		  .catch(err=>{
			  res.status(500).json({msg:"no data found"});
		  })
});

//get all suppliers
router.get('/:companyId/:supplierId', (req, res, next) => {
	const companyId = req.params.companyId;
	 const id = req.params.supplierId;
  Supplier.find({company: companyId,name:id}).exec()
		.then(data => {
		  console.log(data);
		  res.status(200).json(data);
		  })
		  .catch(err=>{
			  res.status(500).json({msg:"no data found"});
		  })
});

router.get('/:company/:supplierId', (req, res, next) => {
	
	 const id = req.params.supplierId;
  Supplier.find({name: id}).exec()
		.then(data => {
		  console.log(data);
		  res.status(200).json(data);
		  })
		  .catch(err=>{
			  res.status(500).json({msg:"no data found"});
		  })
});


//add a supplier
router.post('/', (req, res, next) => {
	
	  const supplier=new Supplier(
	{
		company:req.body.company, name:req.body.name,productname:req.body.productname,productcompany:req.body.productcompany,productfamily:req.body.productfamily,quantity:req.body.quantity,price:req.body.price
		
	});
supplier.save().then(result=>{console.log(result);
  res.json({msg: "saved"});

}).catch(err=>{console.log(err);
  res.json({msg: "error"});
});


});


//edit a supplier
router.patch('/:supplierId', (req, res, next) => {
	
	 const id = req.params.supplierId;
	 
	 Supplier.update({ _id: id }, { $set: {company:req.body.company, name:req.body.name,productname:req.body.productname,productcompany:req.body.productcompany,productfamily:req.body.productfamily,quantity:req.body.quantity,price:req.body.price} })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
		
  
});


router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Supplier.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//delete a supplier



module.exports = router;
