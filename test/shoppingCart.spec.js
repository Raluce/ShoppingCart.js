const should = require('should');
const sessionStorageMock = require('./mocks/sessionStorage');
require('./../ShoppingCart');
require('./../Product');
require('./../ProductGroup');

describe('ShoppingCart', () => {
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

  before(() => {
    global.sessionStorage = sessionStorageMock;
    
  });

  it('Should add product to shopping cart', () => {
   ShoppingCart.add('store1', new Product(product));
   const results = ShoppingCart.get('store1');

   results.should.be.instanceof(Array).and.have.lengthOf(1);
   console.log(results);
  });

  it.skip('Should get all products from shopping cart', () => {
    
  });

  it.skip('Should remove product from shopping cart', () => {
    
  });
});