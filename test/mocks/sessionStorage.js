module.exports = (() => {
  var store = {};

  const getItem = (key) => {
    return store[key];
  };

  const setItem = (key, data) => {
    store[key] = data;
  };

  const clear = () => {
    store = {};
  }

  return {
    getItem,
    setItem,
    clear,
  }
})();