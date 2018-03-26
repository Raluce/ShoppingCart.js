const should = require('should');
require('./../Product');

describe('Product', () => {
  const productData = {
    id: '1a',
    name: 'chicken',
    properties: {
      description: 'best chicken ever'
    },
    price: {
      cost: 9.99,
      tax: 0.15,
      currency: 'usd'
    }
  };

  it('Should create a product', () => {
    const product = new Product(productData);
    
    product.id.should.equal(productData.id);
    product.name.should.equal(productData.name);
    product.price.cost.should.equal(productData.price.cost);
    product.price.tax.should.equal(productData.price.tax);
    product.price.currency.should.equal(productData.price.currency);
    product.properties.description.should.equal(productData.properties.description);
  });
});