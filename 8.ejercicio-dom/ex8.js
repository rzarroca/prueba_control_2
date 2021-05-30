'use strict';

const chrono = document.querySelector('.chrono');
const counter = document.createElement('div');
const setBtn = document.createElement('button');
const stopBtn = document.createElement('button');
const resetBtn = document.createElement('button');
let time = 0;
let timer = false;

counter.innerText = '00:00:00';
setBtn.innerText = 'Set';
stopBtn.innerText = 'Stop';
resetBtn.innerText = 'Reset';

chrono.appendChild(counter);
chrono.appendChild(setBtn);
chrono.appendChild(stopBtn);
chrono.appendChild(resetBtn);

const interval = setInterval(() => {
    if (timer === true) {
        const hours = Math.floor(time / 3600);
        const mins = Math.floor((time % 3600) / 60);
        const secs = Math.floor((time % 3600) % 60);
        counter.innerText = `${addZeros(hours)}:${addZeros(mins)}:${addZeros(
            secs
        )}`;
        if (time === 0) {
            clearInterval(interval);
            timer = false;
            alert('Time!');
        }
        time--;
    }
}, 1000);

setBtn.addEventListener('click', () => {
    if (time !== 0) return;
    let hours = prompt('Choose hours', '00');
    hours = Number(hours);
    Number.isNaN(hours) === true ? (hours = 0) : (hours = Math.abs(hours));
    let mins = prompt('Choose minutes', '00');
    mins = Number(mins);
    Number.isNaN(mins) === true ? (mins = 0) : (mins = Math.abs(mins));
    let secs = prompt('Choose seconds', '00');
    secs = Number(secs);
    Number.isNaN(secs) === true ? (secs = 0) : (secs = Math.abs(secs));
    counter.innerText = `${addZeros(hours)}:${addZeros(mins)}:${addZeros(
        secs
    )}`;
    time = hours * 3600 + mins * 60 + secs;
    timer = true;
});

stopBtn.addEventListener('click', (e) => {
    if (time === 0) return;
    if (e.target.textContent === 'Stop') {
        timer = false;
        e.target.textContent = 'Continue';
    } else {
        timer = true;
        e.target.textContent = 'Stop';
    }
});

resetBtn.addEventListener('click', () => {
    timer = false;
    time = 0;
    counter.innerText = '00:00:00';
    stopBtn.innerText = 'Stop';
});

function addZeros(time) {
    if (time < 10) {
        return `0` + time.toString();
    }
    return time.toString();
}
