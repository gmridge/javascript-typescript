import { describe, it, expect } from 'vitest';

describe('Array Mastery in JavaScript and TypeScript', () => {

  // Test for array declaration and understanding
  it('should declare arrays properly', () => {
    const arrLiteral = [1, 2, 3]; // array literal, much more common
    const arrConstructor = new Array(1, 2, 3); // constructor, not often used
    expect(arrLiteral).toEqual(arrConstructor); // This should fail initially, make it pass
  });

  // Test for FIFO (Queue) behavior
  it('should demonstrate FIFO behavior using array methods', () => {
    const queue: number[] = [];
    queue.push(1); // adds to end
    expect(queue.shift()).toBe(1); // should remove from beginning, test will initially fail
  });

  // Test for LIFO (Stack) behavior
  it('should demonstrate LIFO behavior using array methods', () => {
    const stack: number[] = [];
    stack.push(1); // adds to end
    expect(stack.pop()).toBe(1); // should remove from end, test will initially fail
  });

  // Test for methods that work with the end of the array
  it('should manipulate the end of the array correctly', () => {
    const fruits = ['Apple', 'Orange', 'Pear'];
    expect(fruits.pop()).toBe('Pear'); // This should fail initially
    fruits.push('Banana'); // adds to the end
    expect(fruits).toContain('Banana'); // This should fail initially
  });

  // Test for methods that work with the beginning of the array
  it('should manipulate the beginning of the array correctly', () => {
    const fruits = ['Apple', 'Orange', 'Pear'];
    expect(fruits.shift()).toBe('Apple'); // This should fail initially
    fruits.unshift('Banana'); // adds to the beginning
    expect(fruits).toContain('Banana'); // This should fail initially
  });

  // Test for understanding arrays internals
  it('should understand that arrays are objects and store references', () => {
    const fruits1 = ['Apple', 'Orange', 'Pear'];
    const fruits2 = fruits1; // reference copy, not a new array
    fruits1.push('Banana');
    expect(fruits2).toEqual(['Apple', 'Orange', 'Pear', 'Banana']); // This should pass
  });

  // Test for multidimensional arrays
  it('should work with multidimensional arrays', () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(matrix[1][1]).toBe(5); // The value in the middle, test should fail initially
  });

  // Test for array toString method
  it('should convert arrays to strings correctly', () => {
    const numbers = [1, 2, 3];
    const empty: any[] = [];
    expect(numbers.toString()).toBe('1,2,3'); // This should pass
    expect(empty.toString()).toBe(''); // This should fail initially
  });

  // Test for array splice method
  it('should use splice method correctly', () => {
    const array = ['IT', 'study', 'JavaScript', 'right', 'now'];
    const removed = array.splice(0, 3)
    expect(removed).toEqual(['IT', 'study', 'JavaScript']); // This should fail initially
    expect(array).toEqual(['right', 'now']); // This should fail initially
  });

  // Test for array slice method
  it('should use slice method correctly', () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const warmColors = colors.slice(0, 3)
    expect(warmColors).toEqual(['red', 'orange', 'yellow']); // This should fail initially
  });

  // Test for array concat method
  it('should concatenate arrays correctly', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = arr1.concat(arr2)
    expect(combined).toEqual([1, 2, 3, 4, 5, 6]); // This should fail initially
  });

});
