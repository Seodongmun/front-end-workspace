//================================================
// 1. 태그로 가져오기 (getElementsBy...)
function btn1() {
  console.log(document.head);
  console.log(document.body);

  // 동일한 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByTagName("div");
  console.log(div);
  console.log(div[0]); // <div>Hello, World!</div>
  console.log(div[1]); // <div>Hello, JavaScript!</div>
}

//================================================
// 2. id로 가져오기 (getElementBy...)
function btn2() {
  // 고유 아이디는 하나이므로 하나만 출력
  const div = document.getElementById("testId");
  console.log(div);
}

//================================================
// 3. class로 가져오기 (getElementsBy...)
function btn3() {
  // 동일한 class 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByClassName("testClass");
  console.log(div);
}
// 4. name으로 가져오기 (getElementsBy...)
function btn4() {
  const div = document.getElementsByName("testName");
  console.log(div);
}

//================================================
// 5. 선택자로 가져오기 (querySelector)
function btn5() {
  let div = document.querySelector("#testId2");
  console.log(div);
  div = document.querySelectorAll("div");
  console.log(div);
  console.log(div[0]);
}

//================================================
// 6. HTML 내용 조작하기 (querySelectorAll)
function btn6() {
  const div = document.querySelectorAll(".testClass");
  div[0].textContent = "<span>안녕하세요</span>";
  div[1].innerHTML = "<span>안녕하세요</span>";
}

//================================================
// 7. 속성 조작하기 (querySelector)
function btn7() {
  const div = document.querySelector("#testId");
  div.setAttribute("data-test", "테스트");
  div.setAttribute("data-test", "테스트2");
  console.log(div.getAttribute("data-test"));
}

//================================================
// 8. 스타일 조작하기 (querySelector)
function btn8() {
  const div = document.querySelector("#testId");
  div.style.color = "orange";
  div.style.backgroundColor = "yellow";
}
const div = document.querySelector("#testId2");

//================================================
// 9. classList(add, remove, contains, toggle)
function btn9() {
  div.classList.add("black");
}
function btn10() {
  div.classList.remove("black");
}
function btn11() {
  const check = div.classList.contains("black");
  if (check) {
    div.classList.remove("black");
  } else {
    div.classList.add("black");
  }
}
function btn12() {
  div.classList.toggle("black");
}

//================================================
// 10. 문서 객체 추가하기 (appendChild)
function btn13() {
  const div = document.querySelector("#testId3");
  // <p>Lorem Ipsum</p>
  const p = document.createElement("p");
  p.innerHTML = "Lorem Ipsum";
  // div 에 만든 p태그 추가
  div.appendChild(p);
}

//================================================
// 11. 문서 객체 삭제하기 (removeChild)
function btn14() {
  const div = document.querySelector("#testId3"); // === p.parentNode
  const p = document.querySelector("p");
  //div.removeChild(p);
  p.parentNode.removeChild(p);
}
