describe('countBy', function() {
  it('return an array from 1 up to a given number', function() {
    expect(countBy(5, 1)).to.eql([1, 2, 3, 4, 5])
  });

  it('return an array of intervals until it reaches input number', function() {
    expect(countBy(20, 10)).to.eql([10, 20])
  });
});
