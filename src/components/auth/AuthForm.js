import React, { useContext, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import FContext from "../../store/Fcontext";

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
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVf1WRonEqDX0Ws8z3SRhVmIzZb7Xc_Rk`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVf1WRonEqDX0Ws8z3SRhVmIzZb7Xc_Rk`;
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
          <label htmlFor="email">Your Email</label>
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
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className="toggle"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
