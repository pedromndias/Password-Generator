// Let's grab the necessary elements from out HTML:
const rectangle1 = document.getElementById("rectangle1");
const rectangle2 = document.getElementById("rectangle2");
const rectangle3 = document.getElementById("rectangle3");
const rectangle4 = document.getElementById("rectangle4");
const generateBtn = document.getElementById("generate-btn");
const rectangles = document.querySelectorAll(".rectangle");
const message = document.getElementById("final-message");
const input = document.getElementById("input");

// Let's create an array with the characters that we want the passwords to include:
let randomChars = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "c", "v", "b", "n", "m", "Q", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "!", "@", "#", "$", "%", "&"];

// This will add all the 10 digits to the array:
for (let i = 0; i < 10; i++) {
    randomChars.push(i)
}

// Each of the following function will generate a random number that will be an index of the randomChars array. Then, we assign the correspondant character to the textContent of the rectangle.
function generateRandom1() {
    let randomChar = Math.floor(Math.random() * randomChars.length);
    rectangle1.textContent += randomChars[randomChar];
}
function generateRandom2() {
    let randomChar = Math.floor(Math.random() * randomChars.length);
    rectangle2.textContent += randomChars[randomChar];
}
function generateRandom3() {
    let randomChar = Math.floor(Math.random() * randomChars.length);
    rectangle3.textContent += randomChars[randomChar];
}
function generateRandom4() {
    let randomChar = Math.floor(Math.random() * randomChars.length);
    rectangle4.textContent += randomChars[randomChar];
}

// Every time we call generatePass function, it will clear the text on each rectangle and generate numChars more random characters for each one. 10 will be by default.
function generatePass() {
    let numChars = 0;
    if (input.value === "") {
        numChars = 10;
    } else if (input.value > 19){
        numChars = 19;
    } else {
        numChars = input.value;
    }
    rectangle1.textContent = "";
    rectangle2.textContent = "";
    rectangle3.textContent = "";
    rectangle4.textContent = "";
    for (let i = 0; i < numChars; i++) {
        generateRandom1();
        generateRandom2();
        generateRandom3();
        generateRandom4();
    }
    message.innerText = "Click password to copy";

    // This allows the form to not behave as default and when we press "Enter" on the input it will generate passwords. Note how on the HTML file the form has onsubmit="return generatePass()"
    return false;
}

// Now we create the button click event that will call the generatePass function:
generateBtn.addEventListener("click", generatePass);

// The following code will copy the text from a generated password:
rectangles.forEach(el => el.addEventListener("click", function(e) {
    let copyText = e.target.innerText;
    navigator.clipboard.writeText(copyText);
    message.innerText = `Password ${copyText} was copied to clipboard`;
}))