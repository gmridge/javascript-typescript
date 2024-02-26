
import { describe, it, expect } from 'vitest';

describe('reduce method tests', () => {
  
  it('should sum up all numbers in an array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((accumulator, number) => {
      return accumulator + number}, 0);
    expect(sum).toBe(15); // Initial test set to fail, correct answer should be 15
  });

  it('should concatenate all strings in an array', () => {
    const strings = ['hello', ' ', 'world', '!'];
    const result = strings.reduce((acc, string) => acc + string, '');
    expect(result).toBe('hello world!'); // Initial test set to fail, correct answer should be 'hello world!'
  });

  it('should flatten an array of arrays', () => {
    const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
    const flatArray = arrayOfArrays.reduce((acc, array) => {
      return acc.concat(array)
    }, []);
    expect(flatArray).toEqual([1, 2, 3, 4, 5, 6]); // Initial test set to fail, correct answer should be [1, 2, 3, 4, 5, 6]
  });

  it('should transform an array of objects into a single object grouped by a property', () => {
    const products = [
      { id: 1, category: 'shirts' },
      { id: 2, category: 'shirts' },
      { id: 3, category: 'pants' }
    ];
    const groupedByCategory = products.reduce((acc, product) => {
      const arr = (acc[product.category] || [])
      arr.push(product)
      acc[product.category] = arr
      return acc
    }, {});
    expect(groupedByCategory).toEqual({
"pants": [
{
 "category": "pants",
 "id": 3,
},
],
"shirts": [
 {
"category": "shirts",
 "id": 1,
 },
 {
 "category": "shirts",
"id": 2,
 },
],
}); // Initial test set to fail, correct answer should have all products grouped by categories
  });

  it('should count instances of values in an array', () => {
    const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    const count = items.reduce((acc, fruit) => {
      acc[fruit] = (acc[fruit] || 0) + 1
      return acc
    }, {});
    expect(count).toEqual({ apple: 1,
      "apple": 3,
    "banana": 2,
    "orange": 1,  
  }); // Initial test set to fail, correct answer should count each fruit
  });

});
