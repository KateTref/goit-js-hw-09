import { Notify } from 'notiflix/build/notiflix-notify-aio'; 

const formRef = document.querySelector(".form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  let numOfPosition = 0;
  let delay = Number(event.currentTarget.delay.value);
  const step = Number(event.currentTarget.step.value);
  const amount = Number(event.currentTarget.amount.value);
  if (delay < 0 || step < 0 || amount < 0) {
    alert("You can't use negative numbers!");
    return
  };
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

