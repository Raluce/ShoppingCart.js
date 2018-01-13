ShoppingCart = function() {  
  /**
   * Adds a product to store's shopping cart
   * @param {String} storeId Unique identifier to current store
   * @param {Object} product Item to add to cart
   */
  var add = function(storeId, product) {
    var productList = get(storeId);
    productList.push(product);
    sessionStorage.setItem(storeId, JSON.stringify(productList));
  };

  /**
   * Removes first instance of product in store's shopping cart
   * @param {Object} product Item to remvoe from cart
   */
  var remove = function(storeId, product) {
    var productList = get(storeId);
    var productIndex = productList.indexOf(product);

    if(productIndex !== -1) {
      productList.slice(productIndex, 1);
    }
  };
  
  /**
   * Get all products in store's shopping cart
   * @param {String} storeId Unique identifier to current store
   */
  var get = function(storeId) {
    var productString = sessionStorage.getItem(storeId);
    
    try {
      var productList = JSON.parse(productString);
      return productList;
    } catch(e) {
      return [];
    }
  };

  return {
    add: add,
    remove: remove,
    get: get,
  };
}();
