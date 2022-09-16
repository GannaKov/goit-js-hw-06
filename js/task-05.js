const refs = {
  inputEl: document.querySelector("#name-input"),
  spanName: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.spanName.textContent = event.currentTarget.value.trim();
  if (refs.spanName.textContent === "") {
    refs.spanName.textContent = "Anonymous";
  }
}
// -------------- 2 Var -----------

// const inputClick = refs.inputEl.addEventListener("input", (event) => {
//   refs.spanName.textContent = event.currentTarget.value;
//   if (refs.inputEl.value === "") {
//     refs.spanName.textContent = "Anonymous";
//   }
// });
// // -----------Можно так----------------
// if (event.currentTarget.value === "") {
//   refs.spanName.textContent = "Anonymous";
// }
