const decrementBtnEl = document.querySelector(
  `button[data-action="decrement"]`
);
const incrementBtnEl = document.querySelector(
  `button[data-action="increment"]`
);
const counterEl = document.querySelector("#value");
let counterValue = 0;
incrementBtnEl.addEventListener("click", () => {
  counterEl.textContent = `${(counterValue += 1)}`;
});

decrementBtnEl.addEventListener("click", () => {
  counterEl.textContent = `${(counterValue -= 1)}`;
});
