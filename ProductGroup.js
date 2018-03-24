ProductGroup = function ProductGroup(product) {
  this.id = product.id;
  this.product = product;
  this.count = 1;
};

ProductGroup.prototype.setCount = function(count) {
  this.count = count < 1 ? 1 : count;
}