const express = require('express');
const faker = require('faker');


const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Main');

});

app.get('/categories',(req,res)=>{
  res.send('Categories');
});

// app.get('/products',(req,res)=>{

//   res.json([
//     {
//       name: 'computer',
//       price: 1000

//     },
//     {
//       name: 'sofa',
//       price: 2000

//     }
//   ]);
// });


// IN ORDER THIS products/filter END POINT TO WORK MUST BE GO BEFORE ANY ENDPOINTS WITH DYNAMIC
// PARAMETERS, IN THIS CASE MUST GO BEFORE products and products/:id.
app.get('/products/filter',(req,res)=>{
  res.send('This is filter section');
});

app.get('/products',(req,res)=>{
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


app.get('/products/:id',(req,res)=>{
  const { id } = req.params;
  res.json(
    {
      id,
      name: 'sofa',
      price: 2000

    });
  });


app.get('/users', (req,res)=>{
  const {limit, offset} = req.query;

  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No parameters');
  }

});

app.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const {categoryId,productId} = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port,()=>{
  console.log('Listen in the port: ' + port);
});
