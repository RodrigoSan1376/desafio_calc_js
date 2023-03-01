const inputNumber1 = document.querySelector('[name="number1"]');
inputNumber1.addEventListener('change', handleInputNumber1Change);
inputNumber1.classList.remove("input-error");

function handleInputNumber1Change(event) {
    if (isNumber(event.target.value)) {
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }
}

const inputNumber2 = document.querySelector('[name="number2"]');
inputNumber2.addEventListener('change', handleInputNumber2Change);
inputNumber2.classList.remove("input-error");

function handleInputNumber2Change(event) {
    if (isNumber(event.target.value)) {
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const btnPlus = document.querySelector('[id="btn-plus"]')
btnPlus.addEventListener('click', btnPlusClick);

function btnPlusClick(event) {
    event.preventDefault();

    if (inputNumber1.value > 0 && inputNumber2.value > 0) {
        const resultBox = parseFloat(inputNumber1.value) + parseFloat(inputNumber2.value);
        document.getElementById('result-box').innerHTML = resultBox;
    }
}

const btnTimes = document.querySelector('[id="btn-times"]');
btnTimes.addEventListener('click', btnTimesClick);

function btnTimesClick(event) {
    event.preventDefault();

    if (inputNumber1.value > 0 && inputNumber2.value > 0) {
        const resultBox = parseFloat(inputNumber1.value) * parseFloat(inputNumber2.value);
        document.getElementById('result-box').innerHTML = resultBox;
    }
}

const btnClear = document.querySelector('[id="btn-clear"]');
btnClear.addEventListener('click', btnClearClick);

function btnClearClick(event) {
    event.preventDefault();
    inputNumber1.value = "";
    inputNumber1.classList.remove("input-error");
    inputNumber2.value = "";
    inputNumber2.classList.remove("input-error");
    document.getElementById('result-box').innerHTML = 0;
}

// O código abaixo é para prevenir que seja usado qualquer outro valor que não seja número, mas é permitido usar o ponto para casas decimais.
// The code below is to prevent the use of any value other than a number, but is allowed to use the dot for decimal places.

const inputInvalid1 = document.querySelector('[name="number1"]');
inputInvalid1.addEventListener('keypress', handleInputInvalid1KeyPress);

function handleInputInvalid1KeyPress(event) {    
    const charCode = event.which ? event.which : event.keyCode;
    const charTyped = String.fromCharCode(charCode);
    const regex = /^[0-9.]+$/;
    if (!regex.test(charTyped)) {
        event.preventDefault();
    }
};

const inputInvalid2 = document.querySelector('[name="number2"]');
inputInvalid2.addEventListener('keypress', handleInputInvalid2KeyPress);

function handleInputInvalid2KeyPress(event) {
    const charCode = event.which ? event.which : event.keyCode;
    const charTyped = String.fromCharCode(charCode);
    const regex = /^[0-9.]+$/;
    if (!regex.test(charTyped)) {
        event.preventDefault();
    }
};




