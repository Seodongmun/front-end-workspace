/* eslint-disable */

import "./App.css";
import { useState } from "react";
import Date from "./components/Date.js";



function App() {

  // 지금은 DB연결 안돼서 하나씩 추가해줘야 글제목 추가하면 같이 생성됨
  let [글제목, 제목변경] = useState([ "남자 코트 추천", "파이썬 독학","강남 우동 맛집", "자바스크립트 마스터", "역삼 김밥" ]);
  let [따봉, 따봉변경] = useState([0, 0, 0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [check] = useState(true);

  return (
    <div className="App">
      {/* 헤더 */}
      <div className="black-nav">
        <h4 style={{ fontSize: "1.5rem" }}>ReactBlog</h4>
      </div>
      {/* 정렬 */}
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          제목변경(copy);
          console.log(copy);
        }} >
        가나다순정렬
      </button>
      {/* 글제목을 추가 */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => { setModal(true); setTitle(i); }} > {글제목[i]} 
            <span onClick= {(e) => { 
                let copy = [...따봉]; 
                copy[i] = copy[i] + 1;
                따봉변경(copy);
                  }} >👍  {따봉[i]}
            </span>
            <button onClick={()=>{

              제목변경(글제목.filter(word => word !== 글제목[i]));
              // let copy = [...글제목];
              // copy.splice(i,1);

              console.log(글제목);
            }}>삭제</button>
            </h4>
            <div>
              <p>
                <Date/>
              </p>
            </div>
          </div>
        );
      })}
      <input type="text" onChange={(e)=> { 입력값변경(e.target.value); console.log(입력값)}}/>
      <button onClick={(e)=> { 
        console.log(입력값)
        if(입력값 == ""){
          alert("제목을 입력해주세요")
          check= false;
        } else {
          console.log(today)
          let copy = [...글제목];
          제목변경(copy.concat(입력값));
        }
       }}>글추가</button>

      {modal == true ? <Modal title={title} 글제목={글제목} 제목변경={제목변경} /> : null}
    </div>
  );
}




function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자 코트 추천";
          console.log(copy);
          props.제목변경(copy);
        }}> 글수정
      </button>
    </div>
  );
}

export default App;
