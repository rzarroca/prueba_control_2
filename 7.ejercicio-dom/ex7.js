'use strict';

const container = document.querySelector('.container');
const button = document.querySelector('button');

function createDiv() {
    const div = document.createElement('div');
    div.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(
        255
    )},${getRandomInt(255)})`;
    container.appendChild(div);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 16; i++) {
    createDiv();
}

button.addEventListener('click', () => {
    createDiv();
});

setInterval(() => {
    const divs = document.querySelectorAll('.container div');
    container.innerHTML = '';
    for (let i = 0; i < divs.length; i++) {
        createDiv();
    }
}, 1000);
