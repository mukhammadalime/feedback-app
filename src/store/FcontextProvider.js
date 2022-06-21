import React, { useState } from "react";
import FContext from "./Fcontext";
import data from "../data/data";

const FcontextProvider = (props) => {
  const [sorted, setSorted] = useState("Most Upvotes");
  const [filtered, setFiltered] = useState("all");

  const changeSortedByHandler = (sortedBy) => {
    setSorted(sortedBy);
  };

  const changeFilterByHandler = (filteredBy) => {
    setFiltered(filteredBy);
  };

  const addNewFeedbackHandler = () => {};

  const feedbackContext = {
    sortedBy: sorted,
    filteredBy: filtered,
    feedbacks: data,
    changeSortedBy: changeSortedByHandler,
    changeFilterBy: changeFilterByHandler,
    addNewFeedback: addNewFeedbackHandler,
  };

  return (
    <FContext.Provider value={feedbackContext}>
      {props.children}
    </FContext.Provider>
  );
};

export default FcontextProvider;
