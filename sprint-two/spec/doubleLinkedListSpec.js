describe('doubleLinkedList', function() {
  var doubleLinkedList = new DoublyLinkedList();

  it('should have a head and tail', function() {
    expect(doubleLinkedList).to.have.property('head');
    expect(doubleLinkedList).to.have.property('tail');
  });

  it('should have method named "addToTail", "addToHead", "removeHead","removeTail", "contains"', function() {
    expect(doubleLinkedList.addToTail).to.be.a('function');
    expect(doubleLinkedList.addToHead).to.be.a('function');
    expect(doubleLinkedList.removeHead).to.be.a('function');
    expect(doubleLinkedList.removeTail).to.be.a('function');
    expect(doubleLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when addToTail is called', function() {
    doubleLinkedList.addToTail(3);
    expect(doubleLinkedList.tail.value).to.equal(3);
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.tail.value).to.equal(4);
  });

  it('should designate a new head when addToHead is called', function() {
    doubleLinkedList.addToHead(2);
    expect(doubleLinkedList.head.value).to.equal(2);
    doubleLinkedList.addToHead(1);
    expect(doubleLinkedList.head.value).to.equal(1);
  });

  it('should be able to check the value of the node prev tail node by using prev property', function() {
    doubleLinkedList.addToTail(3);
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.tail.prev.value).to.equal(3);
  });

  it('should remove the head from the list when removeHead is called', function() {
    expect(doubleLinkedList.head.value).to.equal(1);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head.value).to.equal(2);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    expect(doubleLinkedList.tail.value).to.equal(4);
    doubleLinkedList.removeTail();
    expect(doubleLinkedList.tail.value).to.equal(3);
  });

  it('should return the value of the former head when removeHead is called', function() {
    expect(doubleLinkedList.removeHead()).to.equal(2);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    expect(doubleLinkedList.removeHead()).to.equal(3);
  });

  it('should contain a value that was added', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.contains(4)).to.equal(true);
    expect(doubleLinkedList.contains(5)).to.equal(true);
    expect(doubleLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doubleLinkedList = new DoublyLinkedList();
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.contains(4)).to.equal(false);
  });

});