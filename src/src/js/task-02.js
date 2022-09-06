const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
const elementsList1 = ingredients.map((item) => {
  const listItemEl1 = document.createElement("li");
  listItemEl1.textContent = item;
  listItemEl1.classList.add("item");
  return listItemEl1;
});
listEl.append(...elementsList1);
console.log(listEl.children);
//---------------------------------- old style )))

// const elementsList = [];
// for (let i = 0; i < ingredients.length; i++) {
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = ingredients[i];
//   listItemEl.classList.add("item");
//   elementsList.push(listItemEl);
// }
// listEl.append(...elementsList);
