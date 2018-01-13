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

  var remove = function(product) {};
  
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
    get: get
  };
}();