
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const DELAY = 1000;
let intervalId = null;

btnStart.addEventListener('click', onChangeBgColor);
btnStop.addEventListener('click', offChangeBgColor);

btnStop.setAttribute("disabled", "");

function onChangeBgColor() {
    btnStop.removeAttribute("disabled");
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, DELAY);
    btnStart.setAttribute("disabled", "");
}

function offChangeBgColor() {
    clearInterval(intervalId);
    btnStop.setAttribute("disabled", "");
    btnStart.removeAttribute("disabled");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

