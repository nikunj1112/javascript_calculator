
const display = document.getElementById("display");


const keys = document.querySelectorAll("#keyboard div");


let currentInput = "";
let previousInput = "";
let operator = "";


const updateDisplay = (value) => {
    display.textContent = value;
};


keys.forEach((key) => {
    key.addEventListener("click", () => {
        const keyValue = key.textContent;

        if (!isNaN(keyValue)) {
            // If key is a number
            currentInput += keyValue;
            updateDisplay(currentInput);
        } else if (keyValue === "C") {
            // Clear display
            currentInput = "";
            previousInput = "";
            operator = "";
            updateDisplay("");
        } else if (["+", "-", "*", "/"].includes(keyValue)) {
            // Save operator and previous input
            operator = keyValue;
            previousInput = currentInput;
            currentInput = "";
        } else if (keyValue === "=") {
            // Perform calculation
            if (previousInput && currentInput && operator) {
                const result = eval(`${previousInput} ${operator} ${currentInput}`);
                updateDisplay(result);
                currentInput = result;
                previousInput = "";
                operator = "";
            }
        }
    });
});


