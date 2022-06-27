import React from "react";

const MainHeader = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <p>Frontent Mentor Feedback Board</p>
      </div>

      <div className="header__auth">
        <div className="login-logout-btn">Logout</div>
        <div className="header__user--img-box">
          <img
            className="header__user--img"
            src="/assets/user-images/image-zena.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
