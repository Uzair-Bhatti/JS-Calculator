let display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function deleteValue() {
    display.value = display.value.toString().slice(0, -1)
}

function evaluateValue() {
    display.value = eval(display.value)
}