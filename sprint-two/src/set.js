var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  let key = JSON.stringify(item);
  if (!this.storage[key]) {
    this.storage[key] = item;
  }
};

setPrototype.contains = function(item) {
  let key = JSON.stringify(item);
  return !!this.storage[key];
};

setPrototype.remove = function(item) {
  let key = JSON.stringify(item);
  delete this.storage[key];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add O(1)
 * contains O(1)
 * remove O(1)
 */