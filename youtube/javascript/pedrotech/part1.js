const util = require('util'); // to use promisify method, and make .readFile return a promise
const fs = require('fs'); // to read html

const readHtmlFirst = async () => {
    try {
        const readFileAsync = util.promisify(fs.readFile); // Turn fs.readFile function into a promise-based function; i.e., it is asynchronous
        const html = await readFileAsync('index.html', 'utf8');
				
				// If readFileAsync successfully retrieves index.html, the following code occurs:
        
        console.log("HTML File: " + html + "\n\nOther tutorial practice:\n");
        // All The JavaScript You Need To Know For React (Part 1): https://www.youtube.com/watch?v=m55PTVUrlnA
        // Arrow function:
        // without arrow function:
        function doSomethingOld() {
            console.log('Doing something the old way\n');
        }
        doSomethingOld();
        // with arrow function:
        const doSomethingNew = () => {
            console.log('Doing something the new way\n');
        }
        doSomethingNew();

        // Ternary operator usage:
        let age1 = 16;
        let name1 = age1 > 10 ? "Pedro" : "Jack";
        console.log(name1);

        // Since JSX is not valid here, let's return strings instead of JSX elements
        const Component = () => {
            return age1 > 10 ? "Pedro" : "Jack";
        }
        console.log(Component());

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

        // Callback function
        function greet(name, callback) {
            console.log('Hello ' + name);
            callback();
        }
        function sayGoodbye() {
            console.log('Goodbye!\n');
        }
        greet('John', sayGoodbye);
    } catch (err) { // If readFileAsync unsuccessfully retrieves index.html, the following code occurs:
        console.log(err);
    } finally { // No matter the result of the promise, the following code occurs at the end of the result:
        console.log("Finished executing readHtmlFirst() function!\n");
    };
};

readHtmlFirst();