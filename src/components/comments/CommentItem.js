import React from "react";
import CommentReplies from "./CommentReplies";

const CommentItem = (props) => {
  return (
    <div className="comment border-bottom">
      <div className="comment__main">
        <img src={props.user.image} alt="" className="comment__img" />
        <div className="comment__user-box">
          <h5 className="comment__name primary-text-4">{props.user.name}</h5>
          <div className="comment__username">@{props.user.username}</div>
        </div>
        <h4 className="comment__reply-btn">Reply</h4>
        <p className="comment__content">{props.content}</p>
      </div>
      {props.replies && <CommentReplies replies={props.replies} />}
    </div>
  );
};

export default CommentItem;
