import React from "react";

const FContext = React.createContext({
  sortedBy: "",
  filteredBy: "",
  isLoggedIn: false,
  token: "",
  changeSortedBy: (sortedBy) => {},
  changeFilterBy: (filteredBy) => {},
  login: (token) => {},
  logout: () => {},
});

export default FContext;
