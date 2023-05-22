const onIdCounter = document.querySelector("#counter");
const onIncrement = document.querySelector('button[data-action = "increment"]');
const onDecrement = document.querySelector('button[data-action = "decrement"]');
const onIdButton = document.querySelector("#value");

let conterValue = 0;

onDecrement.addEventListener("click", () => {
    if (onDecrement.addEventListener) {
        conterValue -= 1;
        onIdButton.textContent = conterValue;
    }
});

onIncrement.addEventListener("click", () => {
  if (onIncrement.addEventListener) {
    conterValue += 1;
    onIdButton.textContent = conterValue;
  }
    
    

});
