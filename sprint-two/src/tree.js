var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
  childTree.parent = this;
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
};

treeMethods.removeFromParent = function(targetTree) {
  let treeToRemove = targetTree;

  targetTree.parent.children.splice(targetTree.parent.children.indexOf(targetTree), 1);
  treeToRemove.parent = null;

  return treeToRemove;
};

treeMethods.traverse = function(callbackFunc) {
  callbackFunc(this);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callbackFunc);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild O(1)
 * contains O(N)
 */
