const should = require('should');
require('./../ProductGroup');

describe('Product Group', () => {
  var productGroup = null;
  const product = {
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

  beforeEach(() => {
    productGroup = new ProductGroup(product);
  });

  it('Should create a product group', () => {
    productGroup.count.should.equal(1);
    
    productGroup.product.id.should.equal(product.id);
    productGroup.product.name.should.equal(product.name);
    productGroup.product.price.cost.should.equal(product.price.cost);
    productGroup.product.price.tax.should.equal(product.price.tax);
    productGroup.product.price.currency.should.equal(product.price.currency);
    productGroup.product.properties.description.should.equal(product.properties.description);
  });

  it('Should update a product group count', () => {
    productGroup.setCount(10);

    productGroup.count.should.equal(10);
  });
});