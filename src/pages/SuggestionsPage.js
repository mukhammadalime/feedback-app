import React from "react";
import NavBar from "../components/navbar/NavBar";
import Suggestions from "../components/suggestions/Suggestions";

const SuggestionsPage = () => {
  return (
    <>
      <div className="container">
        <NavBar />
        <Suggestions />
      </div>
    </>
  );
};

export default SuggestionsPage;
