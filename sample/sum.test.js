const sum = require('../sum')

test('It adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);

    // toBe mostly used for primitive values like numbers, string and boolean
    expect (result).toBe(3);
})

test('object assignment', () => {
    const data = {one: 1};
    data['two']= 2;

    // toEqual used for object, arrays
    expect (data).toEqual({one: 1, two: 2})
})

test('null is falsy', () => {
    const n = null;
    
// toBeFalsy if a value is null, undefined,false, zero, blank
    expect(n).toBeFalsy();
})

test('zero is falsy', () => {
    const n = 0;
    
// toBeFalsy if a value is null, undefined,false, zero, blank
    expect(n).toBeFalsy();
})    

test('one is truthy', () => {
    const n = 1;
    
// toBeFalsy if a value is null, undefined,false, zero, blank
    expect(n).toBeTruthy();
})    

test('throw an invalid input', () => {
    const n = 0;
    
// toBeFalsy if a value is null, undefined,false, zero, blank
    expect(n).toBeFalsy();
})    