import "./assets/App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Card from "./components/Card";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Sell from "./pages/Sell";
import Event from "./pages/EventPage";
import { useState } from "react";
import data from "./components/Data";
{
  /* npm install react-router-dom@6 (페이지) */
}

function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container className="nav-header">
          <Navbar.Brand href="/">도토리 다판다</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/event");
            }}
          >
            event
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate(-1);
            }}
          >
            back
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate(1);
            }}
          >
            front
          </Nav.Link>
        </Nav>
      </Navbar>
      {/* 이 위로 헤더 */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="main-bg"></div>
              <Card shoes={shoes} />
              <button
                onClick={() => {
                  let copy = [...shoes];
                  console.log(
                    copy.sort(function (a, b) {
                      if (a.title.toLowerCase() > b.title.toLowerCase())
                        return 1;
                      else if (a.title.toLowerCase() < b.title.toLowerCase())
                        return -1;
                      else return 0;
                    })
                  );
                }}
              >
                알파벳 순 정렬
              </button>
            </div>
          }
        />

        <Route
          path="/detail/:id"
          element={<Detail shoes={shoes} setShoes={setShoes} />}
        >
          <Route path="sell" element={<Sell />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={
              <div className="event-div">
                <h4>첫 주문시 양배추즙 서비스</h4>
                <button>클릭!</button>
              </div>
            }
          />
          <Route
            path="two"
            element={
              <div className="event-div">
                <h4>생일기념 쿠폰받기</h4>
                <button>클릭!</button>
              </div>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <div>
              <h1>페이지를 찾을수 없습니다</h1>
              <img
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + "/다람쥐2.jpg"}
              />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
