const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Warehouse = require('../models/warehouse');


// Profile
router.get('/:companyId', (req, res, next) => {
	const companyId = req.params.companyId;
	
  Warehouse.find({company:companyId}).exec()
		.then(data => {
		  console.log(data);
		  res.status(200).json(data);
		  })
		  .catch(err=>{
			  res.status(500).json({msg:"no data found"});
		  })
});

//get all suppliers
router.get('/:companyId/:warehouseId', (req, res, next) => {
	const companyId = req.params.companyId;
	 const id = req.params.warehouseId;
  Warehouse.find({company: companyId,name:id}).exec()
		.then(data => {
		  console.log(data);
		  res.status(200).json(data);
		  })
		  .catch(err=>{
			  res.status(500).json({msg:"no data found"});
		  })
});

router.get('/:company/:warehouseId', (req, res, next) => {
	
	 const id = req.params.warehouseId;
  Warehouse.find({name: id}).exec()
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
	
	  const warehouse=new Warehouse(
	{
		company:req.body.company, name:req.body.name,productname:req.body.productname,productcompany:req.body.productcompany,productfamily:req.body.productfamily,capacity:req.body.capacity,reorder:req.body.reorder
		
	});
warehouse.save().then(result=>{console.log(result);
  res.json({msg: "saved"});

}).catch(err=>{console.log(err);
  res.json({msg: "error"});
});


});


//edit a supplier
router.patch('/:warehouseId', (req, res, next) => {
	
	 const id = req.params.warehouseId;
	 
	 Warehouse.update({ _id: id }, { $set: {company:req.body.company, name:req.body.name,productname:req.body.productname,productcompany:req.body.productcompany,productfamily:req.body.productfamily,capacity:req.body.capacity,reorder:req.body.reorder} })
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
  Warehouse.remove({ _id: id })
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
