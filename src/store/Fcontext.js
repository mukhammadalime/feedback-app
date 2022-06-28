import React from "react";

const FContext = React.createContext({
  sortedBy: "",
  filteredBy: "",
  feedbacks: [],
  isLoggedIn: false,
  changeSortedBy: (sortedBy) => {},
  changeFilterBy: (filteredBy) => {},
  addNewFeedback: (newFeedback) => {},
  editFeedback: (editingfeedback) => {},
  deleteFeedback: (deletingFeedbackId) => {},
  addComment: (newComment) => {},
  addReply: (newReply) => {},
  login: () => {},
  logout: () => {},
});

export default FContext;
