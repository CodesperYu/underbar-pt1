const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('creates 3 indexes based on the length of array, if missing property, results in undefined', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus'},
      { name: 'Bethany', age: 14}
    ]
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, undefined, 14]);
  });
});