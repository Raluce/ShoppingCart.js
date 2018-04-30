ShoppingCart = function() {  
  /**
   * Adds a product to store's shopping cart
   * @param {String} storeId Unique identifier to current store
   * @param {Object} product Item to add to cart
   */
  var add = function(storeId, product) {
    var productsList = get(storeId);
    productsList.push(product);
    
    sessionStorage.setItem(storeId, JSON.stringify(productsList));
  };

  /**
   * Removes a product in store's shopping cart
   * @param {String} productId Item to remvoe from cart
   */
  var remove = function(storeId, index) {
    var productsList = get(storeId);
    if(index > productsList.length) return false;

    productsList.splice(index, 1);
    sessionStorage.setItem(storeId, JSON.stringify(productsList));
  };
  
  /**
   * Get all product groups in store's shopping cart
   * @param {String} storeId Unique identifier to current store
   */
  var get = function(storeId) {
    var productsListString = sessionStorage.getItem(storeId);

    if(!productsListString) {
      return [];
    }
    
    try {
      return JSON.parse(productsListString);
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
