import React from "react";

const FContext = React.createContext({
  sortedBy: "",
  filteredBy: "",
  feedbacks: [],
  changeSortedBy: (sortedBy) => {},
  changeFilterBy: (filteredBy) => {},
  addNewFeedback: (newFeedback) => {},
  editFeedback: (editingfeedback) => {},
  deleteFeedback: (deletingFeedbackId) => {},
});

export default FContext;
