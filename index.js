// function validEmail() {
//   var mail = document.getElementById("mail").value; // where `mail` is id of your input form
//   var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

//   if (mail.match(email)) {
//     alert("Your Email : " + mail);
//   } else {
//     alert("Invalid Email !!!");
//   }
// }

// function errorMessage() {
//   var error = document.getElementById("error");
//   if (isNaN(document.getElementById("number").value)) {
//     // Changing content and color of content
//     error.textContent = "Please provide a valid email";
//     error.style.color = "red";
//   } else {
//     error.textContent = "";
//   }
// }

let errorIcon = document.querySelector(".error-img");
let warning = document.querySelector(".error");
let button = document.querySelector(".submit");
let input = document.querySelector("input");
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener("click", (event) => {
  if (input.value.match(regex)) {
    errorIcon.style.display = "none";
    warning.innerText = "";
    input.value = "";
    input.style.outline = "yellowgreen solid 2px";
  } else {
    errorIcon.style.display = "block";
    warning.innerText = "Please provide a valid email";
    input.style.outline = "red solid 2px";
  }
});
input.addEventListener("keydown", (keyboardEvent) => {
  if (keyboardEvent.key === "Enter") {
    button.click();
  }
});
