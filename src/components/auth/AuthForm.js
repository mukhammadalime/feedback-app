import { useRef } from "react";
import config from "../../config.json";
import FContext from "../../store/Fcontext";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const feedbackCtx = useContext(FContext);
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url = config.FIREBASE_LOGIN;
    } else {
      url = config.FIREBASE_SINGUP;
    }

    const response = await fetch(url, {
      method: "POST",
      hearders: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      isLogin
        ? alert("Password or Email is not correct")
        : alert("User already exists or inputs are not valid");
      return;
    }

    const data = await response.json();

    feedbackCtx.login(data.idToken);
    navigate("/suggestions");
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className="auth">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="email" children="Your Email" />
          <input type="email" id="email" required ref={emailInputRef} />
        </div>

        <div className="control">
          <label htmlFor="password">Your Password (6 characters)</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className="actions">
          <button children={isLogin ? "Login" : "Create Account"} />
          <button
            type="button"
            className="toggle"
            onClick={switchAuthModeHandler}
            children={
              isLogin ? "Create new account" : "Login with existing account"
            }
          />
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
