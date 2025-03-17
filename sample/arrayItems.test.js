const arrayItems = require('../arrayItems');

// Test to check if an array contains a specific item
test('array contains', () => {
  expect(arrayItems).not.toContain('milk'); // Check if 'milk' is NOT in the array
  expect(arrayItems).toContain('eggs'); // Check if 'eggs' is in the array
  expect(arrayItems).toContain('cake'); // Check if 'cake' is in the array
});
