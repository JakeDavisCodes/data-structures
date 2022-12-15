var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    top++;
    storage[top] = value;
  };

  someInstance.pop = function() {
    if (storage.keys !== 0) {
      let ret = storage[top];
      delete storage[top];
      top--;
      return ret;
    }
  };

  someInstance.size = function() {
    if (top < 0) {
      return 0;
    }
    return top;
  };

  return someInstance;
};
