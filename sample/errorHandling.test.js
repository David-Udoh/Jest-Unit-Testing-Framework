const myFunction = require('../myFunction')

test('throws an invalid input', () => {
    expect(() => {
        myFunction(invalidInput);
    }).toThrow();
})

test('throws an invalid input string', () => {
    expect(() => {
        // Lets use a string as an invalid input, expected result is to pass
        myFunction('femidvaids');
    }).toThrow();
})

test('throws an valid input number', () => {
   // Lets use a number as an valid input, expected result is to fail
    expect(() => {
        myFunction(5);
    }).toThrow();
})