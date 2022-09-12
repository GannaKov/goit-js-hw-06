const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
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
