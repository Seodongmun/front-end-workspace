import "./assets/App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Card from "./components/Card";
import Detail from "./pages/Detail";
{
  /* npm install react-router-dom@6 (페이지) */
}

function App() {
  let navigate = useNavigate();
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

      <div className="main-bg"></div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Card />
            </div>
          }
        />

        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<div>장바구니임</div>} />
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
