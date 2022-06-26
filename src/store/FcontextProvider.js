import React, { useReducer, useState } from "react";
import FContext from "./Fcontext";
import data from "../data/data";

const ADD_NEW_FEEDBACK = "ADD_NEW_FEEDBACK";
const EDIT_FEEDBACK = "EDIT_FEEDBACK";
const DELETE_FEEDBACK = "DELETE_FEEDBACK";

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

  if (action.type === EDIT_FEEDBACK) {
    const editingFeedbackIndex = state.feedbacks.findIndex(
      (feedback) => feedback.id === action.editingFeedback.id
    );

    const editingFeedback = state.feedbacks[editingFeedbackIndex];

    editingFeedback.status = action.editingFeedback.status;
    editingFeedback.title = action.editingFeedback.title;
    editingFeedback.category = action.editingFeedback.category;
    editingFeedback.description = action.editingFeedback.description;
    console.log("editingFeedback:", editingFeedback);

    const updatedFeedbacks = [...state.feedbacks];
    updatedFeedbacks[editingFeedbackIndex] = editingFeedback;

    return {
      feedbacks: updatedFeedbacks,
    };
  }

  if (action.type === DELETE_FEEDBACK) {
    const deletingFeedbackIndex = state.feedbacks.findIndex(
      (feedback) => feedback.id === action.deletingFeedbackId
    );

    const updatedFeedbacks = [...state.feedbacks];
    updatedFeedbacks.splice(deletingFeedbackIndex, 1);

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

  const editFeedbackHandler = (editingFeedback) => {
    dispatchFeedbackState({ type: EDIT_FEEDBACK, editingFeedback });
  };

  const deleteFeedbackHandler = (deletingFeedbackId) => {
    dispatchFeedbackState({ type: DELETE_FEEDBACK, deletingFeedbackId });
  };

  const feedbackContext = {
    sortedBy: sorted,
    filteredBy: filtered,
    feedbacks: feedbackState.feedbacks,
    changeSortedBy: changeSortedByHandler,
    changeFilterBy: changeFilterByHandler,
    addNewFeedback: addNewFeedbackHandler,
    editFeedback: editFeedbackHandler,
    deleteFeedback: deleteFeedbackHandler,
  };

  return (
    <FContext.Provider value={feedbackContext}>
      {props.children}
    </FContext.Provider>
  );
};

export default FcontextProvider;
