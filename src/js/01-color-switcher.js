const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

btnStartEl.addEventListener('click', onClickStart);
btnStopEl.addEventListener('click', onClickStop);

let intervalId = null;
const isActive = false;
btnStopEl.disabled = true;

function onClickStart() {
  if (isActive === true) {
    return;
  }
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    btnStartEl.disabled = true;
    btnStopEl.disabled = false;
  }, 1000);
}

function onClickStop() {
  clearInterval(intervalId);
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
