// DOM selection
const title = document.getElementById("title");
const input = document.getElementById("nameInput");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Event Listener
button.addEventListener("click", function () {

    // Read input value
    let name = input.value;

    // Change DOM content
    output.innerText = "Hello " + name + " 👋";

    // Change style using DOM
    title.style.color = "purple";
});