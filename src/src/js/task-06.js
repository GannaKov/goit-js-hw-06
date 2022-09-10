const inputEl = document.querySelector("#validation-input");
const validationCondition = inputEl.getAttribute("data-length");
inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (inputEl.value.length == validationCondition) {
    inputEl.classList.contains("invalid")
      ? inputEl.classList.replace("invalid", "valid")
      : inputEl.classList.add("valid");
  } else {
    inputEl.classList.contains("valid")
      ? inputEl.classList.replace("valid", "invalid")
      : inputEl.classList.add("invalid");
  }
}
