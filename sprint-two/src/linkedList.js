var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    temp.next = null;
    return temp.value;
  };

  list.contains = function(target) {
    var currNode = list.head;
    while (currNode) {
      if (currNode.value === target) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail -> O(1)
 * removeHead -> O(1)
 * contains -> O(n)
 * loop O(n) O(n) -> O(n)
 * longest O(2^n) O(n^2) O(nlogn) O(n) O(logn) O(1) shortest
 *
 */
