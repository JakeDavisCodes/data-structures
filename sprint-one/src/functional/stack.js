var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    first: 0,
    last: 0,
  };

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[storage.last] = value;
    storage.last += 1;
  };

  someInstance.pop = function() {
    var popElement = someInstance[storage.last - 1];
    delete someInstance[storage.last - 1];
    storage.last -= 1;
    return popElement;
  };

  someInstance.size = function() {
    return storage.last > storage.first ? storage.last - storage.first : 0;
  };

  return someInstance;
};
