import NumberOfFeedbacks from "../utils/NumberOfFeedbacks";
import RoadMapHeader from "./RoadMapHeader";
import RoadMapItemBox from "./RoadMapItemBox";
import RoadMapStatuses from "./RoadMapStatuses";

const RoadMap = () => {
  const { plannedFeedbacks, liveFeedbacks, inProgressFeedbacks } =
    NumberOfFeedbacks();

  return (
    <div className="road-map">
      <RoadMapHeader />

      <RoadMapStatuses
        live={liveFeedbacks.length}
        inProgress={inProgressFeedbacks.length}
        planned={plannedFeedbacks.length}
      />

      <div className="road-map__content">
        <RoadMapItemBox
          key="planned"
          type="Planned"
          info="Ideas prioritized for research"
          lineType="planned-line"
        />
        <RoadMapItemBox
          key="progress"
          type="In-progress"
          info="Currently being developed"
          lineType="progress-line"
        />
        <RoadMapItemBox
          key="live"
          type="Live"
          info="Released features"
          lineType="live-line"
        />
      </div>
    </div>
  );
};

export default RoadMap;
