import { useState, useRef } from "react";

const InputText = () => {
  const [text, setText] = useState("");
  const write = (e) => {
    setText(e.target.value);
  };
  const textRef = useRef();
  const complete = () => {
    alert(textRef.current.value);
    // setText("");
    textRef.current.value = "";
    textRef.current.focus();
    console.log(textRef.current);
  };
  return (
    <>
      <input ref={textRef} onChange={write} value={text} />
      <button onClick={complete}>작성 완료</button>
    </>
  );
};
export default InputText;
