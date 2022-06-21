import React, { useReducer, useState } from "react";
import FContext from "./Fcontext";
import data from "../data/data";

const ADD_NEW_FEEDBACK = "ADD_NEW_FEEDBACK";

const defaultFeedbackState = {
  feedbacks: data.productRequests,
};

const feedbackReducer = (state, action) => {
  if (action.type === ADD_NEW_FEEDBACK) {
    const updatedFeedbacks = [...state.feedbacks, action.newFeedback];

    return {
      feedbacks: updatedFeedbacks,
    };
  }

  return defaultFeedbackState;
};

const FcontextProvider = (props) => {
  const [sorted, setSorted] = useState("Most Upvotes");
  const [filtered, setFiltered] = useState("all");
  const [feedbackState, dispatchFeedbackState] = useReducer(
    feedbackReducer,
    defaultFeedbackState
  );

  const changeSortedByHandler = (sortedBy) => {
    setSorted(sortedBy);
  };

  const changeFilterByHandler = (filteredBy) => {
    setFiltered(filteredBy);
  };

  const addNewFeedbackHandler = (newFeedback) => {
    dispatchFeedbackState({ type: ADD_NEW_FEEDBACK, newFeedback });
  };

  const feedbackContext = {
    sortedBy: sorted,
    filteredBy: filtered,
    feedbacks: feedbackState.feedbacks,
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
