import { useContext } from "react";
import FContext from "../../store/Fcontext";
import NavFilter from "./NavFilter";
import NavRoadmap from "./NavRoadmap";

const NavBar = () => {
  const { logout } = useContext(FContext);
  return (
    <nav className="nav">
      <div className="nav__name">
        <div>
          <h1 className="primary-text-2" style={{ color: "#ffffff" }}>
            Frontend Mentor
          </h1>
          <p
            className="primary-text-4"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
            children="Feedback Board"
          />
        </div>
        <input type="checkbox" className="nav__click-checkbox" id="navi-logo" />
        <label htmlFor="navi-logo" className="nav__click-button">
          <span className="nav__click">&nbsp;</span>
        </label>
      </div>
      <NavFilter />
      <NavRoadmap />
      <div>
        <div className="btn-purple logout-btn" onClick={() => logout}>
          Logout
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
