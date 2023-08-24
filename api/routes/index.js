const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');

function routerAPI(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/products',productsRouter);
  router.use('/categories',categoriesRouter);
  router.use('/users',usersRouter);

  //NOTE: check the idea of creating a folder v1, v2 for every file belonging each version.
  // const router2 = express.Router();
  // app.use('/api/v2',router);
  // router2.use('/products',productsRouter);
  // router2.use('/categories',categoriesRouter);
  // router2.use('/users',usersRouter);

}

module.exports = routerAPI;
