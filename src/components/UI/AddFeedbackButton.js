import { Link } from "react-router-dom";

const AddFeedbackButton = () => {
  return (
    <Link to="/new-feedback" className="btn-purple">
      + Add Feedback
    </Link>
  );
};

export default AddFeedbackButton;
