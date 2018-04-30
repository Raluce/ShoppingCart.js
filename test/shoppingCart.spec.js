const should = require('should');
const sessionStorageMock = require('./mocks/sessionStorage');
require('./../ShoppingCart');
require('./../Product');

describe('Shopping Cart', () => {
  var product1 = null;
  var product2 = null;

  before(() => {
    global.sessionStorage = sessionStorageMock;
    
    product1 = {
      id: '1a',
      name: 'chicken',
      properties: {
        description: 'best chicken ever',
        options: [
          {
            _id: 'option1',
            name: 'What size?',
            choices: [
              {
                _id: 'normal',
                name: 'Normal',
                description: 'normal',
                price: {
                  amount: 0,
                  currency: 'usd'
                }
              }
            ],
          }
        ]
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
        description: 'best beef ever',
        options: [],
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

  it('Should get shopping cart from a storeId', () => {
    ShoppingCart.add('store1', new Product(product1));
    
    const results = ShoppingCart.get('store1');
    results.should.be.instanceof(Array).and.have.lengthOf(1);
  });

  it('Should remove product from shopping cart', () => {
    ShoppingCart.add('store1', new Product(product1));
    ShoppingCart.add('store1', new Product(product2));
    ShoppingCart.add('store1', new Product(product2));
    
    ShoppingCart.remove('store1', 0);
    
    const results = ShoppingCart.get('store1');
    results.should.be.instanceof(Array).and.have.lengthOf(2);
    results[0].id.should.equal(product2.id);
  });
});