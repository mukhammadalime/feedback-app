import { useContext, useState } from "react";
import NavFilter from "./NavFilter";
import NavRoadmap from "./NavRoadmap";
import FContext from "../../store/Fcontext";
import NavBarPhone from "./NavBarPhone";

const NavBar = () => {
  const { logout } = useContext(FContext);
  const [showNavBar, setShowNavBar] = useState(false);

  const showNavBarHandler = () => {
    setShowNavBar((prevState) => !prevState);
  };

  return (
    <>
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

          <input
            type="checkbox"
            className="nav__click-checkbox"
            id="navi-logo"
          />
          <label
            htmlFor="navi-logo"
            className="nav__click-button"
            onClick={showNavBarHandler}
          >
            <span className="nav__click">&nbsp;</span>
          </label>
        </div>

        {showNavBar && <NavBarPhone logout={logout} />}

        <div className="nav__main">
          <NavFilter />
          <NavRoadmap />
          <div className="logout-btn-box">
            <div className="btn-purple logout-btn" onClick={() => logout()}>
              Logout
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
