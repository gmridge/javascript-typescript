
import { describe, it, expect } from 'vitest';

// Array methods koans for learning JavaScript/TypeScript
// Students should make the tests pass to learn and master the concepts

// forEach Koan
describe('forEach method', () => {
  it('should iterate over the array and execute a callback', () => {
    const numbers = [1, 2, 3];
    let sum = 0;
    numbers.forEach((number) => {
      sum += number
    })
    // Students will fix the following line to correctly add the numbers
    // The test should pass when the sum is correct
    expect(sum).toBe(6); // Intentionally failing
  });
});

// indexOf Koan
describe('indexOf method', () => {
  it('should return the first index of the given element', () => {
    const elements = ['fire', 'air', 'water', 'earth'];
    // Students will fix the following line to find the correct index
    const index = elements.indexOf('fire')
    expect(index).toBe(0); // Intentionally failing
  });
});

// lastIndexOf Koan
describe('lastIndexOf method', () => {
  it('should return the last index of the given element', () => {
    const elements = ['fire', 'air', 'water', 'earth', 'air'];
    // Students will fix the following line to find the last index
    const index = elements.lastIndexOf('air')
    expect(index).toBe(4); // Intentionally failing
  });
});

// find Koan
describe('find method', () => {
  it('should find an element that satisfies the testing function', () => {
    const numbers = [5, 12, 8, 130, 44];
    // Students will fix the following line to find the correct element
    const found = numbers.find(function (item) {
      return item % 4 === 0
    })
    expect(found).toBe(12); // Intentionally failing
  });
});

// filter Koan
describe('filter method', () => {
  it('should filter elements based on a condition', () => {
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    // Students will fix the following line to correctly filter the words
    const longWords = words.filter(word => word.length <= 5)

    expect(longWords).toEqual(['spray', 'limit', 'elite']); // Intentionally failing
  });
});

// map Koan
describe('map method', () => {
  it('should create a new array with the results of calling a provided function', () => {
    const numbers = [1, 4, 9];
    // Students will fix the following line to correctly square the numbers
    const squares = numbers.map(function (item) {
      return item * item
    })
    expect(squares).toEqual([1, 16, 81]); // Intentionally failing
  });
});

// sort Koan
describe('sort method', () => {
  it('should sort the array elements', () => {
    const months = ['March', 'Jan', 'Feb', 'Dec'];
    // Students will fix the following line to sort the months correctly
    const sortedMonths = months.sort();
    expect(sortedMonths).toEqual(['Dec', 'Feb', 'Jan', 'March']); // Intentionally failing
  });
});

// reverse Koan
describe('reverse method', () => {
  it('should reverse the array in place', () => {
    const array = [1, 2, 3];
    // Students will fix the following line to reverse the array
    const reversedArray = array.reverse();
    expect(reversedArray).toEqual([3, 2, 1]); // Intentionally failing
  });
});

// join Koan
describe('join method', () => {
  it('should join all elements of array into a string', () => {
    const elements = ['Fire', 'Air', 'Water'];
    // Students will fix the following line to join the elements correctly
    const joined = elements.join('-');
    expect(joined).toBe('Fire-Air-Water'); // Intentionally failing
  });
});

export {};
