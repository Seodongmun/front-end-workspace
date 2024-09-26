import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";
import Sell from "./Sell";

function Detail(props) {
  let navigate = useNavigate();

  let { id } = useParams();

  // console.log(id); // 3
  // console.log(props.shoes.length); // 3
  {
    console.log(props.shoes[id].id + 1);
  }
  {
    if (id >= props.shoes.length) {
      // 이 상태가 에러페이지
      return (
        <div>
          <h1>에러용</h1>
        </div>
      );
    } else {
      // 이 상태가 정상리턴

      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`https://codingapple1.github.io/shop/shoes${
                  props.shoes[id].id + 1
                }.jpg`}
                width="100%"
              />
            </div>

            <div className="col-md-6">
              <h4 className="pt-5">{props.shoes[id].title}</h4>
              <p>{props.shoes[id].content}</p>
              <p>{props.shoes[id].price.toLocaleString()}원</p>

              <Routes>
                <Route path="/sell" element={<Sell />} />
              </Routes>
              <button
                className="btn btn-danger"
                onClick={() => {
                  navigate("/detail/sell");
                }}
              >
                주문하기
              </button>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Detail;
