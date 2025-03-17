//   const fetchDataAPI = require('./fetchDataAPI');

//   test ('fetch url from API', async () =>{
//   fetchDataAPI('https://jsonplaceholder.typicode.com').then(data => {
//     console.log(data); // Handle the data after fetching
//   })
//   });
  
const fetchDataAPI = require('./fetchDataAPI');

test('fetch data from API and parse response to JSON', async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1'; // Use a valid JSON endpoint

  const data = await fetchDataAPI(url); // Wait for the fetchDataAPI function to resolve
  console.log(data); // Output the JSON response for debugging

  // Assertions to validate the response
  expect(data).toBeDefined(); // Ensure the data is not undefined
  expect(data).toHaveProperty('id'); // Check if the data contains the 'id' property
});

  