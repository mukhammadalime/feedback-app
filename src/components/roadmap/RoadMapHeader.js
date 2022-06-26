import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RoadMapHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="road-map__header">
      <div className="road-map__header--left">
        <div className="btn-go-back" style={{ color: "#ffffff" }}>
          <img
            src="/assets/shared/icon-arrow-left.svg"
            alt=""
            onClick={() => {
              navigate(-1);
            }}
          />
          Go back
        </div>
        <h4 className="primary-text" style={{ color: "#ffffff" }}>
          Roadmap
        </h4>
      </div>

      <Link to="/new-feedback" className="btn-purple road-map__add-feedback">
        + Add Feedback
      </Link>
    </div>
  );
};

export default RoadMapHeader;
