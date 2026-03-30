
function createCounterLogic(minLimit, maxLimit) {
  let count = 0;

  return {
    increment: function () {
      if (count < maxLimit) {
        count++;
        return { value: count, message: "" };
      }
      return { value: count, message: `Maximum limit of ${maxLimit} reached.` };
    },
    decrement: function () {
      if (count > minLimit) {
        count--;
        return { value: count, message: "" };
      }
      return { value: count, message: `Minimum limit of ${minLimit} reached.` };
    },
    reset: function () { 
      count = 0;
      return { value: count, message: "" }; 
    },
    getCount: function () {
      return count;
    },
  };
}


const myCounter = createCounterLogic(0, 10);


const displayEl = document.getElementById("display");
const warningEl = document.getElementById("warning");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const btnReset = document.getElementById("btn-reset"); 


function updateDOM(resultObj) {
  displayEl.textContent = resultObj.value;
  warningEl.textContent = resultObj.message;
}


btnIncrement.addEventListener("click", function () {
  const result = myCounter.increment();
  updateDOM(result);
});

btnDecrement.addEventListener("click", function () {
  const result = myCounter.decrement();
  updateDOM(result);
});

btnReset.addEventListener("click", function () {
  const result = myCounter.reset();
  updateDOM(result);
});


updateDOM({ value: myCounter.getCount(), message: "" });