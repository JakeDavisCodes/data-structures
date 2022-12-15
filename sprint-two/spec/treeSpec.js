describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

});

describe('tree advanced content', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(1);
  });

  it('should have methods named "removeFromParent"', function() {
    expect(tree.removeFromParent).to.be.a('function');
  });

  it('should return correct value of the parent node', function() {
    tree.addChild(2);
    expect(tree.children[0].parent.value).to.equal(1);
  });

  it('should dissociate the tree with it\'s parent (in both direction)', function() {
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(4);
    tree.children[0].addChild(5);

    expect(tree.children.length).to.equal(2);
    var removedChild = tree.removeFromParent(tree.children[0]);
    expect(tree.children.length).to.equal(1);
    expect(tree.children[0].value).to.equal(3);
    expect(removedChild.children.length).to.equal(2);
  });

  it('should removed tree\'parent and tree\'parent be null', function() {
    tree.addChild(2);
    var removedChild = tree.removeFromParent(tree.children[0]);
    expect(tree.parent).to.equal(null);
    expect(removedChild.parent).to.equal(null);
  });

  it('should accept a callback and execute it on every value', function () {
    var multiplyByTwo = function(tree) {
      tree.value = tree.value * 2;
    };

    tree.traverse(multiplyByTwo);
    expect(tree.value).to.equal(2);

    tree.addChild(1);
    tree.addChild(3);
    tree.children[0].addChild(4);

    tree.traverse(multiplyByTwo);
    expect(tree.value).to.equal(4);
    expect(tree.children[0].value).to.equal(2);
    expect(tree.children[1].value).to.equal(6);
  });
});