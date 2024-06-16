let resultElement = document.getElementById('result');

function appendValue(value) {
    resultElement.innerText += value;
}

function deleteLast() {
    resultElement.innerText = resultElement.innerText.slice(0, -1);
}

function resetCalculator() {
    resultElement.innerText = '';
}

function calculate() {
    try {
        resultElement.innerText = eval(resultElement.innerText.replace('x', '*'));
    } catch {
        resultElement.innerText = 'Error';
    }
}
