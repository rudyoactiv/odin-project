const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');

const keys = [
    {text: 'AC', value: 'AC', color: 'pink'},
    { text: '00', value: '00' },
    {text: '^', value: '^', color: 'lightblue'},
    { text: '/', value: '/', color: 'lightblue' },
    { text: '7', value: 7 },
    { text: '8', value: 8 },
    { text: '9', value: 9 },
    { text: '*', value: '*', color: 'lightblue' },
    { text: '4', value: 4 },
    { text: '5', value: 5 },
    { text: '6', value: 6 },
    { text: '-' , value: '-', color: 'lightblue' },
    { text: '1', value: 1 },
    { text: '2', value: 2 },
    { text: '3', value: 3 },
    { text: '+', value: '+' , color: 'lightblue' },
    { text: '.', value: '.' },
    { text: '0', value: 0 },
    {text: '←', value: '←', color: 'lightblue'},
    { text: '=', value: '=', color: 'lightblue' },
]

function createButtons() {
    keys.forEach(key => {
        const button = document.createElement('button');
        button.textContent = key.text;
        button.value = key.value;
        button.classList.add('button');
        if (key.color) {
            button.style.backgroundColor = key.color;
        }
        buttons.appendChild(button);
    });
}

createButtons();