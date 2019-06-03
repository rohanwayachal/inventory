const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Stock = require('../models/stock');


// Profile
router.get('/:companyId', (req, res, next) => {
	const companyId = req.params.companyId;
	
  Stock.find({company:companyId}).exec()
		.then(data => {
		  console.log(data);
		  res.status(200).json(data);
		  })
		  .catch(err=>{
			  res.status(500).json({msg:"no data found"});
		  })
});

//get all suppliers
router.get('/:companyId/:stockId', (req, res, next) => {
	const companyId = req.params.companyId;
	 const id = req.params.stockId;
  Stock.find({company: companyId,name:id}).exec()
		.then(data => {
		  console.log(data);
		  res.status(200).json(data);
		  })
		  .catch(err=>{
			  res.status(500).json({msg:"no data found"});
		  })
});

router.get('/:company/:stockId', (req, res, next) => {
	
	 const id = req.params.stockId;
  Stock.find({name: id}).exec()
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
	
	  const stock=new Stock(
	{
		company:req.body.company,productname:req.body.productname,productcompany:req.body.productcompany,productfamily:req.body.productfamily,quantity:req.body.quantity,price:req.body.price,warehouse:req.body.warehouse
		
	});
stock.save().then(result=>{console.log(result);
  res.json({msg: "saved"});

}).catch(err=>{console.log(err);
  res.json({msg: "error"});
});


});


//edit a supplier
router.patch('/:stockId', (req, res, next) => {
	
	 const id = req.params.stockId;
	 
	 Stock.update({ _id: id }, { $set: {company:req.body.company,productname:req.body.productname,productcompany:req.body.productcompany,productfamily:req.body.productfamily,quantity:req.body.quantity,price:req.body.price,warehouse:req.body.warehouse} })
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
  Stock.remove({ _id: id })
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
