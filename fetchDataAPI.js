async function fetchDataAPI(url) {
    const response = await fetch(url); // Fetch the data from the API
    const data = await response.json(); // Convert the response to JSON
    return data; // Return the parsed data
  }
  
module.exports = fetchDataAPI;