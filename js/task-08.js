const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  } else {
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
// ------- for Vlad --------
// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onSubmit);

// function onSubmit(event) {
//   event.preventDefault();
//   const { email, password } = event.currentTarget.elements;
//   const data = {
//     email: email.value,
//     password: password.value,
//   };

//   if (data.email == "") {
//     alert("Поле Email не заполнено!");
//   } else if (data.password == "") {
//     alert("Поле Password не заполнено!");
//   } else {
//     console.log(data);
//     event.currentTarget.reset();
//   }
// }

// -------------- Var 2-------------
// function onFormSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;
//   if (email.value === "" || password.value === "") {
//     alert("Please fill in all the fields!");
//   } else {
//     const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//       console.log(name, value);
//       event.currentTarget.reset();
//     });
//   }
// }
