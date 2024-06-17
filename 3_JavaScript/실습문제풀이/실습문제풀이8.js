const userId = document.querySelector("#userId");
const userIdSpan = document.querySelector("#userIdSpan");
const userPwd = document.querySelector("#userPwd");
const userPwdSpan = document.querySelector("#userPwdSpan");
const userPwdCheck = document.querySelector("#userPwdCheck");
const userPwdCheckSpan = document.querySelector("#userPwdCheckSpan");
const userName = document.querySelector("#userName");
const userNameSpan = document.querySelector("#userNameSpan");
const userEmail = document.querySelector("#userEmail");
const userEmailSpan = document.querySelector("#userEmailSpan");

userId.addEventListener("input", function () {
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(userId.value);
  if (check) {
    userIdSpan.style.color = "green";
    userIdSpan.innerHTML = "OK";
  } else {
    userIdSpan.style.color = "red";
    userIdSpan.innerHTML = "...";
  }
});

userPwd.addEventListener("input", function () {
  const regExp = /^[!-~]{7,14}$/;
  const check = regExp.test(userPwd.value);
  if (check) {
    userPwdSpan.style.color = "green";
    userPwdSpan.innerHTML = "OK";
  } else {
    userPwdSpan.style.color = "red";
    userPwdSpan.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
  }
});

userPwdCheck.addEventListener("input", function () {
  if (userPwd.value === userPwdCheck.value) {
    userPwdCheckSpan.style.color = "green";
    userPwdCheckSpan.innerHTML = "OK";
  } else {
    userPwdCheckSpan.style.color = "red";
    userPwdCheckSpan.innerHTML = "위의 비밀번호와 같게 입력하세요";
  }
});

userName.addEventListener("input", function () {
  const regExp = /^[가-힣]{2,}$/;
  const check = regExp.test(userName.value);
  if (check) {
    userNameSpan.style.color = "green";
    userNameSpan.innerHTML = "OK";
  } else {
    userNameSpan.style.color = "red";
    userNameSpan.innerHTML = "한글로 최소 2글자 이상 입력하세요";
  }
});

userEmail.addEventListener("input", function () {
  const regExp = /^[!-~]+@[!-~]+$/;
  const check = regExp.test(userEmail.value);
  if (check) {
    userEmailSpan.style.color = "green";
    userEmailSpan.innerHTML = "OK";
  } else {
    userEmailSpan.style.color = "red";
    userEmailSpan.innerHTML = "이메일 형식에 맞춰서 입력하세요";
  }
});
