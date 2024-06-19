// Asynchronous JavaScript: https://www.youtube.com/watch?v=PgZ9npYJZzU
const event = new Promise((resolve, reject) => {
    let name = "John";
    if (name == "Pedro") {
        resolve(name);
    } else {
        reject(`The name was not Pedro, it was ${name}!`);
    }
});

event
    .then((name) => {
        console.log(name);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally (() => {
        console.log('Promise settled')
    });