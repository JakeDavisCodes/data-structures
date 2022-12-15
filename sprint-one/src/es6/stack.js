class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.first = 0;
    this.last = 0;
  }

  push(value) {
    this[this.last] = value;
    this.last += 1;
  }

  pop() {
    var popElement = this[this.last - 1];
    delete this[this.last - 1];
    this.last -= 1;
    return popElement;
  }

  size() {
    return this.last >= this.first ? this.last - this.first : 0;
  }

}