import { useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FContext from "../../store/Fcontext";
import SelectCategory from "../UI/SelectCategory";
import SelectStatus from "../UI/SelectStatus";

const AddOrEditFeedback = (props) => {
  const match = useLocation();
  let pathname = match.pathname.split("/")[1];

  let categoryInput;
  let statusInput;
  const feedbackCtx = useContext(FContext);
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const goBackToSuggestions = () => {
    navigate("/suggestions");
  };

  const goBackToFeedbackDetail = () => {
    navigate(-1);
  };

  const addFeedbackHandler = () => {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCategory = categoryInput.toLowerCase();
    // const enteredStatus = statusInput.toLowerCase();
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

  const editingFeedback = feedbackCtx.feedbacks.find(
    (feedback) => feedback.id === Number(match.pathname.split("/")[2])
  );

  const getCategoryInput = (categoryValue) => {
    categoryInput = categoryValue;
  };

  // This is for editing feedback
  const getStatusInput = (statusValue) => {
    statusInput = statusValue;
  };

  return (
    <div className="container-new-feed">
      <div
        className="btn-go-back"
        onClick={
          pathname === "new-feedback"
            ? goBackToSuggestions
            : goBackToFeedbackDetail
        }
      >
        <img src="/assets/shared/icon-arrow-left.svg" alt="" />
        Go back
      </div>

      <div className="new-feed">
        <img
          src="/assets/shared/icon-edit-feedback.svg"
          alt=""
          className="new-feed__img"
        />
        <h4 className="primary-text">
          {pathname === "new-feedback"
            ? `Create New Feedback`
            : `Editing '${editingFeedback.title}'`}
        </h4>
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
        {pathname === "edit-feedback" && (
          <SelectStatus
            getStatusInput={getStatusInput}
            status={
              editingFeedback.status[0].toUpperCase() +
              editingFeedback.status.substring(1)
            }
          />
        )}
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

        {pathname === "new-feedback" && (
          <div className="new-feed__btns">
            <div className="btn-dark-blue" onClick={goBackToSuggestions}>
              Cancel
            </div>
            <div className="btn-purple" onClick={addFeedbackHandler}>
              Add Feedback
            </div>
          </div>
        )}

        {pathname === "edit-feedback" && (
          <>
            <div className="btn-red edit-feed__delete-btn">Delete</div>
            <div className="new-feed__btns edit-feed__btns">
              <div className="btn-dark-blue" onClick={goBackToFeedbackDetail}>
                Cancel
              </div>
              <div className="btn-purple">Save Changes</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddOrEditFeedback;
