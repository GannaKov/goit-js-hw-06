const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
const makeItemList = (arr) => {
  return arr.map((item) => {
    const listItemsEl = document.createElement("li");
    listItemsEl.textContent = item;
    listItemsEl.classList.add("item");
    return listItemsEl;
  });
};
const elementsList = makeItemList(ingredients);
listEl.append(...elementsList);
console.log(listEl.children);
//------------ Var2 ----------
// const elementsList1 = ingredients.map((item) => {
//   const listItemsEl1 = document.createElement("li");
//   listItemsEl1.textContent = item;
//   listItemsEl1.classList.add("item");
//   return listItemsEl1;
// });
// listEl.append(...elementsList1);
// console.log(listEl.children);
//---------------------------------- old style )))

// const elementsList2 = [];
// for (let i = 0; i < ingredients.length; i++) {
//   const listItemsEl2 = document.createElement("li");
//   listItemsEl2.textContent = ingredients[i];
//   listItemsEl2.classList.add("item");
//   elementsList2.push(listItemEl);
// }
// listEl.append(...elementsList2);
