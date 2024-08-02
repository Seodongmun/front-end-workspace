// window.addEventListener("DOMContentLoaded", function () {
//   // 1. 태그 선택자
//   // 자바스크립트 방식
//$(document).ready(function () {
$(function () {
  const pList = document.querySelectorAll("p");
  for (p of pList) {
    p.style.color = "white";
    p.style.backgroundColor = "tomato";
  }
  // 제이쿼리 방식
  $("h5").css("color", "skyblue").css("background-color", "yellow");

  // 2. 아이디 선택자
  // 자바스크립트 방식 -> id가 id1인 글씨 색깔(color) 변경 (색상 자유)
  document.querySelector("#id1");
  id1.style.color = "skyblue";
  id1.style.backgroundColor = "black";

  // 제이쿼리 방식 -> id가 id2인 글씨 색깔 변경
  $("#id2").css("color", "yellow").css("background-color", "black");

  // 3. 클래스 선택자
  // 제이쿼리 방식 -> class가 item인 글씨 색깔 변경 및 배경 색깔 변경
  $(".item")
    .css("background-color", "black")
    .css({ color: "white", "background-color": "indigo" })
    .css("width", "100px")
    .css("height", "100px")
    .css("align-items", " center")
    .css("justify-content", "center");

  $("div > ul").css("color", "green");
  $("ul > .ch").css("background-color", "lime");
  $("li > h3").css("color", "indianred");
  $("h3[class = ch]").css("color", "violet");
  $("div h3").css("background-color", "khaki");

  // 5. 속성선택자
  // 태그[속성] : 해당 태그의 속성을 가지는 요소
  $("#div1 input[class]").css("background-color", "turquoise");
  // 태그[속성 = 값] : 특정 속성과 값이 일치하는 요소
  $("#div1 input[type=text]").val("change value");
  // 태그[속성*=값] : 속성의 값을 포함하는 요소
  $("#div1 input[class*= st3]").css({ width: "100px", height: "100px" });
  // 태그[속성~=값] : 공백을 포함한 속성값이 일치하는 요소
  $("#div1 input[class~=test1]").val("12345678");
  // 태그[속성^=값] : 지정한 속성값으로 시작하는 요소
  $("#div1 input[type^=ra]").prop("checked", true);
  // 태그[속성$=값] : 지정한 속성값으로 끝나는 요소
  $("#div1 input[type$=box]").prop("checked", true);
  // 태그[속성!=값] : 해당 속성값을 갖지 않는 요소
  $("#div1 input[type!=text]").css("background-color", "yellow");

  // 6. 입력 양식 선택자
  $("#div2 :text").css("background-color", "pink");
  // button -> value 값 "버튼" 추가
  $("#div2 :button").val("버튼");
  // checkbox -> 속성 checked를 true
  $("#div2 :checkbox").prop("checked", true);
  // file -> 배경색 skyblue
  $("#div2 :file").css("background-color", "skyblue");

  // 7. 입력 양식 상태에 대한 선택자
  // input 태그 중 활성화된 요소 선택
  $("#div3 input:enabled").css("background-color", "lavender");
  // input 태그 중 비활성화된 요소 선택
  $("#div3 input:disabled").css("background-color", "lightcyan");
  // input 태그 중 체크된 요소 선택
  $("#div3 input:checked").css({ width: "30px", height: "30px" });
  // checkbox에 change 이벤트 핸들러 등록
  $("#div3 :checkbox").change(function () {
    console.log(this);
    console.log($(this));
    let checkbox = $(this);
    // checked가 있는지 true/ false
    console.log(checkbox.prop("checked")); // true or false
    // 속한것중에 checked가 있는지 확인
    console.log(checkbox.attr("checked"));
  });
  // select에 change 이벤트 핸들러 등록
  $("#national").change(function () {
    // select 태그에 option 태그 중 선택된 요소 선택
    // id가 result인 input 값으로 추가
    let value = $("select > option:selected").val();
    $("#result").val(value);
    console.log($("select > option:selected"));
  });
});
