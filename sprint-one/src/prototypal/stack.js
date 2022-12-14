var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.top = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.top++;
  this.storage[this.top] = value;
};

stackMethods.pop = function () {
  if (this.storage.keys !== 0) {
    let ret = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return ret;
  }
};

stackMethods.size = function () {
  if (this.top < 0) {
    return 0;
  }
  return this.top;
};