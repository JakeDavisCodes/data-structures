var BinarySearchTree = function(value) {

  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  _.extend(newTree, BinarySearchTreeMethod);
  return newTree;
};

var BinarySearchTreeMethod = {};

BinarySearchTreeMethod.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTreeMethod.contains = function(value) {
  if (this.value === value) {
    return true;
  }

  if (this.right && value >= this.right.value) {
    return this.right.contains(value);
  } else if (this.left && value <= this.left.value) {
    return this.left.contains(value);
  } else { return false; }
};

BinarySearchTreeMethod.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time
   complexity of the above functions?
 * insert O(logn)
   contains O(logn)
   depthFirstLog O(n)
 */

