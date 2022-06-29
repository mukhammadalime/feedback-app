import GoBackButton from "../UI/GoBackButton";
import AddFeedbackButton from "../UI/AddFeedbackButton";

const RoadMapHeader = (props) => {
  return (
    <>
      <div className="road-map__header">
        <div className="road-map__header--left">
          <GoBackButton color={{ color: "#ffffff" }} />
          <h4 className="primary-text" style={{ color: "#ffffff" }}>
            Roadmap
          </h4>
        </div>
        <AddFeedbackButton />
      </div>
      <>{props.children}</>
    </>
  );
};

export default RoadMapHeader;
