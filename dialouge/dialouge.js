// Prompt the user for their name
const name = alertdr("Enter your name:");

function greet(text) {
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.innerHTML = `Hello, Welcome ${text}!`;
    } else {
        console.error("Greeting element not found!");
    }
}

// Call the greet function with the user's name
greet(name);