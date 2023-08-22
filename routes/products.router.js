
const express = require('express');
const router = express.Router();
const ProductService = require('./../services/product.services');

const service =  new ProductService();

// IN ORDER THIS products/filter END POINT TO WORK MUST BE GO BEFORE ANY ENDPOINTS WITH DYNAMIC
// PARAMETERS, IN THIS CASE MUST GO BEFORE products and products/:id.
router.get('/filter',(req,res)=>{
  res.send('This is filter section');
});

router.get('/',(req,res)=>{
  const products = service.find();
  res.status(200).json(products);
});


router.get('/:id',(req,res)=>{
  const { id } = req.params;
  const product = service.findOne(id);
  if(product)
    res.status(200).json(product);
  else
    res.status(404).json({
      message: '404: NOT FOUND'
    })
  });


  router.post('/', (req,res)=>{
    const body = req.body;
    res.status(201).json(
      {
        message: "created",
        data : body,

      }
    );
  });

  router.patch('/:id',(req,res)=>{
     const {id} = req.params;
     const body = req.body;
     res.json({
      message: 'updated with patch',
      data: body,
      id,
     });
  });

  router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const body = req.body;
    res.json({
     message: 'updated with put',
     data: body,
     id,
    });
 });

 router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  res.json({
    message: 'deleted',
    id,
  })
 });


  module.exports = router;
