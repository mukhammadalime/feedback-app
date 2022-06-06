import React, { useState } from "react";
import FContext from "./Fcontext";

const FcontextProvider = (props) => {
  const [sorted, setSorted] = useState("Most Upvotes");
  const [filtered, setFiltered] = useState("all");

  const changeSortedByHandler = (sortedBy) => {
    setSorted(sortedBy);
  };

  const changeFilterByHandler = (filteredBy) => {
    setFiltered(filteredBy);
  };

  const feedbackContext = {
    sortedBy: sorted,
    filteredBy: filtered,
    changeSortedBy: changeSortedByHandler,
    changeFilterBy: changeFilterByHandler,
  };

  return (
    <FContext.Provider value={feedbackContext}>
      {props.children}
    </FContext.Provider>
  );
};

export default FcontextProvider;
