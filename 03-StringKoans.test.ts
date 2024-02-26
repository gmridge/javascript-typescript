import { describe, it, expect } from 'vitest';

describe('String Magic in JavaScript and TypeScript', () => {

  // Test for understanding special characters
  it('should correctly use newline and tab characters', () => {
    // Exercise: Fix the string to include correct newline and tab characters
    const guestList = 'Guests:\n\tJohn\n\tPete\n\tMary';
    expect(guestList).toBe('Guests:\n\tJohn\n\tPete\n\tMary'); // This will fail initially
  });

  // Test for understanding Unicode characters
  it('should understand Unicode character encoding', () => {
    // Exercise: Use the correct Unicode escape sequences
    const heart = '\u2764'; // This should be the Unicode character for a heart
    const copyright = '\u00A9'; // This should be the Unicode character for copyright
    expect(heart).toBe('❤'); // This will fail initially
    expect(copyright).toBe('©'); // This will fail initially
  });

  // Test for string comparison
  it('should compare strings correctly', () => {
    // Exercise: Correct the comparison logic
    const str = 'a';
    expect(str.codePointAt(0)).toBe(97); // 'a' in Unicode code point
    expect(String.fromCodePoint(97)).toBe('a'); // This should pass
  });

  // Test for string manipulation
  it('should manipulate strings properly', () => {
    // Exercise: Manipulate the string as per the instructions
    const phrase = 'The quick brown fox jumps over the lazy dog';
    expect(phrase.length).toBe(43); // This should fail initially
    expect(phrase.indexOf('quick')).toBe(4); // This should pass
    expect(phrase.substring(16, 19)).toBe('fox'); // This should fail initially
    expect(phrase + ' and runs away').toBe('The quick brown fox jumps over the lazy dog and runs away'); // This will fail initially
  });

  // Test for other string functions
  it('should use other string functions correctly', () => {
    // Exercise: Use string functions to transform the sentence
    const sentence = 'The quick brown fox jumps over the lazy dog.';
    expect(sentence.startsWith('The')).toBe(true); // This will fail initially due to the leading space
    expect(sentence.endsWith('dog.')).toBe(true); // This should fail initially
    expect(sentence.trim()).toBe('The quick brown fox jumps over the lazy dog.'); // This should pass
    expect(sentence.replace('quick', 'slow')).toBe('The slow brown fox jumps over the lazy dog.'); // This will fail initially
  });

});
