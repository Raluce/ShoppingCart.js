module.exports = (() => {
  var store = {};

  const getItem = (key) => {
    return store[key];
  };

  const setItem = (key, data) => {
    store[key] = data;
  };

  return {
    getItem,
    setItem
  }
})();