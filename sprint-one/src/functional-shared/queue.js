var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    first: 0,
    last: 0
  };

  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function(destination, source) {
  for (var key in source) {
    destination[key] = source[key];
  }
};

var queueMethods = {

  enqueue: function(value) {
    this[this.last] = value;
    this.last += 1;
  },

  dequeue: function() {
    var deleteElement = this[this.first];
    delete this[this.first];
    this.first += 1;
    return deleteElement;
  },

  size: function() {
    return this.last >= this.first ? this.last - this.first : 0;
  }

};


