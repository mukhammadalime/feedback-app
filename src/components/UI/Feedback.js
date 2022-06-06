import React from "react";

const Feedback = (props) => {
  return (
    <div className="feedback" key={props.id}>
      <div className="btn-votes">
        <img
          src="assets/shared/icon-arrow-up.svg"
          alt=""
          className="btn-votes__icon"
        />
        {props.upvotes}
      </div>
      <div className="feedback__content-box">
        <h3 className="feedback__content primary-text-3">{props.title}</h3>
        <p className="body-1 feedback__content--details">{props.description}</p>
      </div>
      <div className="feedback__comment-num-box">
        <img src="assets/shared/icon-comments.svg" alt="" />
        <h5
          className="feedback__comment-num body-1"
          style={{ fontWeight: "600" }}
        >
          {props.comments ? props.comments.length : "0"}
        </h5>
      </div>
      <div className="btn-elements feedback__btn-element">{props.status}</div>
    </div>
  );
};

export default Feedback;
