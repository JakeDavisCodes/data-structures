describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should handle numbers', function() {
    set.add(1);
    set.add(2);
    set.remove(2);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(2)).to.equal(false);
  });

  it('should handle objects', function() {
    var obj1 = {};
    var obj2 = {a: 1, b: 2};
    var obj3 = {a: 1, b: 2, c: {a: 1, b: 2}};
    set.add(obj1);
    set.add(obj2);
    set.add(obj3);
    expect(set.contains(obj1)).to.equal(true);
    expect(set.contains(obj2)).to.equal(true);
    expect(set.contains(obj3)).to.equal(true);
  });
});
