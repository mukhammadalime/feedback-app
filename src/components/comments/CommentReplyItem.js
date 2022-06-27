import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import FContext from "../../store/Fcontext";
import ReplyBox from "./ReplyBox";

const CommentReplyItem = (props) => {
  const match = useLocation();
  const feedbackId = match.pathname.split("/")[2];
  const [showReplyBox, setShowReplyBox] = useState(false);
  const feedbackCtx = useContext(FContext);

  const showReplyBoxHandler = () => {
    setShowReplyBox(true);
  };

  const postReplyHandler = (newReply) => {
    feedbackCtx.addReply({
      feedbackId: Number(feedbackId),
      replyingCommentId: props.commentId,
      content: newReply,
      replyingTo: props.user.username,
    });

    setShowReplyBox(false);
  };

  return (
    <div className="comment">
      <div className="comment__main">
        <img src={props.user.image} alt="" className="comment__img" />

        <div className="comment__user-box">
          <h5 className="comment__name primary-text-4">{props.user.name}</h5>
          <div className="comment__username">@{props.user.username}</div>
        </div>
        <h4 className="comment__reply-btn" onClick={showReplyBoxHandler}>
          Reply
        </h4>

        <p className="comment__content">
          <span className="comment__replied-person">@{props.replyingTo} </span>
          {props.content}
        </p>
      </div>
      {showReplyBox && <ReplyBox postReplyHandler={postReplyHandler} />}
    </div>
  );
};

export default CommentReplyItem;
