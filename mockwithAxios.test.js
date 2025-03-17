const axios = require('axios')//import axios

jest.mock('axios'); // Mock Axios

describe('API Data Validation (with mocked Axios)', () => {
  it('returns expected data from mocked API', async () => {
    // Mock response
    const mockData = {
      data: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    };

    // Mock Axios GET request
    axios.get.mockResolvedValue(mockData);

    const url = 'https://jsonplaceholder.typicode.com/users/1'; // API URL
    const response = await axios.get(url); // Mocked API call

    // Validate the mocked data
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('email');
    expect(response.data.id).toBeGreaterThan(0);
    expect(typeof response.data.name).toBe('string');
    expect(typeof response.data.email).toBe('string');
  });
});
