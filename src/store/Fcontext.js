import React from "react";

const FContext = React.createContext({
  sortedBy: "",
  filteredBy: "",
  changeSortedBy: (sortedBy) => {},
  changeFilterBy: (filteredBy) => {},
});

export default FContext;
