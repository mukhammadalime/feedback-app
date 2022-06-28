import { useContext } from "react";
import FContext from "../../store/Fcontext";

const MainHeader = () => {
  const { isLoggedIn, logout } = useContext(FContext);
  const logoutHandler = () => {
    logout();
  };
  return (
    <div className="header">
      <div className="header__logo">
        <p>Welcome To Product Feedback Website</p>
      </div>

      <div className="header__auth">
        {isLoggedIn && (
          <>
            <div className="login-logout-btn" onClick={logoutHandler}>
              Logout
            </div>
            <div className="header__user--img-box">
              <img
                className="header__user--img"
                src="/assets/user-images/default.jpg"
                alt=""
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainHeader;
