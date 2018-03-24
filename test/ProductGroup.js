const should = require('should');
require('./../ProductGroup');

describe('Product Group', () => {
  const product = {
    id:'1', 
    name: 'Great Product',
    price:{
      currency: 'USD',
      cost: 1.99, 
      tax: 0.99 
    },
    properties:{
      description:'awesome product!',
      isPopular: true
    }
  };

  it('Should create a product group', () => {
    const productGroup = new ProductGroup(product);
    productGroup.get().product.id.should.equal('1');
    productGroup.get().qty.should.equal(1);
  });

  it('Should add a product to the product group', () => {
    const productGroup = new ProductGroup(product);
    productGroup.addProduct();
    const ret = productGroup.get();
    ret.qty.should.equal(2);
  });

  it('Should remove a product to the product group', () => {
    const productGroup = new ProductGroup(product);
    productGroup.removeProduct();
    const ret = productGroup.get();
    ret.qty.should.equal(0);
  });

  it('Should get total cost of the product group', () => {
    const productGroup = new ProductGroup(product);
    productGroup.addProduct()
    productGroup.addProduct()
    productGroup.getTotalCost().should.equal(1.99 * 3);
  });

  it('Should get total tax of the product group', () => {
    const productGroup = new ProductGroup(product);
    productGroup.addProduct()
    productGroup.addProduct()
    productGroup.getTotalTax().should.equal(0.99 * 3);
  });
});