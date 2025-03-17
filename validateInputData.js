function validateInputData({ id, email, name }) {
    // Check if 'id' exists and it is a number.
    if (typeof id !== 'number') throw new Error("ID must be present and a number.");

    // Check if 'email' exists and is valid using regular expression (regex)
    if (!/\S+@\S+\.\S+/.test(email)) throw new Error("Email must be a valid string.");

    // Check if 'name' exists and it is a string.
    if (typeof name !== 'string') throw new Error("Name must be present and a string.");
    return true;
  }
  
  module.exports = validateInputData;
  