
const express = require('express');
const router = express.Router();
const ProductService = require('./../services/product.services');
const validatorHandler = require('./../mildwares/validator.handler');
const {createProductSchema,updateProductSchema,getProductSchema} = require('./../schemas/product.schema');

const service =  new ProductService();

// IN ORDER THIS products/filter END POINT TO WORK MUST BE GO BEFORE ANY ENDPOINTS WITH DYNAMIC
// PARAMETERS, IN THIS CASE MUST GO BEFORE products and products/:id.
router.get('/filter',(req,res)=>{
  res.send('This is filter section');
});

router.get('/',async (req,res)=>{
  const products = await service.find();
  res.status(200).json(products);
});


router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req,res,next)=>{
      try {

        const { id } = req.params;
        const product = await service.findOne(id);
        res.json(product);

      } catch (error) {
        next(error);
    }

  });


  router.post('/',
    validatorHandler(createProductSchema,'body'),
    async (req,res)=>{
      const body = req.body;
      const product = await service.create(body);
      res.status(201).json(product);
    }
  );

  router.patch('/:id',
    validatorHandler(getProductSchema,'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req,res,next)=>{
      try {
          const {id} = req.params;
          const body = req.body;
          const product = await service.update(id,body);

          res.json(product);

      } catch (error) {
        next(error);
      }

  });

//   router.put('/:id',(req,res)=>{
//     const {id} = req.params;
//     const body = req.body;
//     res.json({
//      message: 'updated with put',
//      data: body,
//      id,
//     });
//  });

 router.delete('/:id',async (req,res)=>{
  const {id} = req.params;
  const rta = await service.delete(id);
  res.json(rta);
 });


  module.exports = router;
