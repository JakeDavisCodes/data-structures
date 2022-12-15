var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.last = 0;
};

Stack.prototype.push = function(value) {
  this[this.last] = value;
  this.last += 1;
};

Stack.prototype.pop = function() {
  var popElement = this[this.last - 1];
  delete this[this.last - 1];
  this.last -= 1;
  return popElement;
};

Stack.prototype.size = function() {
  return this.last >= this.first ? this.last - this.first : 0;
};