function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button [data-destroy]"),
  divBoxesEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("#controls>input"),
};
refs.buttonCreate.addEventListener("click", onbuttonCreateClick);
function onbuttonCreateClick(event) {
  let divElements = [];
  const divAmount = refs.inputEl.value;
  for (let i = 1; i <= divAmount; i++) {
    divElements.push(document.createElement("div"));
  }
  refs.divBoxesEl.append(...divElements);
}
