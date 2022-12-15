var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.last] = value;
  this.last += 1;
};

Queue.prototype.dequeue = function() {
  var deleteElement = this[this.first];
  delete this[this.first];
  this.first += 1;
  return deleteElement;
};

Queue.prototype.size = function() {
  return this.last >= this.first ? this.last - this.first : 0;
};

