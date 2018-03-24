Product = function Product(product) {
  if (!product.id) throw new Error('product[id] is required');
  
  this.id = product.id;
  this.name = product.name ? product.name : '';
  this.price = {
    cost: product.price.cost ? product.price.cost : 0,
    tax: product.price.tax ? product.price.tax : 0,
    currency: product.price.currency ? product.price.currency : 'usd'
  },
  this.properties = product.properties;
}