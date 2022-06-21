import { useNavigate } from "react-router-dom";
import SelectCategory from "../UI/SelectCategory";

const AddNewFeedback = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/suggestions");
  };

  const addFeedbackHandler = () => {
    navigate("/suggestions");
  };

  return (
    <div className="container-new-feed">
      <div className="btn-go-back" onClick={goBack}>
        <img src="assets/shared/icon-arrow-left.svg" alt="" />
        Go back
      </div>

      <div className="new-feed">
        <img
          src="assets/shared/icon-new-feedback.svg"
          alt=""
          className="new-feed__img"
        />
        <h4 className="primary-text">Create New Feedback</h4>
        <div className="new-feed__title">
          <h5 className="primary-text-4">Feedback Title</h5>
          <p className="body-4">Add a short, descriptive headline</p>
          <input type="text" className="new-feed__title--input" />
        </div>
        <SelectCategory />
        <div className="new-feed__detail">
          <h5 className="primary-text-4">Feedback Detail</h5>
          <p className="body-4">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea
            className="new-feed__detail--input"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="new-feed__btns">
          <div className="btn-dark-blue" onClick={goBack}>
            Cancel
          </div>
          <div className="btn-purple" onClick={addFeedbackHandler}>
            Add Feedback
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewFeedback;
