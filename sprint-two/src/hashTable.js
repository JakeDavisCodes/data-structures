var HashTable = function() {
  this.limit = 8;
  this.storage = LimitedArray(this.limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this.limit);

  this.storage[index] = this.storage[index] || [];
  for (var i = 0; i < this.storage[index].length; i++) {
    if (this.storage[index][i][0] === k) {
      // this.size++;
      // this.limit++;
      // console.log('size after insert ' + this.size);
      this.storage[index][i][1] = v;
      return;
    }
  }
  // this.size++;
  // this.limit++;
  this.storage[index].push([k, v]);

  // this.reSize();
  // if (4 * this.size > 3 * this.limit) {
  //   this.limit *= 2;
  // }
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);

  for (var i = 0; i < this.storage[index].length; i++) {
    if (this.storage[index][i][0] === k) {
      return this.storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);

  for (var i = 0; i < this.storage[index].length; i++) {
    if (this.storage[index][i][0] === k) {
      this.storage[index].splice(i, 1);
      // this.size--;
      // this.reSize();
      return;
    }
  }
};

// HashTable.prototype.reSize = function () {
//   // console.log('75 || ' + this.size / this.limit);
//   if (this.size / this.limit * 100 > 75) {
//     this.limit *= 2;
//   } else if (this.size / this.limit * 100 < 25) {
//     this.limit /= 2;
//   }
// };

/*
 * Complexity: What is the time complexity of the above functions?
 * insert O(1)
 * retrieve O(1)
 * remove O(N)
 */


