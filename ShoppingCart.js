ShoppingCart = function() {  
  /**
   * Adds a product to the shopping cart
   * @param {String} storeId Unique identifier to current store
   * @param {Object} product Item being placed in the shopping cart
   */
  var add = function(storeId, product) {
    sessionStorage.set
  };
  
  var remove = function(product) {};
  
  /**
   * Get all products in store's shopping cart
   * @param {*} storeId Unique identifier to current store
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