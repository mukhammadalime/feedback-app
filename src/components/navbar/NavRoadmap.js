import { Link } from "react-router-dom";
import NumberOfFeedbacks from "../utils/NumberOfFeedbacks";

const NavRoadmap = () => {
  const { plannedFeedbacks, liveFeedbacks, inProgressFeedbacks } =
    NumberOfFeedbacks();

  return (
    <div className="roadmap">
      <div className="roadmap__name-box">
        <h4 className="roadmap__name primary-text-2">Roadmap</h4>
        <Link to="/roadmap" className="roadmap__view body-3">
          View
        </Link>
      </div>

      <div className="roadmap__planned">
        <div
          className="roadmap__planned--circle"
          style={{ backgroundColor: "#f49f85" }}
        >
          &nbsp;
        </div>
        <p className="roadmap__planned--name body-1">Planned</p>
        <h4
          className="roadmap__planned--number body-1"
          style={{ fontWeight: "600" }}
        >
          {plannedFeedbacks.length}
        </h4>
      </div>

      <div className="roadmap__planned">
        <div
          className="roadmap__planned--circle"
          style={{ backgroundColor: "#ad1fea" }}
        >
          &nbsp;
        </div>
        <p className="roadmap__planned--name body-1">In-Progress</p>
        <h4
          className="roadmap__planned--number body-1"
          style={{ fontWeight: "600" }}
        >
          {inProgressFeedbacks.length}
        </h4>
      </div>

      <div className="roadmap__planned">
        <div
          className="roadmap__planned--circle"
          style={{ backgroundColor: "#62bcfa" }}
        >
          &nbsp;
        </div>
        <p className="roadmap__planned--name body-1">Live</p>
        <h4
          className="roadmap__planned--number body-1"
          style={{ fontWeight: "600" }}
        >
          {liveFeedbacks.length}
        </h4>
      </div>
    </div>
  );
};

export default NavRoadmap;
