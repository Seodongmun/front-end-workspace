import { Link, useParams } from "react-router-dom";

function Card(props) {
  // return 시점 잘 확인하기
  return (
    <div className="row">
      {props.shoes.map((shoes, i) => (
        <div className="col-md-4" key={i}>
          {/* 이미지 누르면 해당 디테일 페이지 이동 */}
          <Link to={`/detail/${i}`}>
            <img
              src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
              width="80%"
              alt={props.shoes[i].title}
            />
          </Link>
          <h3>{props.shoes[i].title}</h3>
          <h4>{props.shoes[i].content}</h4>
          <p>{props.shoes[i].price.toLocaleString()}원</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
