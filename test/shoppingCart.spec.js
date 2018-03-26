const should = require('should');
const sessionStorageMock = require('./mocks/sessionStorage');
require('./../ShoppingCart');
require('./../Product');
require('./../ProductGroup');

describe('Shopping Cart', () => {
  var product1 = null;
  var product2 = null;

  before(() => {
    global.sessionStorage = sessionStorageMock;
    
    product1 = {
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
  
    product2 = {
      id: '1b',
      name: 'beef',
      properties: {
        description: 'best beef ever'
      },
      price: {
        cost: 4.99,
        tax: 0.05,
        currency: 'usd'
      }
    };
  });

  beforeEach(() => {
    global.sessionStorage.clear();
  });

  it('Should add product to shopping cart', () => {
   ShoppingCart.add('store1', new Product(product1));
   
   const results = ShoppingCart.get('store1');
   results.should.be.instanceof(Array).and.have.lengthOf(1);
  });

  it('Should keep count of product repetitions', () => {
    ShoppingCart.add('store1', new Product(product1));
    ShoppingCart.add('store1', new Product(product1));
    ShoppingCart.add('store1', new Product(product1));
    ShoppingCart.add('store1', new Product(product2));
    
    const results = ShoppingCart.get('store1');
    results.should.be.instanceof(Array).and.have.lengthOf(2);
    results[0].count.should.equal(3);
    results[1].count.should.equal(1);
  });

  it('Should remove product from shopping cart', () => {
    ShoppingCart.add('store1', new Product(product1));
    ShoppingCart.add('store1', new Product(product2));
    ShoppingCart.add('store1', new Product(product2));
    
    ShoppingCart.remove('store1', product1.id);
    ShoppingCart.remove('store1', product2.id);
    
    const results = ShoppingCart.get('store1');
    results.should.be.instanceof(Array).and.have.lengthOf(1);
    results[0].id.should.equal(product2.id);
    results[0].count.should.equal(1);
  });
});