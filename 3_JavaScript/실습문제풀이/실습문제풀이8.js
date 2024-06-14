/*
    사용자가 입력을 했을 때 
    해당 조건이 틀릴 경우 빨간색으로 표시
               맞는 경우 초록색 표시와 함께 OK!
*/
const userId = document.querySelector("#userId");
const userIdSpan = document.querySelector("#userIdSpan");

userId.addEventListener("input", function (e) {
  // 첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(userId.value);

  if (check) {
    userIdSpan.style.color = "green";
    userIdSpan.innerHTML = "OK!";
    //e.target.nextElementSibling.style.color = "green";
    //e.target.nextElementSibling.innerHTML = "OK!";
  } else {
    userIdSpan.style.color = "red";
    userIdSpan.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
    // e.target.nextElementSibling.style.color = "red";
    // e.target.nextElementSibling.innerHTML =
    //  "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
  }
});

// 영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.
// [!-~]{여기는 여러분들이 채워주세요!}

// 위의 비밀번호와 일치하게 입력하시오.
// 정규표현식 필요 X, 위에 입력한 비밀번호 값이랑 비교!

// 한글로만 이루어져야되며 2글자 이상으로 입력하시오.
// [가-힣]{여기도 여러분들이 채워주세요!}

// 이메일 형식에 맞춰서 입력하시오.
// abc123!@gmail.com
// -> (영어나숫자여러문자상관없이 길이도 상관없이 : +)@(앞이랑 마찬가지)
