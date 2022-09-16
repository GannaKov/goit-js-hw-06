const categoriesListEl = document.querySelectorAll(".item");
console.log(`Number of categories:${categoriesListEl.length}`);

categoriesListEl.forEach((elem) => {
  console.log("Category:", elem.querySelector("h2").textContent);
  console.log("Elements:", elem.querySelectorAll("li").length);
});
// --------------- Var --------------
// const categoriesEl = document.querySelector("#categories");

// const categoriesListEl = categoriesEl.querySelectorAll("ul");

// console.log(`Number of categories:${categoriesListEl.length}`);
// const categoriesItemTitleArr = categoriesEl.querySelectorAll("h2");
// for (let i = 0; i < categoriesListEl.length; i++) {
//   const categoriesItemTitle = categoriesItemTitleArr[i].textContent;

//   const categoriesQuantityEl =
//     categoriesListEl[i].querySelectorAll("li").length;
//   console.log(`Category:${categoriesItemTitle}`);
//   console.log(`Elements:${categoriesQuantityEl}`);
// }
// ---------------Var2 запасной--------------
// const categoriesListEl1 = categoriesEl.children; //масс детей главной ul

// console.log(categoriesListEl1);
// // console.log(`Number of categories:${categoriesListEl1.length}`);
// for (let i = 0; i < categoriesListEl.length; i++) {
//   const categoriesItemTitle1 =
//     categoriesListEl1[i].querySelector("h2").textContent;

//   const categoriesQuantityEl1 =
//     categoriesListEl1[i].querySelectorAll("li").length;
//   console.log(`Category:${categoriesItemTitle1}`);
//   console.log(`Elements:${categoriesQuantityEl1}`);
// }
// -------------------
