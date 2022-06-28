import { Link } from "react-router-dom";

const AddFeedbackButton = ({ margin }) => {
  margin = margin ? { marginTop: "2rem" } : {};
  return (
    <Link to="/new-feedback" className="btn-purple" style={margin}>
      + Add Feedback
    </Link>
  );
};

export default AddFeedbackButton;
