class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.first = 0;
    this.last = 0;
    this.storage = [];
  }

  enqueue (value) {
    this.storage.push(value);
  }

  dequeue () {
    return this.storage.shift();
  }

  size () {
    return this.storage.length;
  }
}
