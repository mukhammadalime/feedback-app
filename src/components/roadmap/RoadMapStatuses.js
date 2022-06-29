import { useState } from "react";

const RoadMapStatuses = (props) => {
  const [active, setActive] = useState("In Progress");

  const changeActiveHandler = (e) => {
    const selected = e.target.textContent.split("(")[0].trim();
    setActive(selected);
    props.getSelectedType(selected);
  };

  return (
    <div className="sorting-statuses">
      <div
        className={`sorting-statuses__item ${
          active !== "Planned" ? "not-active-status" : "active-status"
        }  `}
        onClick={changeActiveHandler}
      >
        <h5 className="primary-text-3">
          Planned <span>({props.planned || 0})</span>
        </h5>
      </div>
      <div
        className={`sorting-statuses__item ${
          active !== "In Progress" ? "not-active-status" : "active-status"
        }  `}
        onClick={changeActiveHandler}
      >
        <h5 className="primary-text-3">
          In Progress <span>({props.inProgress || 0})</span>
        </h5>
      </div>
      <div
        className={`sorting-statuses__item ${
          active !== "Live" ? "not-active-status" : "active-status"
        }  `}
        onClick={changeActiveHandler}
      >
        <h5 className="primary-text-3 ">
          Live <span>({props.live || 0})</span>
        </h5>
      </div>
    </div>
  );
};

export default RoadMapStatuses;
