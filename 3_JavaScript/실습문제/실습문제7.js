/*

클릭하면 이미지 3개가 랜덤으로 바뀌고


클릭(09_이벤트)30

스타일 조작(08_DOM)64

랜덤(07_내장객체)18

*/

// 이미지 변환
function toggleImg() {
  let img = document.getElementById("Click");
  img.src = "../../resourses/family2.jpg";
  console.log(img);
}

// 리셋 버튼
function resetButton() {
  const reset = document.getElementById("#Restart");
  for (let i = 0; reset < 0; ) {}
  console.log(reset);
}

// 이미지 랜덤 변환
/*
switch (result) {
  case result < 2:
    toggleImg;
    console.log("이미지 변환");
  case imgChange:
    break;
    alert("Congratulation!! Press restart to play again~!!");
}*/
// 랜덤값 생성
const result = Math.floor(Math.random() * 10 + 1);
console.log(result);

/*======================================*/

//버튼의 카운트가 올라간다

//내용조작(08_DOM)30
function btn6() {
  const div = document.querySelectorAll(".testClass");
  div[0].textContent = "<span>안녕하세요</span>";
  div[1].innerHTML = "<span>안녕하세요</span>";
  console.log(div);
}

/*======================================/*

이미지 3개가 같은 값이 되면

카운트가 멈추고

내용조작(08_DOM)30

/*======================================/*

리스타트를 하면 재시작 된다

*/
