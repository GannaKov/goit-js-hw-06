function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  divBoxesEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("#controls>input"),
};

refs.buttonCreate.addEventListener("click", onButtonCreateClick);
function onButtonCreateClick() {
  const divAmount = refs.inputEl.value;
  let divElements = [];
  for (let i = 0; i < divAmount; i++) {
    const makeDiv = document.createElement("div");
    makeDiv.style.backgroundColor = getRandomHexColor();
    makeDiv.style.width = 30 + i * 10 + "px";
    makeDiv.style.height = 30 + i * 10 + "px";
    divElements.push(makeDiv);
  }
  refs.divBoxesEl.append(...divElements);
}
refs.buttonDestroy.addEventListener("click", onButtonDestroyClick);
function onButtonDestroyClick() {
  refs.divBoxesEl.innerHTML = "";
  refs.inputEl.value = "";
}
// -------- Версии ---------------------
// const divElements = refs.divBoxesEl.children;
// for (let i = divElements.length; i >= 1; i--) {
//   refs.divBoxesEl.querySelector("#boxes>div").remove();
// }
