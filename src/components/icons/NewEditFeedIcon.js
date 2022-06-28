import React from "react";

const NewEditFeedIcon = (props) => {
  return (
    <>
      <img
        src={`/assets/shared/icon-${props.type}-feedback.svg`}
        alt=""
        className="new-feed__img"
      />
      <h4 className="primary-text">
        {props.text ? props.text : `Create New Feedback`}
      </h4>
    </>
  );
};

export default NewEditFeedIcon;
