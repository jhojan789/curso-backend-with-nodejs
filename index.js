
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Main');

});

app.get('/categories',(req,res)=>{
  res.send('Categories');
});

app.get('/products',(req,res)=>{

  res.json({
    name: 'computer',
    price: 1000

  });
});

app.listen(port,()=>{
  console.log('Listen in the port: ' + port);
});
