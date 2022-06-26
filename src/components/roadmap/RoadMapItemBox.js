import React, { useContext } from "react";
import FContext from "../../store/Fcontext";
import RoadMapItem from "./RoadMapItem";

const RoadMapItemBox = (props) => {
  const { feedbacks } = useContext(FContext);

  const foundFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === props.type.toLowerCase()
  );

  return (
    <div className="status-box phone-hidden">
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
};

export default RoadMapItemBox;
