let errorIcon = document.querySelector(".error-img");
let warning = document.querySelector("p.error");
let button = document.querySelector(".submit");
let input = document.querySelector("input");
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener("click", (event) => {
  if (input.value.match(regex)) {
    errorIcon.style.display = "none";
    warning.innerText = "";
    input.style.outline = "yellowgreen solid 2px";
  } else {
    errorIcon.style.display = "block";
    // warning.innerText = "Please provide a valid email"; //
    // document.getElementsByClassName.style.display = "block";//
    input.style.outline = "red solid 2px";
    warning.style.display = "block";
  }
});
input.addEventListener("keydown", (keyboardEvent) => {
  if (keyboardEvent.key === "Enter") {
    button.click();
  }
});
