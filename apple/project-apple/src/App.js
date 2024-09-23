/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 제목변경] = useState([
    "남자 코트 추천",
    "파이썬 독학",
    "강남 우동 맛집",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  function like() {
    따봉변경(따봉++);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: "1.5rem" }}>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          제목변경(copy);
          console.log(copy);
        }}
      >
        가나다순정렬
      </button>

      {/* <div className="list">
        <h4>
          {글제목[0]} <span onClick={like}>👍</span> {따봉}
        </h4>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자 코트 추천";
            제목변경(copy);
          }}
        >
          글 수정
        </button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {글제목[1]} <span>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]} <span>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
        {modal == true ? <Modal /> : null}
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {글제목[i]}
            </h4>
            <span onClick={like}>👍</span> {따봉}
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>상세내용</p>
    </div>
  );
}

export default App;
