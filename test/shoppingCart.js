const should = require('should');
const sessionStorageMock = require('./mocks/sessionStorage');
require('./../ShoppingCart');

describe('ShoppingCart', () => {
  const product = {
    id: '1a',
    name: 'Taco',
    price: { currency: 'usd', cost: 21.23 }
  }

  before(() => {
    global.sessionStorage = sessionStorageMock;
    
  });

  it('Should add product to shopping cart', () => {
    ShoppingCart.add('store1', product);
    const result = ShoppingCart.get('store1');
    
    result.should.be.instanceof(Array).and.have.lengthOf(1);
  });
});