const multiplication = require('./multiplication')

// Import the function to be tested
const multiply = require('./multiplication');

describe('multiplication', () => {
  test('multiplies positive numbers correctly', () => {
    expect(multiplication(5, 2, 3)).toBe(30); // 5 * 2 * 3 = 30
  });

  test('returns 0 if any number is 0', () => {
    expect(multiplication(0, 5, 10)).toBe(0); // 0 * 5 * 10 = 0
    expect(multiplication(7, 0, 9)).toBe(0); // 7 * 0 * 9 = 0
  });

  test('handles negative numbers correctly', () => {
    expect(multiplication(-2, 3, 4)).toBe(-24); // -2 * 3 * 4 = -24
    expect(multiplication(-2, -3, 4)).toBe(24); // -2 * -3 * 4 = 24
  });

  test('handles decimal numbers correctly', () => {
    expect(multiplication(1.5, 2, 3)).toBeCloseTo(9); // 1.5 * 2 * 3 = 9
  });
});


