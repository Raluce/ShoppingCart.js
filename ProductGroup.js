ProductGroup = function(product) { 
    const state = {
        qty: 1,
        product: product
    } 

    var addProduct = function() {
        state.qty += 1;
        return state.qty;
    };

    var get = function() {
        return state;
    };

    var removeProduct = function() {
        state.qty -= 1;
        return state.qty;
    };

    var getTotalCost = function() {
        return state.product.price.cost * state.qty;
    };

    var getTotalTax = function() {
        return state.product.price.tax * state.qty;
    };

    return {
        addProduct: addProduct,
        get: get,
        removeProduct: removeProduct,
        getTotalCost: getTotalCost,
        getTotalTax: getTotalTax
    }
}