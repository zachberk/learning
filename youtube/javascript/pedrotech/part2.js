const ternaryOpsAndConditionals = () => {
    let myAge = 17;
    let isOfAge = false;

        // Inefficient variable assignment using conditional
    if (myAge > 18) {
        isOfAge = true;
    } else {
        isOfAge = false;
    }

        // Efficient variable assignment using conditional with ternary operator
    isOfAge = myAge > 18 ? true : false;

        // Another example
    let isCorrect = Math.random() < 0.5; // Math.random() returns a value between 0 and 1
    let color = isCorrect ? "green" : "red";
    console.log("Random color assignment 1: " + color + "\n");

        // Even another way
    color = "red";
    isCorrect = Math.random() < 0.5; // Math.random() returns a value between 0 and 1
    color = isCorrect && "green"; // color is reassigned the value "green" only if isCorrect evaluates to true
    console.log("Random color assignment 2: " + color + "\n");
};
// ternaryOpsAndConditionals(); // run if wanted

const optionalChaining = () => {
    const fetchData = async () => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const name = data.person?.name;
            console.log(name); //undefined if .person value does not exist
        } catch (err) {
            console.log("Error: " + err);
        } finally {
            console.log("Fetching done!");
        }
    };
};
// optionalChaining(); // run if wanted

const templateLiterals = () => {
    let postNum = 1;
    const fetchData = async (postNum) => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postNum}`);
            const name = data.person?.name;
            console.log(name); //undefined if .person value does not exist
        } catch (err) {
            console.log("Error: " + err);
        } finally {
            console.log("Fetching done!");
        }
    };
    fetchData();
};
// templateLiterals(); // run if wanted