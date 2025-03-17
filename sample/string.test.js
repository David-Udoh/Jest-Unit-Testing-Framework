const string = require('../string')

test('string matchers', () => {
    expect('My name is David').toMatch(/David/); // Checks if it contains 'hello'
  });
  