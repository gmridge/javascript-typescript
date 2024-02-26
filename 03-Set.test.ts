
import { describe, it, expect } from 'vitest';

describe('Set tests', () => {
  
  it('should add unique values to the set', () => {
    const names: Set<string> = new Set();
    names.add('Alice');
    names.add('Bob');
    names.add('Alice'); // This should not increase the size of the set
    expect(names.size).toBe(2); // The test will fail initially, the correct size should be 2
  });

  it('should remove a value from the set', () => {
    const names = new Set(['Alice', 'Bob']);
    // .delete
    names.delete('Bob')
    expect(names.has('Bob')).toBe(false); 
  });

  it('should clear the set', () => {
    const names = new Set(['Alice', 'Bob']);
    // .clear
    names.clear()
    expect(names.size).toBe(0);
  });

  it('should iterate over the set with for...of', () => {
    const names = new Set(['Alice', 'Bob']);
    let count = 0;
    // for of
    for (let name of names) {
      count++
    }
    expect(count).toBe(2); 
  });

  it('should iterate over the set with reduce', () => {
    const names = new Set(['Alice', 'Bob']);
    let count = 0;
    // reduce
    names.forEach((name) => count++)
    expect(count).toBe(2); 
  });

});

