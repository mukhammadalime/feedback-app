import React from "react";

const CommentReplyItem = (props) => {
  return (
    <div className="comment">
      <div className="comment__main">
        <img src={props.user.image} alt="" className="comment__img" />

        <div className="comment__user-box">
          <h5 className="comment__name primary-text-4">{props.user.name}</h5>
          <div className="comment__username">@{props.user.username}</div>
        </div>
        <h4 className="comment__reply-btn">Reply</h4>

        <p className="comment__content">
          <span className="comment__replied-person">@{props.replyingTo} </span>
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default CommentReplyItem;
