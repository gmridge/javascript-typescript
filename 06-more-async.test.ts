
import { describe, it, expect } from 'vitest';

// Slide 66: Promises: static methods
describe('Promises: static methods', () => {
  it('Promise.all should resolve with all values or reject with the first error', async () => {
    const promises = [Promise.resolve(1), Promise.resolve(2), Promise.reject(new Error('Failure'))];
    let caughtError;
    // This test will fail initially. Students need to handle the rejection properly.
    try {
    const results = await Promise.all(promises);
    expect(results).toEqual([1, 2]); 
  } catch (error) {
    caughtError = error;
    expect(error instanceof Error).toBe(true);
    expect(error.message).toBe('Failure');
  }
  });

  it('Promise.allSettled should resolve with all values or rejections', async () => {
    const promises = [Promise.resolve(1), Promise.resolve(2), Promise.reject(new Error('Failure'))];
    let caughtError;
    // This test will fail initially. Students need to handle the rejection properly.
    try {
    const results = await Promise.allSettled(promises);
    expect(results.length).toBe(3); 
  } catch (error) {
    caughtError = error;
    expect(false).toBe(true);
    expect(error.message).toBe('Failure');
  }
  });
});

// Slide 67: Promises: async/await
describe('Promises: async/await', () => {
  it('should wait for the promise to resolve', async () => {
    let value = await new Promise<number>((resolve) => {
      setTimeout(() =>resolve (1), 500);
    })
    // Students should use await to wait for the value to change. 
    expect(value).toBe(1);
  });
});

// Slide 68: async function
describe('async function', () => {
  it('should always return a promise', async () => {
    async function asyncFunction() {
      return 'test';
    }
    // This test will initially fail. Students need to check that the function returns a promise.
    const result = asyncFunction();
    expect(result).toBeInstanceOf(Promise);
    expect(await result).toBe('test');
  });
});

// Slide 69: await keyword
describe('await keyword', () => {
  it('should catch errors thrown by a promise', async () => {
    async function riskyOperation() {
      throw new Error('Danger!');
    }
    let errorCaught = false;
    // This test will fail initially. Students should use try...catch to catch the error.
    try {
      await riskyOperation();
    } catch {
      errorCaught = true;
    }
    expect(errorCaught).toBe(true);
  }); 
});

// We can add more koans here for each slide and concept related to Promises and async/await
