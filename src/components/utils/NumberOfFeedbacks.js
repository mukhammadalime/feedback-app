import { useContext } from "react";
import FContext from "../../store/Fcontext";

const NumberOfFeedbacks = () => {
  const { feedbacks } = useContext(FContext);

  const plannedFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "planned"
  );
  const liveFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "live"
  );
  const inProgressFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "in-progress"
  );

  return {
    plannedFeedbacks,
    liveFeedbacks,
    inProgressFeedbacks,
  };
};

export default NumberOfFeedbacks;
