import AddFeedbackButton from "../UI/AddFeedbackButton";
import IllustrationEmptyIcon from "../icons/IllustrationEmptyIcon";

const EmptySuggestions = () => {
  return (
    <div className="main-empty">
      <div className="main-empty__content">
        <IllustrationEmptyIcon />
        <h4 className="primary-text" children="There is no feedback yet." />
        <p className="body-1" style={{ textAlign: "center" }}>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <AddFeedbackButton margin={true} />
      </div>
    </div>
  );
};

export default EmptySuggestions;
