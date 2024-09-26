import { useState } from "react";
import data from "../components/Data";

function Detail() {
  let [shoes] = useState(data);
  let [shoe] = data;
  console.log(shoes);
  console.log(shoe);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price.toLocaleString()}원</p>
          <button className="btn btn-danger">주문하기</button>
          <Info />
        </div>
      </div>
    </div>
  );
}

function Info() {
  return <div></div>;
}

export default Detail;
