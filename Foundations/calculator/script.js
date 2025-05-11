const display = document.querySelector('.calc-text');
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
    buttons.addEventListener('click', handleButtonClick);
}

createButtons();

let first = '';
let operator = '';
let second = '';
let justCalc = false;



function handleButtonClick(event) {
    const value = event.target.value;

    if (event.target.tagName !== 'BUTTON') return;

    if (value === 'AC') {
        clear();
    }
    else if (value === '←') {
        backspace();
    }
    else if (value === '=') {
        calc();
    }
    else if (['+', '-', '*', '/', '^'].includes(value)) {
        setop(value);
    }
    else {
        updateInput(value);
    }
}

function clear() {
    first = '';
    operator = '';
    second = '';
    display.textContent = '';
}

function updateInput(value) {
    if(justCalc) {
        clear();
        justCalc = false;
    }
    if (!operator) {
        first = (parseFloat(first) === 0)? value : first + value
    }
    else {
        second = (parseFloat(second) === 0)? value : second + value
    }
    display.textContent = first + " " + operator + " " + second;
    scrollDisplayRight();
}

function setop(value) {
    if (!first) {
        return;
    }
    justCalc = false;
    operator = value;
    display.textContent = first + " " + operator + " " + second;
    scrollDisplayRight();
}

function calc() {
    if(!second) {
        return;
    }

    let result;

    switch(operator) {
        case '+':
            result = parseFloat(first) + parseFloat(second);
            break;
        case '-':
            result = parseFloat(first) - parseFloat(second);
            break;
        case '*':
            result = parseFloat(first) * parseFloat(second);
            break;
        case '/':
            if (parseFloat(second) === 0) {
                first = '';
                second = '';
                operator = '';
                let flicker = true;
                const flickerInterval = setInterval(() => {
                    display.textContent = flicker ? '💢💢' : '';
                    flicker = !flicker;
                }, 200); // toggles every 200ms

                setTimeout(() => {
                    clearInterval(flickerInterval);
                    clear(); // reset values and display
                }, 2000); // stop after 2 seconds
                return;
            } else {
                result = parseFloat(first) / parseFloat(second);
            }
            break;
        case '^':
            result = Math.pow(parseFloat(first), parseFloat(second));
            break;
        default:
            return;
    }
    first = result;
    second = '';
    operator = '';
    display.textContent = first;
    scrollDisplayRight();
    justCalc = true;
}

function backspace() {
    if(second) {
        second = second.slice(0, -1);
    } else if(operator) {
        operator = '';
    } else if(first) {
        first = first.slice(0, -1);
    } else {
        return
    }
    display.textContent = first + " " + operator + " " + second;
    scrollDisplayRight();
}

function scrollDisplayRight() {
    display.parentElement.scrollLeft = display.parentElement.scrollWidth;
}
