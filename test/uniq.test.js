const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('if one number is a number and one is in a form of string, it still de-dups', () => {
    const mixedNum = [1, 2, 3, 4, '1', '2', '5'];
    expect(_.uniq(mixedNum)).toEqual([1, 2, 3, 4, '5']);
  });

  it('it will take form of string, depending on whether the string or number come first', () => {
    const mixedNum = [ '1', '2', '5', 1, 2, 3, 4];
    expect(_.uniq(mixedNum)).toEqual(['1', '2','5', 3, 4, ]);
  });
});