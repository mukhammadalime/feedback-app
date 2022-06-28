import FeedbackItem from "./FeedbackItem";
import useHttp from "../../hooks/use-http";
import FContext from "../../store/Fcontext";
import { useContext, useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getAllFeedbacks } from "../../backend/api";
import filterByCategory from "../utils/FilterByCategory";
import EmptySuggestions from "../suggestions/EmptySuggestions";

const Feedbacks = () => {
  const { sortedBy, filteredBy } = useContext(FContext);
  const {
    sendRequest,
    status,
    error,
    data: loadedFeedbacks,
  } = useHttp(getAllFeedbacks);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="feedbacks">
        <h2 style={{ margin: "0 auto" }}>{error}</h2>
      </div>
    );
  }

  if (status === "completed" && loadedFeedbacks.length === 0) {
    return <EmptySuggestions />;
  }

  let filteredData = [];
  // We need to wait until data comes from firebase
  if (status === "completed" && loadedFeedbacks.length > 0) {
    // Filtering feedbacks by category
    filteredData = filterByCategory(sortedBy, loadedFeedbacks, filteredBy);
  }

  return (
    <div className="feedbacks">
      {filteredData.length === 0 && <EmptySuggestions />}
      {filteredData.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          id={feedback.id}
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
