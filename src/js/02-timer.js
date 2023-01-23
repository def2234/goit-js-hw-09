import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

buttonEl = document.querySelector('button[data-start]');
inputEl = document.querySelector('#datetime-picker');

spanElDays = document.querySelector('[data-days]');
spanElHours = document.querySelector('[data-hours]');
spanElMinutes = document.querySelector('[data-minutes]');
spanElSeconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chackedDate(selectedDates);
  },
};

flatpickr(inputEl, options);

buttonEl.disabled = true;

buttonEl.addEventListener('click', onBtnStartTimer);
let intervalId = null;
let isActive = false;

function onBtnStartTimer() {
  if (isActive) {
    return;
  }
  isActive = true;
  const selectDate = inputEl.value;
  const expectedDate = new Date(selectDate);

  intervalId = setInterval(() => {
    const currentDate = Date.now();
    const differenceTime = expectedDate - currentDate;
    const { days, hours, minutes, seconds } = convertMs(differenceTime);

    spanElDays.textContent = `${days}`;
    spanElHours.textContent = `${hours}`;
    spanElMinutes.textContent = `${minutes}`;
    spanElSeconds.textContent = `${seconds}`;

    if (differenceTime <= 1000) {
      Notiflix.Notify.success('Time is over');
      clearInterval(intervalId);
      isActive = false;
    }
  }, 1000);
}

function chackedDate(selectedDates) {
  const currentDate = Date.now();

  if (selectedDates[0] < currentDate) {
    Notiflix.Notify.failure('Please choose a date in the future');
    buttonEl.disabled = true;
  } else {
    buttonEl.disabled = false;
  }

  console.log(selectedDates[0]);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
