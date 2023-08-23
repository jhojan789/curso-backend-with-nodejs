const faker = require('faker');
const boom = require( '@hapi/boom');

class ProductService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){

    const limit = 100;

    for (let i = 0; i < limit; i++) {

      this.products.push({
        id : faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),

      });

    }

  }

  async create(data){
    const product = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(product);

    return product;

  }

  find(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.products);
      },3000);
    });
  }

  async findOne(id){
    const product = this.products.find((item)=>id === item.id);
    if(!product){
      throw boom.notFound('Product not found');
    }
    if(product.isBlock){
      throw boom.conflict('The product is blocked');
    }

    return product;

  }

  async update(id, changes){
    const index = this.products.findIndex(item=>id === item.id);

    if(index === -1){

      throw boom.notFound('Product not found');
    }

    const product = this.products[index];

    this.products[index] = {
      ...product,
      ...changes
    }

    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item=>id === item.id);

    if(index === -1){

      throw boom.notFound('Product not found');
    }

    this.products.splice(index,1);

    return {id};

  }
}

module.exports = ProductService;
