_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps all number to the nearest 10th', () => {
    const numbers = [43, 95, 27, 83];
    const mappedArr = _.map(numbers, number => Math.round(number/10)*10);
    expect(mappedArr).toEqual([40, 100, 30, 80]);
  });
});