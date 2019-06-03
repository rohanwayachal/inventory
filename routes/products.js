const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Product = require('../models/product');


// Profile
router.get('/:companyId', (req, res, next) => {
	const companyId = req.params.companyId;
	
  Product.find({company:companyId}).exec()
		.then(data => {
		  console.log(data);
		  res.status(200).json(data);
		  })
		  .catch(err=>{
			  res.status(500).json({msg:"no data found"});
		  })
});

//get all products
router.get('/:companyId/:productId', (req, res, next) => {
	const companyId = req.params.companyId;
	 const id = req.params.productId;
  Product.find({company: companyId,name:id}).exec()
		.then(data => {
		  console.log(data);
		  res.status(200).json(data);
		  })
		  .catch(err=>{
			  res.status(500).json({msg:"no data found"});
		  })
});




//add a product
router.post('/', (req, res, next) => {
	
	  const product=new Product(
	{
		company:req.body.company,productname:req.body.productname,productcompany:req.body.productcompany,productfamily:req.body.productfamily,price:req.body.price
		
	});
product.save().then(result=>{console.log(result);
  res.json({msg: "saved"});

}).catch(err=>{console.log(err);
  res.json({msg: "error"});
});


});


//edit a product
router.patch('/:productId', (req, res, next) => {
	
	 const id = req.params.productId;
	 
	 Product.update({ _id: id }, { $set: {company:req.body.company,productname:req.body.productname,productcompany:req.body.productcompany,productfamily:req.body.productfamily,price:req.body.price} })
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
  Product.remove({ _id: id })
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

//delete a product



module.exports = router;
