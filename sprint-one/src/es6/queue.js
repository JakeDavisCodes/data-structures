class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.first = 0;
    this.last = 0;
  }

  enqueue(value) {
    this[this.last] = value;
    this.last += 1;
  }

  dequeue() {
    var deleteElement = this[this.first];
    delete this[this.first];
    this.first += 1;
    return deleteElement;
  }

  size() {
    return this.last >= this.first ? this.last - this.first : 0;
  }
}
