function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  bodyEl: document.querySelector("body"),
  spanColorEl: document.querySelector(".color"),
  buttonCangeColor: document.querySelector(".change-color"),
};
refs.buttonCangeColor.addEventListener("click", onButtonClick);

function onButtonClick() {
  const colorBody = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = colorBody;
  refs.spanColorEl.textContent = colorBody;
}
