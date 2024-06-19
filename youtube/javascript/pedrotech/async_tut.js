// Asynchronous JavaScript: https://www.youtube.com/watch?v=PgZ9npYJZzU
const axios = require("axios");

const data = axios("https://cat-fact.herokuapp.com/fact");

data
    .then((res) => {
        console.log(res.data);
    })
    .catch ((err) => {
        console.log(err)
    });