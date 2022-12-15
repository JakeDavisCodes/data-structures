var BinarySearchTree = function(value) {

  // var newTree = {};
  // var newTree = Object.create(BinarySearchTreeMethod);
  // newTree.value = value;
  // newTree.left = null;
  // newTree.right = null;
  var newTree = TreeNode(value);

  _.extend(newTree, BinarySearchTreeMethod);
  return newTree;
};

var TreeNode = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};

var BinarySearchTreeMethod = {};

BinarySearchTreeMethod.insert = function(value) {
  // Iterate
  var currNode = this;
  while (!!currNode) {
    if (value === currNode.value) {
      return true;
    }
    if (value < currNode.value) {
      if (!!currNode.left) {
        currNode = currNode.left;
        continue;
      }
      currNode.left = BinarySearchTree(value);
      return;
    }
    if (value > currNode.value) {
      if (!!currNode.right) {
        currNode = currNode.right;
        continue;
      }
      currNode.right = BinarySearchTree(value);
      return;
    }
  }
  // DFS
  // if (value > this.value) {
  //   if (this.right === null) {
  //     this.right = BinarySearchTree(value);
  //   } else {
  //     this.right.insert(value);
  //   }
  // } else if (value < this.value) {
  //   if (this.left === null) {
  //     this.left = BinarySearchTree(value);
  //   } else {
  //     this.left.insert(value);
  //   }
  // }
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
 * insert O(logN)
   contains O(logN)
   depthFirstLog O(N)
 */

