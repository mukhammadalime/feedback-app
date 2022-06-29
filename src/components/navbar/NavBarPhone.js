import NavFilter from "./NavFilter";
import NavRoadmap from "./NavRoadmap";

const NavBarPhone = (props) => {
  return (
    <div className="nav-phone-container">
      <div className="nav-phone-box">
        <div className="nav_main nav_main-phone">
          <NavFilter />
          <NavRoadmap />
          <div className="logout-btn-box">
            <div
              className="btn-purple logout-btn"
              onClick={() => props.logout()}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarPhone;
