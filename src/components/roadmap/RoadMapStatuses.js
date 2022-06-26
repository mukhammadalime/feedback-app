import React from "react";

const RoadMapStatuses = (props) => {
  return (
    <div className="sorting-statuses">
      <div className="sorting-statuses__item">
        <h5 className=" primary-text-3 not-active-status">
          Planned <span>({props.planned || "0"})</span>
        </h5>
      </div>
      <div className="sorting-statuses__item active-status">
        <h5 className=" primary-text-3">
          In Progress <span>({props.inProgress || 0})</span>
        </h5>
      </div>
      <div className="sorting-statuses__item ">
        <h5 className=" primary-text-3 not-active-status">
          Live <span>({props.live || "0"})</span>
        </h5>
      </div>
    </div>
  );
};

export default RoadMapStatuses;
