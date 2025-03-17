// Import the function to be tested
const myFunction = require('./myFunction');

describe('myFunction', () => {
  test('should not throw an error when input is a number', () => {
    expect(() => myFunction(123)).not.toThrow();
  });

  test('should throw an error when input is not a number', () => {
    expect(() => myFunction('123')).toThrow('Invalid Input'); // String input
    expect(() => myFunction(null)).toThrow('Invalid Input'); // Null input
    expect(() => myFunction(undefined)).toThrow('Invalid Input'); // Undefined input
    expect(() => myFunction({})).toThrow('Invalid Input'); // Object input
    expect(() => myFunction([])).toThrow('Invalid Input'); // Array input
  });
});
