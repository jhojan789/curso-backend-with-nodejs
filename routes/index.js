const productsRouter = require('./products.router');

function routerAPI(app){
  app.use('/products',productsRouter);


}

module.exports = routerAPI;
