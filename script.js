const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value.replace(/sqrt\(/g, 'Math.sqrt(');
        if ((expression.match(/Math.sqrt\(/g) || []).length > 
            (expression.match(/\)/g) || []).length) {
            expression += ')';
        }
        
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}


