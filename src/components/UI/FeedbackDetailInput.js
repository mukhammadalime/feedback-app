import React from "react";

const FeedbackDetailInput = React.forwardRef((props, ref) => (
  <div className="new-feed__detail">
    <h5 className="primary-text-4">Feedback Detail</h5>
    <p className="body-4">
      Include any specific comments on what should be improved, added, etc.
    </p>
    <textarea
      className={`new-feed__detail--input ${
        props.error && "form-error-outline"
      }`}
      cols="30"
      rows="10"
      ref={ref}
      defaultValue={props.value ? props.value : ""}
    />
    {props.httpError && <h2 className="http-error">{props.httpError}</h2>}
    {props.error && (
      <label className="form-error">
        Description should be at least 20 characters long
      </label>
    )}
  </div>
));

export default FeedbackDetailInput;
