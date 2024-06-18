// All The JavaScript You Need To Know For React (Part 1): https://www.youtube.com/watch?v=m55PTVUrlnA
    // Arrow function:
        // without arrow function:
        function DoSomething() {
            // code
        }
        // with arrow function:
        const DoSomething = () => {
            return <div> </div>
        }

    // Ternary operator usage:
    let age1 = 16;
    let name1 = age1 > 10 ? "Pedro" : "Jack";
    const Component = () => {
        return age1 > 10 ? <div> Pedro </div> : <div> Jack </div>;
    }

    // Objects:
    const name = "Pedro";
    const age = 20;
    const person = {
        name,
        age,
        isMarried: false,
    };
        // Separate variable assignment; too long:
        // const name1 = person.name
        // const age1 = person.age
        // const isMarried = person.isMarried

        // Separate variable assignment; better:
        // const { name, age, isMarried } = person;

        // declaring new objects/sets that build on previously declared objects/sets
        const person2 = {...person, name: "Jack"};
        const names = ["Pedro", "Jack", "Jessica"];
        const names2 = [...names, "Joel"];

    // Map, filter, and reduce functions
        // Map function
        let names3 = ["Pedro", "Jack", "Carol"];
            // example ReactJS usage
            names3.map((name) => {
                return <h1> {name} </h1>
            })
        // Filter function
        names3.filter((name) => {
            return name != "Pedro"
        })

    // Callback function
    function greet(name, callback) {
        console.log('Hello ' + name);
        callback();
    }
    function sayGoodbye() {
        console.log('Goodbye!');
    }
    greet('John', sayGoodbye);

// Asynchronous JavaScript: https://www.youtube.com/watch?v=PgZ9npYJZzU



// All The JavaScript You Need To Know For React (Part 2): https://www.youtube.com/watch?v=ACaT1Gfhe6I
