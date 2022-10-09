const formRef = document.querySelector(".form");
const inputDelayRef = document.querySelector("[name=delay]");
const inputStepRef = document.querySelector("[name=step]");
const inputAmountRef = document.querySelector("[name=amount]");


formRef.addEventListener("submit", createPromise);
  
 

function createPromise(position, delay) {
  function onClick(event){
    event.preventDefault();
  const delay = Number(inputDelayRef.value);
  const step = Number(inputStepRef.value);
  const amount = Number(inputAmountRef.value);
  } 
}



function createPromise(position, delay) {
  
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

