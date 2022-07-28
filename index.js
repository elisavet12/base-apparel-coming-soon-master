let errorActive = document.querySelector("img.error-img-active");
let warning = document.querySelector("p.error");
let button = document.querySelector(".submit");
let input = document.querySelector("input");
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener("click", (event) => {
  if (input.value.match(regex)) {
    errorIcon.style.display = "none";

    warning.innerText = "";
  } else {
    errorActive.style.display = "block";
    input.style.outline = "hsl(0, 93%, 68%) solid 1px";
    warning.style.display = "block";
  }
});
input.addEventListener("keydown", (keyboardEvent) => {
  if (keyboardEvent.key === "Enter") {
    button.click();
  }
});
