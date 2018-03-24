ShoppingCart = function() {  
  /**
   * Adds a product to store's shopping cart
   * @param {String} storeId Unique identifier to current store
   * @param {Object} product Item to add to cart
   */
  var add = function(storeId, product) {
    var productGroupList = get(storeId);
    var productGroupIndex = getProductGroupIndex(storeId, product.id)
    var productGroup = null;

    if(productGroupIndex !== -1) {
      productGroup = productGroupList[productGroupIndex];
      productGroup.count += 1;
      productGroupList[productGroupIndex] = productGroup;
    } else {
      productGroup = new ProductGroup(product);
      productGroupList.push(productGroup);
    }
    
    sessionStorage.setItem(storeId, JSON.stringify(productGroupList));
  };

  /**
   * Removes first instance of product in store's shopping cart
   * @param {String} productId Item to remvoe from cart
   */
  var remove = function(storeId, productId) {
    var productGroupList = get(storeId);
    var productGroupIndex = getProductGroupIndex(storeId, productId);

    if(productGroupIndex == -1) return;
    
    var productGroup = productGroupList[productGroupIndex];
    if(productGroup.count === 1) {
      productGroupList.splice(productGroupIndex, 1);
    } else {
      productGroup.count -= 1;
      productGroupList[productGroupIndex] = productGroup;
    }

    sessionStorage.setItem(storeId, JSON.stringify(productGroupList));
  };
  
  /**
   * Get all products in store's shopping cart
   * @param {String} storeId Unique identifier to current store
   */
  var get = function(storeId) {
    var productGroupsListString = sessionStorage.getItem(storeId);

    if(!productGroupsListString) {
      return [];
    }
    
    try {
      return JSON.parse(productGroupsListString);
    } catch(e) {
      return [];
    }
  };

  /**
   * Gets a single product group index from a store's shopping cart.
   * Returns -1 if not found
   * @param {String} storeId Unique identifier to current store
   * @param {String} productId Id of product group to find
   */
  var getProductGroupIndex = function(storeId, productId) {
    var productGroupList = get(storeId);

    for(var i = 0; i < productGroupList.length; i++) {
      if(productGroupList[i].id === productId) return i;
    }

    return -1;
  }

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
