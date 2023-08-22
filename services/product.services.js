const faker = require('faker');


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

      });

    }

  }

  create(data){
    const product = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(product);

    return product;

  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find((item)=>id === item.id);

  }

  update(id, changes){
    const index = this.products.findIndex(item=>id === item.id);

    if(index === -1){

      throw new Error('Product not found');
    }

    const product = this.products[index];

    this.products[index] = {
      ...product,
      ...changes
    }

    return this.products[index];
  }

  delete(id){
    const index = this.products.findIndex(item=>id === item.id);

    if(index === -1){

      throw new Error('Product not found');
    }

    this.products.splice(index,1);

    return {id};

  }
}

module.exports = ProductService;