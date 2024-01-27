function fetchData(callback) {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
      const data = { message: "Data fetched successfully!" };
      callback(data); // Call the callback function with the fetched data
    }, 1000);
  }
  
  function processData(data) {
    console.log("Processing data:", data.message);
  }
  
  // Usage: Pass the processData function as a callback to fetchData
  fetchData(processData);