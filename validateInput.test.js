const validateInput = require('./validateInput')

describe("Input Validation", () => {
  test("Valid input passes validation", () => {
    const input = { id: 1, email: "femis@gmail.com", name: "David" };
    expect(validateInput(input)).toBe(true);
  });

  test("Missing id throws an error", () => {
    const input = { email: "test@example.com", name: "David" };
    expect(() => validateInput(input)).toThrow("ID must be present and a number.");
  });

  test("Invalid email throws an error", () => {
    const input = { id: 123, email: "invalid-email", name: "David" };
    expect(() => validateInput(input)).toThrow("Email must be a valid string.");
  });

  test("Missing name throws an error", () => {
    const input = { id: 123, email: "test@example.com" };
    expect(() => validateInput(input)).toThrow("Name must be present and a string.");
  });
});
