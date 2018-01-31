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
    ShoppingCart.add('store2', []);
    const result = ShoppingCart.get('store1');
    
    result.should.be.instanceof(Array).and.have.lengthOf(1);
  });

  it('Should get all products from shopping cart', () => {
    const result = ShoppingCart.get('store1');

    result.should.be.instanceof(Array).and.have.lengthOf(1);
    result[0].id.should.equal(product.id);
    result[0].name.should.equal(product.name);
    result[0].price.currency.should.equal(product.price.currency);
    result[0].price.cost.should.equal(product.price.cost);
  });
});