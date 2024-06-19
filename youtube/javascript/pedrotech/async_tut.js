// Asynchronous JavaScript: https://www.youtube.com/watch?v=PgZ9npYJZzU
const axios = require("axios");

const data = axios("https://cat-fact.herokuapp.com/fact");

console.log("This will run while the axios request is being made.");

data
    .then((res) => {
        console.log(res.data);
    })
    .catch ((err) => {
        console.log(err)
    });

console.log("This will also run while the axios request is being made.");