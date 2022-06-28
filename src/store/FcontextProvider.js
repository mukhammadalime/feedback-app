import { useState } from "react";
import FContext from "./Fcontext";

const FcontextProvider = (props) => {
  let initialToken = localStorage.getItem("token");
  const [sorted, setSorted] = useState("Most Upvotes");
  const [filtered, setFiltered] = useState("all");
  const [token, setToken] = useState(initialToken);
  const userLoggedIn = !!token;

  const changeSortedByHandler = (sortedBy) => {
    setSorted(sortedBy);
  };
  const changeFilterByHandler = (filteredBy) => {
    setFiltered(filteredBy);
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const feedbackContext = {
    sortedBy: sorted,
    filteredBy: filtered,
    isLoggedIn: userLoggedIn,
    token,
    changeSortedBy: changeSortedByHandler,
    changeFilterBy: changeFilterByHandler,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <FContext.Provider value={feedbackContext}>
      {props.children}
    </FContext.Provider>
  );
};

export default FcontextProvider;
