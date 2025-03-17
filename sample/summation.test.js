// Import the function to be tested
const sum = require('../sum');

// Test cases for the sum function
describe('Sum Function', () => {
  test('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('adds positive and negative numbers', () => {
    expect(sum(5, -3)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  test('adds zero correctly', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });
});
