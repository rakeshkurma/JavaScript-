const URL = "https://jsonplaceholder.typicode.com/comments";

async function fetchDataFromApi(apiUrl) {
  
    const data = (await fetch(apiUrl)).json();



    // Do something with the parsed data
    console.log('Data from API:', data);

    return data;
  
}

// Example usage:
fetchDataFromApi(URL);
