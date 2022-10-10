import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio'; 

const inputRef = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]");
const timeDays = document.querySelector("[data-days]");
const timeHours = document.querySelector("[data-hours]");
const timeMinutes = document.querySelector("[data-minutes]");
const timeSeconds = document.querySelector("[data-seconds]");
btnStart.setAttribute("disabled", '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.now() > selectedDates[0].getTime()) {
      Notify.failure("Please choose a date in the future!", {
        position: 'center-center',
        width: '350px',
        fontSize: '18px',
        clickToClose: true,
        timeout: 5000,
      })
      return;
    }
    btnStart.removeAttribute('disabled');
    btnStart.addEventListener("click", onClickStartTimer);
    
    function onClickStartTimer() {
     options.intervalId = setInterval(() => {
     const currentTime = Date.now();
     const selectedTime = selectedDates[0].getTime();
     const deltaTime = selectedTime - currentTime;
  
       if (deltaTime <= 500) {
         clearInterval(intervalId);
       }  
        const timer = convertMs(deltaTime);
        timeDays.textContent = addLeadingZero(timer.days); 
        timeHours.textContent = addLeadingZero(timer.hours);
        timeMinutes.textContent = addLeadingZero(timer.minutes);
       timeSeconds.textContent = addLeadingZero(timer.seconds);
     }, 1000); 
      btnStart.setAttribute("disabled", '');
      inputRef.setAttribute("disabled", "true");
    }
  },
};

flatpickr('input#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}