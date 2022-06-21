import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FContext from "../../store/Fcontext";
import SelectCategory from "../UI/SelectCategory";

const AddNewFeedback = () => {
  let categoryInput;
  const feedbackCtx = useContext(FContext);
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const goBack = () => {
    navigate("/suggestions");
  };

  const addFeedbackHandler = () => {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCategory = categoryInput.toLowerCase();
    const id = feedbackCtx.feedbacks.length + 1;

    feedbackCtx.addNewFeedback({
      id,
      title: enteredTitle,
      category: enteredCategory,
      upvotes: 0,
      status: "suggestion",
      description: enteredDescription,
      comments: [],
    });

    navigate("/suggestions");
  };

  const getCategoryInput = (categoryValue) => {
    categoryInput = categoryValue;
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
          <input
            type="text"
            className="new-feed__title--input"
            ref={titleInputRef}
          />
        </div>
        <SelectCategory getCategoryInput={getCategoryInput} />
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
            ref={descriptionInputRef}
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
