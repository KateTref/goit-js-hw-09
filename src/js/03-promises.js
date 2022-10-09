import { Notify } from 'notiflix/build/notiflix-notify-aio'; 

const formRef = document.querySelector(".form");
const inputDelayRef = document.querySelector("[name=delay]");
const inputStepRef = document.querySelector("[name=step]");
const inputAmountRef = document.querySelector("[name=amount]");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  let numOfPosition = 0;
  let delay = Number(inputDelayRef.value);
  const step = Number(inputStepRef.value);
  const amount = Number(inputAmountRef.value);
  for (let i = 0; i < amount; i += 1){
    numOfPosition += 1;
    createPromise(numOfPosition, delay)
      .then(({ position, delay }) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {position: 'center-center'}))
      .catch(({ position, delay }) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {position: 'center-center'}))
      delay += step;
  }
});
  
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
}

