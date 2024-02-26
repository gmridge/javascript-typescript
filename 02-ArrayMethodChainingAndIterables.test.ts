
import { describe, it, expect } from 'vitest';

describe('chaining array methods', () => {
  
  it('should filter and sum numbers greater than a threshold', () => {
    const numbers = [10, 20, 30, 40, 50];
    const threshold = 25;
    const sum = numbers.filter((number) => number > threshold).reduce((acc, number) => acc + number, 0); // numbers.filter().reduce();
    expect(sum).toBe(120); // Initial test set to fail, correct answer should be 120
  });

  it('should transform objects and sort by a specified property', () => {
    const products = [
      { id: 1, name: 'Cucumber', price: 1.99 },
      { id: 2, name: 'Tomato', price: 2.99 },
      { id: 3, name: 'Onion', price: 0.99 }
    ];
    const sortedProducts = products.map((product) => ({priceWithTax: (product.price * 1.15).toFixed(2)})).sort((a, b) => a.priceWithTax > b.priceWithTax ? 1 : -1); // products.map().sort();
    expect(sortedProducts).toEqual([{ priceWithTax: 1.99, "priceWithTax": "1.14",
},
{
"priceWithTax": "2.29",
},
{
"priceWithTax": "3.44", }]); // Initial test set to fail, correct answer should have all products with tax and sorted
  });

});

describe('iterables', () => {

  it('should use for...of to iterate over an array and sum numbers', () => {
    const numbers = [10, 20, 30];
    let sum = 0;
    for (const number of numbers) {
      sum += number
    }
    // use for of
    expect(sum).toBe(60); // Initial test set to fail, correct answer should be 60
  });

  it('should demonstrate that objects are not iterable', () => {
    const obj = { 
      a: 1, 
      b: 2, 
      c: 3 
      [Symbol.iterator](){
        let i = 0
        const entries: [string, unknown] = Object.entries(this)
        return {
          next (): {value: [string, number] | undefined,  done: boolean} {
            const item = entries[i]
            i++
            if (i <= entries.length) {
              return {value: item, done: false}
            }
            else {
              return {value: undefined, done: true}
            }
          }
        }
      }
    };
    let keyValuePairs: [string, number] [] = [];
    // This should cause a TypeScript error because objects are not directly iterable.
    // Students should comment this out or find a workaround to make the test pass.
    for (const [key, value] of obj) {
      keyValuePairs.push([key, value]);
    }
    expect(keyValuePairs).toEqual([]); // Initial test set to fail, correct answer should be [['a', 1], ['b', 2], ['c', 3]]
  });

});
