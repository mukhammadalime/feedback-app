import { useRef } from "react";
import { useState } from "react";
import useHttp from "../../hooks/use-http";
import GoBackButton from "../UI/GoBackButton";
import { useNavigate } from "react-router-dom";
import { addFeedback } from "../../backend/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import SelectCategory from "../UI/SelectCategory";
import NewEditFeedIcon from "../icons/NewEditFeedIcon";
import FeedbackTitleInput from "../UI/FeedbackTitleInput";
import FeedbackDetailInput from "../UI/FeedbackDetailInput";

const AddOrEditFeedback = () => {
  const [errors, setErrors] = useState({
    titleError: false,
    descriptionError: false,
  });
  const { sendRequest, status, error } = useHttp(addFeedback);
  let categoryInput;
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  if (status === "pending") {
    return (
      <div className="new-feed">
        <LoadingSpinner />
      </div>
    );
  }

  const getCategoryInput = (categoryValue) => {
    categoryInput = categoryValue;
  };

  // Add new feedback
  const addFeedbackHandler = () => {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCategory = categoryInput.toLowerCase();

    if (enteredTitle.length < 10 || enteredTitle.length > 50) {
      setErrors({ descriptionError: false, titleError: true });
      return;
    }
    if (enteredDescription === "" || enteredDescription.length < 15) {
      setErrors({ titleError: false, descriptionError: true });
      return;
    }

    sendRequest({
      title: enteredTitle,
      category: enteredCategory,
      upvotes: 0,
      status: "suggestion",
      description: enteredDescription,
      comments: [],
    });
  };

  if (status === "completed") navigate(-1);

  return (
    <div className="container-new-feed">
      <GoBackButton />
      <div className="new-feed">
        <NewEditFeedIcon type="new" />
        <FeedbackTitleInput error={errors.titleError} ref={titleInputRef} />
        <SelectCategory getCategoryInput={getCategoryInput} />
        <FeedbackDetailInput
          error={errors.descriptionError}
          httpError={error}
          ref={descriptionInputRef}
        />

        <div className="new-feed__btns">
          <div className="btn-dark-blue" onClick={() => navigate(-1)}>
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
export default AddOrEditFeedback;
