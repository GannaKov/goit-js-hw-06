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
  for (let i = 0; i < divAmount; i++) {
    // divElements.push(document.createElement("div"));
    // divElements.push();
    // console.log(divElements);
    const makeDiv = document.createElement("div");
    makeDiv.style.backgroundColor = getRandomHexColor();
    makeDiv.style.width = 30 + i * 10 + "px";
    makeDiv.style.height = 30 + i * 10 + "px";
    divElements.push(makeDiv);
  }
  refs.divBoxesEl.append(...divElements);
}
