const inputRangeEl = document.getElementById("font-size-control");

const spanText = document.getElementById("text");
inputRangeEl.addEventListener("input", onInputChange);
inputRangeEl.value = 16;
function onInputChange(event) {
  spanText.style.fontSize = event.currentTarget.value + "px";
}
