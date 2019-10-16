const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const decimal = document.getElementById('decimal-point');

const minus = document.getElementById('subtraction');
const mul = document.getElementById('multiplication');
const cancel = document.getElementById('cancel');
const add = document.getElementById('addition');
const division = document.getElementById('division');

const result = document.getElementById('result');
const result_div = document.getElementById('text-result-box');
const text_input = document.getElementById('text-input-box');


one.addEventListener('click', function numbeOne(){
    text_input.value += one.value;
});

two.addEventListener('click', function numberTwo(){
    text_input.value += two.value;
});

three.addEventListener('click', function numberThree(){
    text_input.value += three.value;
});

four.addEventListener('click', function numberFour(){
    text_input.value += four.value;
});

five.addEventListener('click', function numberFive(){
    text_input.value += five.value;
});

six.addEventListener('click', function numberSix(){
    text_input.value += six.value;
});

seven.addEventListener('click', function numberSeven(){
    text_input.value += seven.value;
});

eight.addEventListener('click', function numberEight(){
    text_input.value += eight.value;
});

nine.addEventListener('click', function numberNine(){
    text_input.value += nine.value;
});

zero.addEventListener('click', function numberZero(){
    text_input.value += zero.value;
});

minus.addEventListener('click', function minusOperation(){
    text_input.value += minus.value;
});

mul.addEventListener('click', function multiplicationOperation(){
    text_input.value += mul.value;
});

add.addEventListener('click', function additionOperation(){
    text_input.value += add.value;
});

division.addEventListener('click', function divisionOperation(){
    text_input.value += division.value;
});

cancel.addEventListener('click', function cancelButton(){
    text_input.value = "";
    result_div.innerText ="Result: ";
});

decimal.addEventListener('click', function decimalButton(){
    if(text_input.value == ""){
        text_input.value = "";
    } else {
        text_input.value += decimal.value;
    }
    
});

result.addEventListener('click', function resultButton(){
    const tryy = eval(text_input.value);
    result_div.innerText = `Result: ${tryy}`;
});

