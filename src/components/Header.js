import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
// using link whole page wont refresh
//whole comp rerenders when used setreactbtn
const Header = () => {
  const [reactbtn, setreactbtn] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About us</Link></li>
          <li> <Link to="/contact">Contact us</Link></li>
          <li> <Link>Cart</Link> </li>
          <button
            className="login"
            onClick={() => {
              if (reactbtn === "login") {
                setreactbtn("logout");
              } else {
                setreactbtn("login");
              }
            }}
          >
            {reactbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
