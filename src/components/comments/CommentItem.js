import React, { useContext } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import FContext from "../../store/Fcontext";
import CommentReplies from "./CommentReplies";
import ReplyBox from "./ReplyBox";

const CommentItem = (props) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const feedbackCtx = useContext(FContext);
  const match = useLocation();
  const feedbackId = match.pathname.split("/")[2];
  const replyingCommentId = props.id;

  const showReplyBoxHandler = () => {
    setShowReplyBox(true);
  };

  const postReplyHandler = (replyContent) => {
    feedbackCtx.addReply({
      feedbackId: Number(feedbackId),
      replyingCommentId: Number(replyingCommentId),
      content: replyContent,
      replyingTo: props.user.username,
    });

    setShowReplyBox(false);
  };

  return (
    <div className="comment border-bottom">
      <div className="comment__main">
        <img src={props.user.image} alt="" className="comment__img" />
        <div className="comment__user-box">
          <h5 className="comment__name primary-text-4">{props.user.name}</h5>
          <div className="comment__username">@{props.user.username}</div>
        </div>
        <h4 className="comment__reply-btn" onClick={showReplyBoxHandler}>
          Reply
        </h4>
        <p className="comment__content">{props.content}</p>
      </div>
      {showReplyBox && <ReplyBox postReplyHandler={postReplyHandler} />}
      {props.replies && (
        <CommentReplies replies={props.replies} commentId={props.id} />
      )}
    </div>
  );
};

export default CommentItem;
