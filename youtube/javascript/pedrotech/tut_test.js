// All The JavaScript You Need To Know For React (Part 1): https://www.youtube.com/watch?v=m55PTVUrlnA
// Arrow function:
// without arrow function:
function doSomethingOld() {
    console.log('Doing something the old way');
}
// with arrow function:
const doSomethingNew = () => {
    console.log('Doing something the new way');
}

// Ternary operator usage:
let age1 = 16;
let name1 = age1 > 10 ? "Pedro" : "Jack";

// Since JSX is not valid here, let's return strings instead of JSX elements
const Component = () => {
    return age1 > 10 ? "Pedro" : "Jack";
}

// Objects:
const name = "Pedro";
const age = 20;
const person = {
    name,
    age,
    isMarried: false,
};

// declaring new objects/sets that build on previously declared objects/sets
const person2 = { ...person, name: "Jack" };
const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Joel"];

// Map, filter, and reduce functions
// Map function
let names3 = ["Pedro", "Jack", "Carol"];
// example usage with strings
names3.map((name) => {
    console.log(name);
    return name;
});
// Filter function
names3 = names3.filter((name) => {
    return name !== "Pedro";
});

// Callback function
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}
function sayGoodbye() {
    console.log('Goodbye!');
}
greet('John', sayGoodbye);