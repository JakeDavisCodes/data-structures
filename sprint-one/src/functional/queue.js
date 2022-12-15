var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    first: 0,
    last: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[storage.last] = value;
    storage.last += 1;
  };

  someInstance.dequeue = function() {
    var dequeElement = someInstance[storage.first];
    delete someInstance[storage.first];
    storage.first += 1;
    return dequeElement;
  };

  someInstance.size = function() {
    return storage.last >= storage.first ? storage.last - storage.first : 0;
  };

  return someInstance;
};
