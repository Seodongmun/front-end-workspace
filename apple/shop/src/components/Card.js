import { useState } from "react";
import { Link } from "react-router-dom";
import data from "./Data";

function Card() {
  let [shoes] = useState(data);
  // return 시점 잘 확인하기
  return (
    <div className="row">
      {shoes.map((shoes, i) => (
        <div className="col-md-4" key={i}>
          {/* 이미지 누르면 해당 디테일 페이지 이동 */}
          <Link to={`/detail`}>
            <img
              src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
              width="80%"
              alt={shoes.title}
            />
          </Link>
          <h3>{shoes.title}</h3>
          <h4>{shoes.content}</h4>
          <p>{shoes.price.toLocaleString()}원</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
