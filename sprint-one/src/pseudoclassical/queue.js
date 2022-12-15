var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = [];
};

Queue.prototype.enqueue = function (value) {
  this.storage.push(value);
};

Queue.prototype.dequeue = function () {
  let ret = this.storage[0];
  this.storage.shift();
  return ret;
};

Queue.prototype.size = function () {
  return this.storage.length;
};