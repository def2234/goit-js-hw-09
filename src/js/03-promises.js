import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const delayEl = document.forms[0].delay;
const stepEl = document.forms[0].step;
const amountEl = document.forms[0].amount;

const submitEl = document.querySelector('button[type=submit]');
submitEl.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();
  const arrPromises = [];
  let delay = delayEl.value;
  const step = stepEl.value;
  const amount = amountEl.value;

  for (let i = 0; i < amount; i += 1) {
    let position = i + 1;

    delay = Number(delay) + i * step;

    arrPromises.push(
      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        })
    );
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
