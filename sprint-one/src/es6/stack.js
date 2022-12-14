class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  push(value) {
    this.top++;
    this.storage[this.top] = value;
  }

  pop() {
    let ret = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return ret;
  }

  size() {
    if (this.top < 0) {
      return 0;
    }
    return this.top;
  }

}