/*================================================*/

/*
    사용자가 입력을 했을 때
    해당 조건이 틀릴 경우
    해당 조건이 맞는경우 
    초록색 표시와 함께 "OK!"

*/

const idP = document.querySelector("#idP");
const regExp = /^[a-zA-z][a-zA-Z0-9]{3,11}$/;

id.addEventListener("input", function () {
  if (regExp.test(id.value)) {
    idP.innerHTML = `OK!`;
    idP.style.color = "green";
  } else {
    idP.style.color = "red";
    idP.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자,숫자 포함하여 총 4~12자로 입력하시오";
  }
});

/*================================================*/

const passwordP = document.querySelector("#passwordP");
const regExp1 = /^[!-~]{8,15}$/;

password.addEventListener("input", function () {
  if (regExp1.test(password.value)) {
    passwordP.innerHTML = `OK!`;
    passwordP.style.color = "green";
  } else {
    passwordP.style.color = "red";
    passwordP.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
  }
});

// 정규표현식 X, 위에 입력한 비밀번호 값이랑 비교!

/*================================================*/

passwordCheck.addEventListener("input", function () {
  if (password.value === passwordCheck.value) {
    passwordCheckP.innerHTML = `OK!`;
    passwordCheckP.style.color = "green";
  } else {
    passwordCheckP.style.color = "red";
    passwordCheckP.innerHTML = "위의 비밀번호와 일치하게 입력하시오";
  }
});

/*================================================*/

const name = document.querySelector("#name");
const nameP = document.querySelector("#nameP");
let regExp3 = /^[가-힣]{2,}$/;

name.addEventListener("input", function () {
  if (regExp3.test(name.value)) {
    nameP.innerHTML = `OK!`;
    nameP.style.color = "green";
  } else {
    nameP.style.color = "red";
    nameP.innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하시오";
  }
});

/*================================================*/

const email = document.querySelector("#email");
const emailP = document.querySelector("#emailP");
let regExp4 = /^[!-~]+@[!-~]+$/;

email.addEventListener("input", function () {
  if (regExp4.test(email.value)) {
    emailP.innerHTML = `OK!`;
    emailP.style.color = "green";
  } else {
    emailP.style.color = "red";
    emailP.innerHTML = "이메일 형식에 맞춰서 입력하시오";
  }
});

const member = document.querySelector("#member");
const out = document.querySelector("#out");

// (영어나 숫자 여러문자 상관없이 길이도 상관없이 : +)@(앞이랑 마찬가지)
/*================================================*/
