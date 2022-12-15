var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.first = 0;
  someInstance.last = 0;

  return someInstance;
};

var stackMethods = {

  push: function(value) {
    this[this.last] = value;
    this.last += 1;
  },

  pop: function() {
    var popElement = this[this.last - 1];
    delete this[this.last - 1];
    this.last -= 1;
    return popElement;
  },

  size: function() {
    return this.last >= this.first ? this.last - this.first : 0;
  }

};


