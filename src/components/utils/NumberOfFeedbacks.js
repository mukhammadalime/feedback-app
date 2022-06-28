import { useEffect } from "react";
import { getAllFeedbacks } from "../../backend/api";
import useHttp from "../../hooks/use-http";

const NumberOfFeedbacks = () => {
  const {
    sendRequest: getFeedbacks,
    data: loadedFeedbacks,
    status,
    error,
  } = useHttp(getAllFeedbacks);

  useEffect(() => {
    getFeedbacks();
  }, [getFeedbacks]);

  if (error) {
    return {
      plannedFeedbacks: 0,
      liveFeedbacks: 0,
      inProgressFeedbacks: 0,
    };
  }

  if (status === "completed") {
    const plannedFeedbacks = loadedFeedbacks.filter(
      (feedback) => feedback.status === "planned"
    );
    const liveFeedbacks = loadedFeedbacks.filter(
      (feedback) => feedback.status === "live"
    );
    const inProgressFeedbacks = loadedFeedbacks.filter(
      (feedback) => feedback.status === "in-progress"
    );

    return {
      plannedFeedbacks,
      liveFeedbacks,
      inProgressFeedbacks,
    };
  }
};

export default NumberOfFeedbacks;
