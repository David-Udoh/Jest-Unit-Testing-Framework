function validateInput(data) {
    // Check if 'id' exists and it is a number.
    if (!data.id || typeof data.id !== 'number') {
      throw new Error("ID must be present and a number.");
    }
  
    // Check if 'email' exists and is valid
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      throw new Error("Email must be a valid string.");
    }
  
    // Check if 'name' exists and is a string
    if (!data.name || typeof data.name !== 'string') {
      throw new Error("Name must be present and a string.");
    }
  
    // Return true if all validations pass
    return true;
  }
  
  module.exports = validateInput;
  