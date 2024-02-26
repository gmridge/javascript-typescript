import { describe, it, expect } from 'vitest';

describe('JavaScript & TypeScript Primitives', () => {

  // Test for understanding number methods
  it('should correctly use number methods', () => {
    // Exercise: Fix the expected values to pass the test
    const n: number = 1.23456; // primitive floating point number
    expect(n.toFixed(2)).toBe('1.23'); // fixed to 2 decimal places
    expect(n.toPrecision(10)).toBe('1.234560000'); // fills or rounds to the exact number of digits
  });

  // Test for understanding string methods
  it('should correctly use string methods', () => {
    // Exercise: Fix the expected values to pass the test
    const hello: string = 'hello world'; // primitive string
    expect(hello.toUpperCase()).toBe('HELLO WORLD');
    expect(hello.endsWith('world')).toBe(true); // check that the string ends with 'world'
  });

  // Test for custom toString method on objects
  it('should override default toString method', () => {
    // Exercise: Create a user object with a custom toString method
    const user = {
      name: 'John',
      toString() {
        return 'User: ' + this.name;
      }
    };
    expect(user.toString()).toBe('User: John');
  });

  // Test for custom valueOf method on objects
  it('should override default valueOf method', () => {
    // Exercise: Create an apple object with a custom valueOf method
    const apple = {
      name: 'Apple',
      category: 'Granny Smith',
      price: 1.2,
      valueOf(): number {
        return this.price
      }
    };
    expect(apple as unknown as number * 2).toBe(2.4); // the apple object should behave like a number
  });

});
