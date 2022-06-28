import { Link } from "react-router-dom";
import NavRoadmapItem from "./NavRoadmapItem";
import NumberOfFeedbacks from "../utils/NumberOfFeedbacks";

const NavRoadmap = () => {
  const data = NumberOfFeedbacks();
  if (!data || data === undefined) return;
  return (
    <div className="roadmap">
      <div className="roadmap__name-box">
        <h4 className="roadmap__name primary-text-2">Roadmap</h4>
        <Link to="/roadmap" className="roadmap__view body-3">
          View
        </Link>
      </div>
      <NavRoadmapItem color="#f49f85" items={data.plannedFeedbacks} />
      <NavRoadmapItem color="#ad1fea" items={data.inProgressFeedbacks} />
      <NavRoadmapItem color="#62bcfa" items={data.liveFeedbacks} />
    </div>
  );
};

export default NavRoadmap;
