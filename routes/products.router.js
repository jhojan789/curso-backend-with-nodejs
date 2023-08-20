
const express = require('express');
const router = express.Router();
const faker = require('faker');



// IN ORDER THIS products/filter END POINT TO WORK MUST BE GO BEFORE ANY ENDPOINTS WITH DYNAMIC
// PARAMETERS, IN THIS CASE MUST GO BEFORE products and products/:id.
router.get('/filter',(req,res)=>{
  res.send('This is filter section');
});

router.get('/',(req,res)=>{
  const {size} = req.query;
  const products = [];
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {

    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),

    });

  }

  res.json(products);
});


router.get('/:id',(req,res)=>{
  const { id } = req.params;
  res.json(
    {
      id,
      name: 'sofa',
      price: 2000,

    });
  });

  module.exports = router;
