// DOMContentLoaded : DOM 구조가 로드되고 실행!

window.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  console.log(h1); // js파일을 헤드에 뒀을때는 null /Error
  const img = document.querySelectorAll(".container img");
  console.log(img);
  /* 이미지마다 이벤트 걸려면 반복문 필요! */

  /*
  e.currentTarget 선택한 이미지
  for (const item of img) {
    item.addEventListener("click", function (e) {
      console.log(e.currentTarget); 
      e.currentTarget.style.display = "none";
    });
  }
  */

  const container = document.querySelector(".container");

  function removeHandler(e) {
    if (e.target !== e.currentTarget) {
      e.target.style.display = "none";
    }
  }

  container.addEventListener("click", removeHandler);

  h1.onclick = function () {
    h1.style.backgroundColor = "purple";
  };

  h1.onmouseenter = function () {
    h1.style.backgroundColor = "red";
  };

  h1.onmouseleave = function () {
    h1.style.backgroundColor = "pink";
  };

  //.addEventListener("mouse...,click", 이벤트가 발생했을 때 일어날 함수(객체))
  h1.addEventListener("click", function () {
    h1.style.backgroundColor = "skyblue";
  });
});
