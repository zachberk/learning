// // All The JavaScript You Need To Know For React (Part 1): https://www.youtube.com/watch?v=m55PTVUrlnA
// // Arrow function:
// // without arrow function:
// function doSomethingOld() {
//     console.log('Doing something the old way');
// }
// // with arrow function:
// const doSomethingNew = () => {
//     console.log('Doing something the new way');
// }

// // Ternary operator usage:
// let age1 = 16;
// let name1 = age1 > 10 ? "Pedro" : "Jack";

// // Since JSX is not valid here, let's return strings instead of JSX elements
// const Component = () => {
//     return age1 > 10 ? "Pedro" : "Jack";
// }

// // Objects:
// const name = "Pedro";
// const age = 20;
// const person = {
//     name,
//     age,
//     isMarried: false,
// };

// // declaring new objects/sets that build on previously declared objects/sets
// const person2 = { ...person, name: "Jack" };
// const names = ["Pedro", "Jack", "Jessica"];
// const names2 = [...names, "Joel"];

// // Map, filter, and reduce functions
// // Map function
let names3 = ["Pedro", "Jack", "Carol"];
// example usage with strings
names4 = names3.map((name) => {
    name += " is a person.\n";
    console.log(name);
    return name;
});
console.log(`Mapped set:${names4}\n`);
console.log(`Unfiltered set: ${names3}\n`);
// Filter function
names3 = names3.filter((name) => {
    return name !== "Pedro";
});
console.log(`Filtered set: ${names3}\n`);

// // Callback function
// function greet(name, callback) {
//     console.log('Hello ' + name);
//     callback();
// }
// function sayGoodbye() {
//     console.log('Goodbye!');
// }
// greet('John', sayGoodbye);

// Asynchronous JavaScript: https://www.youtube.com/watch?v=PgZ9npYJZzU
const event = new Promise((resolve, reject) => {
    let name = "John";
    if (name == "Pedro") {
        resolve(name);
    } else {
        reject(name);
    }
});

event
    .then((name) => {
        console.log(name);
    })
    .catch((name) => {
        console.log(`The name was not Pedro, it was ${name}!\n`);
    })
    .finally (() => {
        console.log('Promise settled')
    });