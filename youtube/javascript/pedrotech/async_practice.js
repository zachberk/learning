// Asynchronous JavaScript: https://www.youtube.com/watch?v=PgZ9npYJZzU
const axios = require("axios");

//  Implement a promise with promise methods
const data = axios.get("https://jsonplaceholder.typicode.com/posts/1");
data
    .then((res) => {
        console.log("Status: " + res.status); // Accessing the status code
        // console.log("Headers: " + res.headers); // Accessing the response headers
        console.log("Config: " + res.config); // Accessing the request configuration
        console.log("Data: " + res.data); // Accessing the response data
    })
    .catch ((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("Promise fulfilled!\n");
    });
console.log("This will run while the axios request is being made.");
console.log("This will also run while the axios request is being made.\n");

//  Implement a promise with async-await
const fetchData = async () => { 
    try {
        const data1 = await axios.get("https://jsonplaceholder.typicode.com/posts/2");
        console.log("Status: " + data1.status); // Accessing the status code
        // console.log("Headers: " + data1.headers); // Accessing the response headers
        console.log("Config: " + data1.config); // Accessing the request configuration
        console.log("Data: " + data1.data); // Accessing the response data
    } catch (err) {
        console.log(err);
    } finally {
        // cleanup code...
        console.log("Promise (using async-await) fulfilled!\n");
    }
};

fetchData();
console.log("This will run while the axios request (using async-await) is being made.");
console.log("This will also run while the axios request (using async-await) is being made.\n");