import { shufflings } from './shufflings';

describe('shufflings function', () => {
  it('should return ["a"] when input is "a"', () => {
    const result = shufflings('a');
    expect(result).toEqual(['a']);
  });

  it('should return ["ab", "ba"] when input is "ab"', () => {
    const result = shufflings('ab');
    expect(result).toEqual(expect.arrayContaining(['ab', 'ba']));
  });

  it('should return all permutations when input is "abc"', () => {
    const result = shufflings('abc');
    expect(result).toEqual(expect.arrayContaining(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']));
  });

it('should return all permutations when input is "aabb"', () => {
    const result = shufflings('aabb');
    expect(result).toEqual(expect.arrayContaining(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']));
  });
});
