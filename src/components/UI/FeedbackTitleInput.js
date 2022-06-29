import React from "react";

const FeedbackTitleInput = React.forwardRef((props, ref) => (
  <div className="new-feed__title">
    <h5 className="primary-text-4">Feedback Title</h5>
    <p className="body-4">Add a short, descriptive headline</p>
    <input
      type="text"
      id="title"
      className={`new-feed__title--input ${
        props.error && "form-error-outline"
      }`}
      ref={ref}
      defaultValue={props.value ? props.value : ""}
    />
    {props.error && (
      <label className="form-error" htmlFor="title">
        Title should be between 10 and 50 characteres.
      </label>
    )}
  </div>
));

export default FeedbackTitleInput;
