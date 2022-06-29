import { useEffect } from "react";
import RoadMapItem from "./RoadMapItem";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getAllFeedbacks } from "../../backend/api";

const RoadMapItemBox = (props) => {
  const {
    sendRequest: getFeedbacks,
    data: loadedFeedbacks,
    error,
    status,
  } = useHttp(getAllFeedbacks);

  useEffect(() => {
    getFeedbacks();
  }, [getFeedbacks]);

  if (status === "pending") {
    return (
      <div className="status-box phone-hidden">
        <LoadingSpinner />;
      </div>
    );
  }

  if (error || !loadedFeedbacks || loadedFeedbacks.length === 0) {
    return <p className="">{error}</p>;
  }

  if (status === "completed") {
    const foundFeedbacks = loadedFeedbacks.filter(
      (feedback) => feedback.status === props.type.toLowerCase()
    );

    return (
      <div className={`status-box ${props.selectedType ? "" : "phone-hidden"}`}>
        <div className="status-info">
          <h4 className="primary-text-3">
            {props.type === "In-progress" ? "In Progress" : props.type}
            <span>({foundFeedbacks.length})</span>
          </h4>
          <p className="body-1">{props.info}</p>
        </div>

        {foundFeedbacks.map((item) => (
          <RoadMapItem
            key={item.id}
            id={item.id}
            lineType={props.lineType}
            status={item.status}
            description={item.description}
            title={item.title}
            category={item.category}
            upvotes={item.upvotes}
            commentsLength={item.comments?.length}
          />
        ))}
      </div>
    );
  }
};

export default RoadMapItemBox;
