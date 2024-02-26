
import { describe, it, expect } from 'vitest';

describe('Map tests', () => {
  
  it('should set and get a value from the map', () => {
    const map: Map<string, string> = new Map();
    // The test is designed to fail initially
    map.set('key', 'value')
    map.set('number', 8)
    expect(map.get('key')).toBe('value'); // The student needs to set this key-value pair to pass
  });

  it('should check if a key exists in the map', () => {
    const map = new Map();
    map.set('anotherKey', 'value')
    expect(map.has('anotherKey')).toBe(true); // The student needs to ensure this key exists in the map
  });

  it('should remove a key from the map', () => {
    const map = new Map();
    map.set('keyToRemove', 'value')
    // .delete
    map.delete('keyToRemove')
    expect(map.has('keyToRemove')).toBe(false); // The student needs to correctly remove this key
  });

  it('should clear the map', () => {
    const map = new Map();
    map.set('key', 'value');
    map.set('anotherKey', 'anotherValue');
    map.clear();
    expect(map.size).toBe(0); // The student needs to clear the map to pass
  });

  it('should iterate over keys, values, and entries', () => {
    const map = new Map();
    map.set('key', 'value');
    map.set('anotherKey', 'anotherValue');
    let keysCount = 0;
    for (const key of map.keys()) {
      keysCount++
    }
    // map.keys
    expect(keysCount).toBeGreaterThan(0); // The student needs to add keys to the map

    let valuesCount = 0;
    for (const value of map.values()) {
      valuesCount++
    }
    // map.values
    expect(valuesCount).toBeGreaterThan(0); // The student needs to add values to the map

    let entriesCount = 0;
    for (const entries of map.entries()) {
      entriesCount++
    }
    // map.entries
    expect(entriesCount).toBeGreaterThan(0); // The student needs to add entries to the map
  });

  it('should convert a map to an object', () => {
    const map = new Map();
    map.set('key', 'value');
    const object = Object.fromEntries(map);
    expect(typeof object).toBe('object');
    expect(Object.keys(object).length).toBeGreaterThan(0); // The student needs to ensure the map is not empty
  });

});

