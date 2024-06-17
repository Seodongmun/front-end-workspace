const id = document.querySelector("#id");
const idP = document.querySelector("#idP");
const password = document.querySelector("#password");
const passwordP = document.querySelector("#id");
const passwordCheck = document.querySelector("#passwordCheck");
const passwordCheckP = document.querySelector("#passwordCheckP");
const name = document.querySelector("#name");
const nameP = document.querySelector("#nameP");
const email = document.querySelector("#email");
const emailP = document.querySelector("#emailP");

id.addEventListener("input", function () {
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(id.value);
  if (check) {
    idP.style.color = "green";
    idP.ineerHTML = "OK";
  } else {
    idP.style.color = "red";
    idP.ineerHTML = "...";
  }
});
