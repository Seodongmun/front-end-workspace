////////////////////////////////////////////////////////////////////
(DOM)

document.getElementsByTagName("div")         (태그로 가져오기)
document.getElementById("id")                (아이디로 가져오기)
document.getElementsByClassName("class")     (클래스로 가져오기)
document.getElementsByName("name")           (네임으로 가져오기)
document.querySelector("#.")                 (선택자로 가져오기)
document.querySelectorAll(...) <- 입력값 싹다 (선택자로 가져오기ALL)

(HTML 내용 조작하기)
.innerHTML =""                               (태그 빼고 텍스트 입력)
.textContent =""                             (태그 포함 전체 입력)

(속성 조작하기) /구글링/
.setAttribute ("","")
.getAttribute ("","")

(스타일 조작하기)
.style.color = "orange";                     (color 변경)
.style.backgroundColor = "yellow";          (backgroundColor 변경)


(classList)

.classList.add("black")                      (black 추가)
.classList.remove("black")                   (black 제거)

.classList.contains("black")                 (속성 확인후 추가/제거)
  if (check) {                               (만약)
    div.classList.remove("black");           (black 이면 제거)
  } else {
    div.classList.add("black");              (black 없을시 추가)
  }

  .classList.toggle("black")                 (black 왔다갔다)



document.querySelector("(#.)...") /구글링/
document.createElement(" ") /구글링/
.appendChild /구글링/

p.parentNode.removeChild /구글링/


(DOM)
////////////////////////////////////////////////////////////////////
(내장객체)

Math.min()                                    (최소값)       
Math.max()                                    (최대값)
Math.abs()                                    (절대값)

Math.round()                                  (반올림)
Math.floor()                                  (버림)
Math.ceil()                                   (올림)
Math.floor(Math.random() * $ + 1);      ($ ~ $ 까지의 랜덤값)

now.getFullYear                               (년도)
now.getMonth                                  (월)
now.getDate                                   (일)
now.getHours                                  (시)
now.getMinutes                                (분)
now.getSeconds                                (초)

new Date 

setTimeout(() => {
    console.log("3초 후 실행!");         ($초 후 실행)
  }, 3000);//<- 3초는(3000)

setInterval(() => {
    console.log(`${++second}초`);   ($초씩 증가(마이너스면 감소))
  }, 1000);

location.reload();                      (새로고침)
location.href = "https://www.naver.com";(해당 페이지로 이동)


(내장객체)
//////////////////////////////////////////////////////////////////


removeHandler
addEventListener
onclick
onmouseenter
onmouseleave
e.target 
e.currentTarget
removeAttribute