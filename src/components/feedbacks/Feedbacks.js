import React, { useContext } from "react";
import Feedback from "./Feedback";
import FContext from "../../store/Fcontext";
import EmptySuggestions from "../suggestions/EmptySuggestions";

const Feedbacks = () => {
  const { sortedBy, filteredBy, feedbacks } = useContext(FContext);

  let filteredData = feedbacks.filter((feedback) => {
    return filteredBy === "all" ? feedback : feedback.category === filteredBy;
  });

  switch (sortedBy) {
    case "Least Upvotes":
      filteredData = filteredData.sort((a, b) => a.upvotes - b.upvotes);
      break;
    case "Most Comments":
      filteredData = filteredData.sort(
        (a, b) => b.comments?.length - a.comments?.length
      );
      break;
    case "Least Comments":
      filteredData = filteredData.sort(
        (a, b) => a.comments?.length - b.comments?.length
      );
      break;
    default:
      filteredData = filteredData.sort((a, b) => b.upvotes - a.upvotes);
      break;
  }

  return (
    <div className="feedbacks">
      {filteredData.length === 0 && <EmptySuggestions />}
      {filteredData.map((feedback) => (
        <Feedback
          key={feedback.id}
          upvotes={feedback.upvotes}
          title={feedback.title}
          description={feedback.description}
          comments={feedback.comments}
          status={feedback.status}
        />
      ))}
    </div>
  );
};

export default Feedbacks;
