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
   * Overrides shopping cart with given productList
   * @param {String} storeId Unique identifier to current store
   * @param {Array} productList Product list to replace shopping cart with
   */
  var set = function(storeId, productList) {
    sessionStorage.setItem(storeId, JSON.stringify(productList));
  }

  /**
   * Removes first instance of product in store's shopping cart
   * @param {String} productId Item to remvoe from cart
   */
  var remove = function(storeId, productId) {
    var productList = get(storeId);
    var productIndex = getProductIndexById(productList, productId);

    if(productIndex !== -1) {
      productList.slice(productIndex, 1);
      set(productList);
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

  /**
   * Gets id of product in a product list. Returns -1 if product not found
   * @param {Array} productList List of products to look in
   * @param {Object} productId Product Id to look in product list
   */
  var getProductIndexById = function(productList, productId) {
    for(var i = 0; i < productList.length; i++) {
      if(productList[i].id === productId) {
        return i;
      }
    }

    return -1;
  }

  return {
    add: add,
    remove: remove,
    get: get,
  };
}();
