test('mock basic function', () => {
const mock = jest.fn( x => 42 + x)

// expect (mock(1)).toBe(43)
expect (mock(5)).toBe(47)
expect (mock).toHaveBeenCalledWith(5)
})
