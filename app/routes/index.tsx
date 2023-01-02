import { Link } from "@remix-run/react";

const Main = () => {
  return (
    <div>
      <div className="nav">
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/services/services">
          Services
        </Link>
      </div>
      <div className="home-pg">
        <h1>Home Page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  );
};

export default Main;
