const display = document.getElementById('display');
const buttonsContainer = document.querySelector('.buttons');

let currentInput = '';

// Função para criar um botão
function createButton(value) {
    const button = document.createElement('button');
    button.textContent = value;
    button.addEventListener('click', () => {
        handleButtonClick(value);
    });
    buttonsContainer.appendChild(button);
}

// Função para lidar com os cliques nos botões
function handleButtonClick(value) {
    if (value === 'C') {
        currentInput = '';
    } else if (value === '=') {
        try {
            // Utilizar uma função de avaliação mais segura
            currentInput = evaluateExpression(currentInput);
        } catch (error) {
            currentInput = 'Erro';
        }
    } else {
        currentInput += value;
    }
    display.value = currentInput;
}

// Função para avaliar a expressão de forma mais segura
function evaluateExpression(expression) {
    // Implementar um parser de expressões mais robusto aqui
    // Considerar a ordem das operações, parênteses, etc.
    // Uma opção seria utilizar uma biblioteca como a mathjs
    return eval(expression); // Substituir por uma implementação mais segura
}

// Criar os botões
const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '.', '+', '='];
buttons.forEach(buttonValue => {
    createButton(buttonValue);
});