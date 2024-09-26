import { findOddNumber } from './odd-number';

describe('findOddNumber function', () => {
  it('should return 7 when the input is [7]', () => {
    expect(findOddNumber([7])).toBe(7);
  });

  it('should return 0 when the input is [0]', () => {
    expect(findOddNumber([0])).toBe(0);
  });

  it('should return 2 when the input is [1, 1, 2]', () => {
    expect(findOddNumber([1, 1, 2])).toBe(2);
  });

  it('should return 0 when the input is [0, 1, 0, 1, 0]', () => {
    expect(findOddNumber([0, 1, 0, 1, 0])).toBe(0);
  });

  it('should return 4 when the input is [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]', () => {
    expect(findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
  });
});
