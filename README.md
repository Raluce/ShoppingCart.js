# ShoppingCart.js [![Build Status](https://travis-ci.org/Raluce/ShoppingCart.js.svg?branch=master)](https://travis-ci.org/Raluce/ShoppingCart.js)



Easily manage multiple shopping carts in a single session. ShoppingCart.js takes care mananging your sessions storage, serializing and deserializing your cart data so you that you can focus on your real work.

### Getting Started

It is very easy to get running with ShoppingCart.js. First clone this project to your local computer and move the `ShoppingCart.js` inside your project folder.

```bash
git clone https://github.com/Raluce/ShoppingCart.js
```

Once thats done, we need to include `ShoppingCart.js` in **every page that will like to access the shopping cart.** You can do so by including it at the end of the body tag.

```html
<html>
  <head>...</head>
  <body>
    <!-- Your HTML content here -->
    <script src="ShoppingCart.js"></script>
  </body>
</html>
```

At this point, you will now have access to the shopping cart through the variable `ShoppingCart`.

### Usage

**Note:** Every shopping cart is uniquely identified by a `storeId`. This is done so that you can handle shopping carts for different stores at the same time without overwritting each other. Each product **must** have a unique `id` string property.

#### Adding a product to a shopping cart
```javascript
var product = {id: 'product1', name:'Pizza slice', 'price': 2.99};
ShoppingCart.add('store1', product);
```

#### getting all products from a shopping cart
```javascript
var products = ShoppingCart.get('store1');
// products: [{id: 'product1', name:'Pizza slice', 'price': 2.99}]
```

#### Removing a product from the shopping cart
```javascript
// products [{id: 1, ...}, {id: 2, ...}]
var productIndex = 0;
ShoppingCart.remove('store1', index);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
