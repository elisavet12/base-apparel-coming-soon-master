// function validEmail() {
//   var mail = document.getElementById("mail").value; // where `mail` is id of your input form
//   var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

//   if (mail.match(email)) {
//     alert("Your Email : " + mail);
//   } else {
//     alert("Invalid Email !!!");
//   }
// }

function errorMessage() {
  var error = document.getElementById("error");
  if (isNaN(document.getElementById("number").value)) {
    // Changing content and color of content
    error.textContent = "Please enter a valid number";
    error.style.color = "red";
  } else {
    error.textContent = "";
  }
}
