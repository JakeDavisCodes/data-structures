var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);
  newQueue.storage = [];

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage.push(value);
};

queueMethods.dequeue = function () {
  let ret = this.storage[0];
  this.storage.shift();
  return ret;
};

queueMethods.size = function () {
  return this.storage.length;
};