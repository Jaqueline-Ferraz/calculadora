// Esta função insere um valor no elemento com o id 'output'.
function insert(value) {
    var output = document.querySelector('#output');
    var screenOutput = output.innerHTML;

    if (!isNaN(value)) {
        screenOutput += value;

        screenOutput = screenOutput.replace(/\./g, '');
        screenOutput = screenOutput.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        output.innerHTML = screenOutput;
    }
}

// As funções 'add', 'subtract', 'multiply' e 'divide' adicionam operadores matemáticos ao elemento de saída.

// Esta função adiciona o operador de adição.
function add() {
    var output = document.querySelector('#output');
    var screenOutput = output.innerHTML;

    if (screenOutput.includes('+')) {
        return;
    }

    output.innerHTML += ' + ';
}

function subtract() {
    var output = document.querySelector('#output');
    var screenOutput = output.innerHTML;

    if (screenOutput.includes('-')) {
        return;
    }

    output.innerHTML += ' - ';
}

function multiply() {
    var output = document.querySelector('#output');
    var screenOutput = output.innerHTML;

    if (screenOutput.includes('*')) {
        return;
    }

    output.innerHTML += ' * ';
}

function divide() {
    var output = document.querySelector('#output');
    var screenOutput = output.innerHTML;

    if (screenOutput.includes('/')) {
        return;
    }

    output.innerHTML += ' / ';
}

// Esta função remove os separadores de milhares de um valor.
function removeSeparators(value) {
    return value.replace(/\./g, '');
}

// Esta função formata um valor com separadores de milhares.
function formatSeparators(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Esta função calcula a expressão matemática presente no elemento de saída.
function calculate() {
    var output = document.querySelector('#output');
    var expression = output.innerHTML;

    var withoutSeparators = removeSeparators(expression);

    try {
        var result = eval(withoutSeparators);

        var formattedResult = formatSeparators(result);

        output.innerHTML = formattedResult;
    } catch (error) {
        output.innerHTML = "Erro";
    }
}

// Esta função limpa todo o conteúdo do elemento de saída.
function clean() {
    var output = document.querySelector('#output');
    output.innerHTML = '';
}

// Esta função apaga o último caractere do elemento de saída.
function del() {
    var output = document.querySelector('#output');
    var screenOutput = output.innerHTML;

    if (screenOutput.length > 0) {

        var newOutput = screenOutput.slice(0, -1);
        output.innerHTML = newOutput;
    }
}

// Esta função remove a última operação da expressão no elemento de saída.
function clearEntry() {
    var output = document.querySelector('#output');
    var screenOutput = output.innerHTML;

    if (screenOutput.length > 0) {

        var regex = /[+\-*/]([^+\-*/]+)$/;
        var match = screenOutput.match(regex);

        if (match) {
            var lastOperation = match[0];
            var newOutput = screenOutput.replace(lastOperation, '');
            output.innerHTML = newOutput;
        }
    }
}
