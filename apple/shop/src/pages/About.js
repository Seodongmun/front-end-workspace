import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>어바웃 페이지임</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default About;
