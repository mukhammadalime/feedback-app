import { useState } from "react";
import { useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FContext from "../../store/Fcontext";
import SelectCategory from "../UI/SelectCategory";
import SelectStatus from "../UI/SelectStatus";

const AddOrEditFeedback = (props) => {
  const [errors, setErrors] = useState({
    titleError: false,
    descriptionError: false,
  });

  const match = useLocation();
  let pathname = match.pathname.split("/")[1];

  let categoryInput;
  let statusInput;
  const feedbackCtx = useContext(FContext);
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const goBack = () => {
    navigate(-1);
  };

  // It is for finding editing feedback and put its title in the form
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

  // Add new feedback
  const addFeedbackHandler = () => {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCategory = categoryInput.toLowerCase();
    const id = feedbackCtx.feedbacks.length + 1;

    if (enteredTitle.length < 10) {
      setErrors({ descriptionError: false, titleError: true });
      return;
    }

    if (enteredDescription === "" || enteredDescription.length < 20) {
      setErrors({ titleError: false, descriptionError: true });
      return;
    }

    feedbackCtx.addNewFeedback({
      id,
      title: enteredTitle,
      category: enteredCategory,
      upvotes: 0,
      status: "suggestion",
      description: enteredDescription,
      comments: [],
    });

    navigate(-1);
  };

  // Edit current feedback
  const editFeedbackHandler = () => {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredStatus = statusInput.toLowerCase();
    const enteredCategory = categoryInput.toLowerCase();

    if (enteredTitle.length < 10) {
      setErrors({ descriptionError: false, titleError: true });
      return;
    }

    if (enteredDescription === "" || enteredDescription.length < 20) {
      setErrors({ titleError: false, descriptionError: true });
      return;
    }

    feedbackCtx.editFeedback({
      id: editingFeedback.id,
      title: enteredTitle,
      category: enteredCategory,
      status: enteredStatus,
      description: enteredDescription,
    });

    navigate(-1);
  };

  const deleteFeedbackHandler = () => {
    feedbackCtx.deleteFeedback(editingFeedback.id);
    navigate("/suggestions");
  };

  return (
    <div className="container-new-feed">
      <div className="btn-go-back" onClick={goBack}>
        <img src="/assets/shared/icon-arrow-left.svg" alt="" />
        Go back
      </div>

      <div className="new-feed">
        <img
          src={`/assets/shared/icon-${
            pathname === "edit-feedback" ? "edit" : "new"
          }-feedback.svg`}
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
            id="title"
            className={`new-feed__title--input ${
              errors.titleError && "form-error-outline"
            }`}
            ref={titleInputRef}
            defaultValue={
              pathname === "edit-feedback" ? editingFeedback.title : ""
            }
          />
          {errors.titleError && (
            <label className="form-error" htmlFor="title">
              Title should be at least 10 characteres
            </label>
          )}
        </div>

        {pathname === "new-feedback" && (
          <SelectCategory getCategoryInput={getCategoryInput} />
        )}

        {pathname === "edit-feedback" && (
          <SelectCategory
            getCategoryInput={getCategoryInput}
            category={editingFeedback.category}
          />
        )}

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
            className={`new-feed__detail--input ${
              errors.descriptionError && "form-error-outline"
            }`}
            cols="30"
            rows="10"
            ref={descriptionInputRef}
            defaultValue={
              pathname === "edit-feedback" ? editingFeedback.description : ""
            }
          ></textarea>
          {errors.descriptionError && (
            <label className="form-error">
              Description should be at least 20 characters long
            </label>
          )}
        </div>

        {pathname === "new-feedback" && (
          <div className="new-feed__btns">
            <div className="btn-dark-blue" onClick={goBack}>
              Cancel
            </div>
            <div className="btn-purple" onClick={addFeedbackHandler}>
              Add Feedback
            </div>
          </div>
        )}

        {pathname === "edit-feedback" && (
          <>
            <div
              className="btn-red edit-feed__delete-btn"
              onClick={deleteFeedbackHandler}
            >
              Delete
            </div>
            <div className="new-feed__btns edit-feed__btns">
              <div className="btn-dark-blue" onClick={goBack}>
                Cancel
              </div>
              <div className="btn-purple" onClick={editFeedbackHandler}>
                Save Changes
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddOrEditFeedback;
