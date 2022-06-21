import { Link } from "react-router-dom";
import IllustrationEmptyIcon from "../icons/IllustrationEmptyIcon";

const EmptySuggestions = () => {
  return (
    <div className="main-empty">
      <div className="main-empty__content">
        <IllustrationEmptyIcon />
        <h4 className="primary-text">There is no feedback yet.</h4>
        <p className="body-1" style={{ textAlign: "center" }}>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Link
          to="/new-feedback"
          className="btn-purple"
          style={{ marginTop: "2rem" }}
        >
          + Add Feedback
        </Link>
      </div>
    </div>
  );
};

export default EmptySuggestions;
