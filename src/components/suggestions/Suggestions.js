import React from "react";
import SuggestionsHeader from "./SuggestionsHeader";
import Feedbacks from "../feedbacks/Feedbacks";

const Suggestions = () => {
  return (
    <div className="main">
      <SuggestionsHeader />
      <Feedbacks />
    </div>
  );
};

export default Suggestions;
