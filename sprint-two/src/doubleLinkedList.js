class DoublyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      var temp = this.tail;
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
      this.tail.prev = temp;
    }
  }

  addToHead (value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      var temp = this.head;
      this.head.prev = new Node(value);
      this.head = this.head.prev;
      this.head.next = temp;
    }
  }

  removeHead () {
    let nodeToRemove = this.head;

    this.head = this.head.next;
    this.head.prev = null;
    nodeToRemove.next = null;

    return nodeToRemove.value;
  }

  removeTail () {
    let nodeToRemove = this.tail;

    this.tail = this.tail.prev;
    this.tail.next = null;
    nodeToRemove.prev = null;

    return nodeToRemove.value;
  }

  contains (target) {
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === target) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  }
}

class Node {

  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}