import React, { useReducer, useState } from "react";
import FContext from "./Fcontext";
import data from "../data/data";

const ADD_NEW_FEEDBACK = "ADD_NEW_FEEDBACK";
const EDIT_FEEDBACK = "EDIT_FEEDBACK";
const DELETE_FEEDBACK = "DELETE_FEEDBACK";
const ADD_COMMENT = "ADD_COMMENT";
const ADD_REPLY = "ADD_REPLY";

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

  if (action.type === ADD_COMMENT) {
    const comment = action.newComment;
    const commentingFeedbackIndex = state.feedbacks.findIndex(
      (feedback) => feedback.id === comment.feedbackId
    );
    const commentingFeedback = state.feedbacks[commentingFeedbackIndex];

    commentingFeedback.comments.push({
      id: commentingFeedback.comments
        ? commentingFeedback.comments.length + 1
        : 1,
      content: comment.content,
      user: data.currentUser,
    });

    const updatedFeedbacks = [...state.feedbacks];
    updatedFeedbacks[commentingFeedbackIndex] = commentingFeedback;

    return {
      feedbacks: updatedFeedbacks,
    };
  }

  if (action.type === ADD_REPLY) {
    console.log("sdfsd");
    // 1. Find current feedback
    const currentFeedbackIndex = state.feedbacks.findIndex(
      (feedback) => feedback.id === action.newReply.feedbackId
    );
    const currentFeedback = state.feedbacks[currentFeedbackIndex];

    // 2. Find current comment that is being replied
    const currentCommentIndex = currentFeedback.comments.findIndex(
      (comment) => comment.id === action.newReply.replyingCommentId
    );
    const currentComment = currentFeedback.comments[currentCommentIndex];

    // 3. Create a new reply
    const newReply = {
      id: currentComment.replies ? currentComment.replies.length + 1 : 1,
      content: action.newReply.content,
      replyingTo: action.newReply.replyingTo,
      user: data.currentUser,
    };

    // 4. If comment does not have a reply array, create one. Otherwise push new reply
    if (!currentComment.replies) currentComment.replies = [newReply];
    else currentComment.replies.push(newReply);

    // 5. Update current feedback comments
    currentFeedback.comments[currentCommentIndex] = currentComment;

    // 6. Update current feedback and feedbacks array
    const updatedFeedbacks = [...state.feedbacks];
    updatedFeedbacks[currentFeedbackIndex] = currentFeedback;

    return {
      feedbacks: updatedFeedbacks,
    };
  }

  return defaultFeedbackState;
};

const FcontextProvider = (props) => {
  let initialToken = localStorage.getItem("token");
  const [sorted, setSorted] = useState("Most Upvotes");
  const [filtered, setFiltered] = useState("all");
  const [feedbackState, dispatchFeedbackState] = useReducer(
    feedbackReducer,
    defaultFeedbackState
  );
  const [token, setToken] = useState(initialToken);
  const userLoggedIn = !!token;

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

  const addCommentHandler = (newComment) => {
    dispatchFeedbackState({ type: ADD_COMMENT, newComment });
  };

  const addReplyHandler = (newReply) => {
    dispatchFeedbackState({ type: ADD_REPLY, newReply });
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
    currentUser: data.currentUser,
    feedbacks: feedbackState.feedbacks,
    changeSortedBy: changeSortedByHandler,
    changeFilterBy: changeFilterByHandler,
    addNewFeedback: addNewFeedbackHandler,
    editFeedback: editFeedbackHandler,
    deleteFeedback: deleteFeedbackHandler,
    addComment: addCommentHandler,
    addReply: addReplyHandler,
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
