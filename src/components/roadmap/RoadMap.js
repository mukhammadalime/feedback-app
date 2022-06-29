import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import RoadMapHeader from "./RoadMapHeader";
import RoadMapItemBox from "./RoadMapItemBox";
import RoadMapStatuses from "./RoadMapStatuses";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getAllFeedbacks } from "../../backend/api";
import NumberOfFeedbacks from "../utils/NumberOfFeedbacks";

const RoadMap = () => {
  const data = NumberOfFeedbacks();
  const { sendRequest, status } = useHttp(getAllFeedbacks);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="road-map">
        <LoadingSpinner />
      </div>
    );
  }

  // Getting feedbacks from firebase takes time. So we need not to run the rest of the component untill data comes. Otherwise, we will get an error
  if (!data || data === undefined) return;

  return (
    <div className="road-map">
      <RoadMapHeader />

      <RoadMapStatuses
        live={data.liveFeedbacks.length}
        inProgress={data.inProgressFeedbacks.length}
        planned={data.plannedFeedbacks.length}
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
