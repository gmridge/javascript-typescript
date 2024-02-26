import { describe, it, expect } from 'vitest';

describe('Numbers in JavaScript and TypeScript', () => {

  // Test for understanding decimal number syntax
  it('should recognize different syntaxes for representing large and small numbers', () => {
    // Exercise: Adjust the values to make the tests pass
    const billion = 1000000000; // 9 zeros - hard to read
    const billionReadable = 1_000_000_000; // easier to read, underscores are ignored
    const billionExponential = 1e9; // exponential format
    expect(billion).toBe(billionReadable);
    expect(billion).toBe(billionExponential);

    // Now for small numbers 
    const micro = 0.000001; // 6 decimal places - hard to read
    const microReadable = 0.000_001; // easier to read, underscores are ignored
    const microExponential = 1e-6; // exponential format
    expect(micro).toBe(microReadable);
    expect(micro).toBe(microExponential);
  });

  // Test for understanding hexadecimal numbers
  it('should use hexadecimal numbers to represent colors', () => {
    // Exercise: Create a color object with hexadecimal values
    const color = {
      red: 0xFF0000,
      green: 0x00FF00,
      blue: 0x0000FF,
      white: 0xFFFFFF
    };
    expect(color.red).toBe(0xFF0000); // This should fail initially
    expect(color.green).toBe(0xFF00); // This should fail initially
    expect(color.blue).toBe(0x0000FF); // This should fail initially
    expect(color.white).toBe(0xFFFFFF); // This should pass
  });

  // Test for binary and octal numbers
  it('should understand binary and octal numbers', () => {
    // Exercise: Correct the binary and octal values
    const binary = 0b11111111; // binary form of 255
    const octal = 0o377; // octal form of 255
    expect(binary).toBe(255);
    expect(octal).toBe(255);
  });

  // Test for base conversion
  it('should convert numbers to different bases correctly', () => {
    // Exercise: Convert numbers to different bases
    const num = 255;
    expect(num.toString(16)).toBe('ff'); // Convert to hexadecimal
    expect(num.toString(2)).toBe('11111111'); // Convert to binary
  });

  // Test for imprecise calculations
  it('should handle imprecise calculations', () => {
    // Exercise: Predict the output of imprecise calculations
    const point1 = 0.1;
    const point2 = 0.2;
    expect(point1 + point2).toBe(0.30000000000000004); // This will fail due to floating point precision issues
  });

  // Test for understanding special numeric values
  it('should use isFinite and isNaN correctly', () => {
    // Exercise: Use isFinite and isNaN to test numeric values
    expect(isNaN(NaN)).toBe(true);
    expect(isFinite(Infinity)).toBe(false);
  });

  // Test for parsing integers and floats
  it('should parse integers and floats from strings correctly', () => {
    // Exercise: Parse numbers from strings
    expect(parseInt('100px')).toBe(100); // This should pass
    expect(parseFloat('0.12')).toBe(0.12); // This will fail initially
  });
});
