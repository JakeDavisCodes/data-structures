

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.storage[node].length; i++) {
    this.removeEdge(this.storage[node][i], node);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  /*
  this.storage[fromNode].contains(toNode)
  */
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode)) {
    return;
  }
  this.storage[fromNode].splice(this.storage[fromNode].indexOf(toNode), 1);
  this.storage[toNode].splice(this.storage[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(callbackFunc) {
  for (let key in this.storage) {
    callbackFunc(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode O(1)
 * removeNode O(N)
 * hasEdge O(N)
 * addEdge O(1)
 * removeEdge O(N)
 * forEachNode O(N)
 */


