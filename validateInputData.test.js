const validateInputData = require('./validateInputData')

describe("Input Validation", () => {
  test("Valid input passes validation", () => {
    const input = { id: 1, email: "femis@gmail.com", name: "David" };
    expect(validateInputData(input)).toBe(true);
  });

  test("Missing id throws an error", () => {
    const input = { email: "femis@gmail.com", name: "David" };
    expect(() => validateInputData(input)).toThrow("ID must be present and a number.");
  });

  test("Invalid email throws an error", () => {
    const input = { id: 123, email: "invalid-email", name: "David" };
    expect(() => validateInputData(input)).toThrow("Email must be a valid string.");
  });

  test("Missing name throws an error", () => {
    const input = { id: 123, email: "femis@gmail.com" };
    expect(() => validateInputData(input)).toThrow("Name must be present and a string.");
  });
});

// STEP 2
// const validateInput = require('./validateInputData');

// describe("Input Validation", () => {
//   const validInput = { id: 123, email: "test@example.com", name: "David" };

//   test("Valid input passes validation", () => {
//     expect(validateInput(validInput)).toBe(true);
//   });

//   test.each([
//     [{ email: "test@example.com", name: "David" }, "ID must be present and a number."],
//     [{ id: 123, email: "invalid-email", name: "David" }, "Email must be a valid string."],
//     [{ id: 123, email: "test@example.com" }, "Name must be present and a string."]
//   ])("Invalid input (%p) throws an error", (input, expectedError) => {
//     expect(() => validateInput(input)).toThrow(expectedError);
//   });
// });
