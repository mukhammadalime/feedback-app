import useHttp from "../../hooks/use-http";
import GoBackButton from "../UI/GoBackButton";
import SelectStatus from "../UI/SelectStatus";
import LoadingSpinner from "../UI/LoadingSpinner";
import SelectCategory from "../UI/SelectCategory";
import { useEffect, useState, useRef } from "react";
import NewEditFeedIcon from "../icons/NewEditFeedIcon";
import FeedbackTitleInput from "../UI/FeedbackTitleInput";
import { useNavigate, useLocation } from "react-router-dom";
import FeedbackDetailInput from "../UI/FeedbackDetailInput";
import {
  deleteFeedback,
  editFeedback,
  getAllFeedbacks,
} from "../../backend/api";

const AddOrEditFeedback = () => {
  const [errors, setErrors] = useState({
    titleError: false,
    descriptionError: false,
  });
  const { sendRequest: deleteCurrentFeedback } = useHttp(deleteFeedback);
  const { sendRequest: editCurrentFeedback } = useHttp(editFeedback);
  const {
    sendRequest: getFeedbacks,
    status,
    error,
    data: loadedFeedbacks,
  } = useHttp(getAllFeedbacks);

  useEffect(() => {
    getFeedbacks();
  }, [getFeedbacks]);

  const match = useLocation();
  let categoryInput;
  let statusInput;
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  if (status === "pending") {
    return (
      <div className="container-new-feed">
        <LoadingSpinner />
      </div>
    );
  }

  const getCategoryInput = (categoryValue) => (categoryInput = categoryValue);
  const getStatusInput = (statusValue) => (statusInput = statusValue);

  // Edit current feedback
  const editFeedbackHandler = () => {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredStatus = statusInput.toLowerCase();
    const enteredCategory = categoryInput.toLowerCase();

    if (enteredTitle.length < 5) {
      setErrors({ descriptionError: false, titleError: true });
      return;
    }

    if (enteredDescription === "" || enteredDescription.length < 20) {
      setErrors({ titleError: false, descriptionError: true });
      return;
    }

    editCurrentFeedback({
      id: match.pathname.split("/")[2],
      title: enteredTitle,
      category: enteredCategory,
      status: enteredStatus,
      description: enteredDescription,
    });

    navigate(-1);
  };

  // Delete current feedback
  const deleteFeedbackHandler = () => {
    deleteCurrentFeedback(match.pathname.split("/")[2]);
    navigate("/suggestions");
  };

  if (status === "completed") {
    // It is for finding editing feedback and put its title in the form
    const editingFeedback = loadedFeedbacks.find(
      (feedback) => feedback.id === match.pathname.split("/")[2]
    );
    return (
      <div className="container-new-feed">
        <GoBackButton />
        <div className="new-feed">
          <NewEditFeedIcon
            type="edit"
            text={`Editing '${editingFeedback.title}'`}
          />
          <FeedbackTitleInput
            error={errors.titleError}
            ref={titleInputRef}
            value={editingFeedback.title}
          />
          <SelectCategory
            getCategoryInput={getCategoryInput}
            category={editingFeedback.category}
          />
          <SelectStatus
            getStatusInput={getStatusInput}
            status={
              editingFeedback.status[0].toUpperCase() +
              editingFeedback.status.substring(1)
            }
          />
          <FeedbackDetailInput
            error={errors.descriptionError}
            httpError={error}
            ref={descriptionInputRef}
            value={editingFeedback.description}
          />
          <div
            className="btn-red edit-feed__delete-btn"
            onClick={deleteFeedbackHandler}
            children="Delete"
          />
          <div className="new-feed__btns edit-feed__btns">
            <div
              className="btn-dark-blue"
              onClick={() => navigate(-1)}
              children="Cancel"
            />
            <div className="btn-purple" onClick={editFeedbackHandler}>
              Save Changes
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AddOrEditFeedback;
