import { useState } from "react";
import Btn from "./Btn";

const Converter = () => {
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [text, setText] = useState("Hours => Minutes");
  const [check, setCheck] = useState(false);

  const inputMinutes = (e) => {
    setMinutes(e.target.value);
    console.log(e.target.value);
  };
  const inputHours = (e) => {
    setHours(e.target.value);
  };

  const changeBtn = (e) => {
    if (text === "Hours => Minutes") {
      setCheck(!check);
      setHours(minutes / 60);
      setMinutes("");
      setText("Minutes => Hours");
    } else {
      setCheck(!check);
      setMinutes(Math.floor(hours * 60));
      setHours("");
      setText("Hours => Minutes");
    }
  };

  const reset = () => {
    setMinutes(" ");
    setHours(" ");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Time Converter</h1>
      Minutes :{" "}
      <input
        onChange={inputMinutes}
        value={minutes}
        /* { 중괄호 } 에서 나누기 곱하기 삼항연산자 가능 */
        type="number"
        placeholder="Minutes"
        disabled={check}
      />
      Hours :{" "}
      <input
        onChange={inputHours}
        value={hours}
        type="number"
        placeholder="Hours"
        disabled={!check}
      />
      <Btn click={reset} text="Reset" />
      <Btn click={changeBtn} text={text} />
    </div>
  );
};

export default Converter;
