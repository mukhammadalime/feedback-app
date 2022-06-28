import { useState } from "react";
import ReplyBox from "./ReplyBox";
import useHttp from "../../hooks/use-http";
import { addReply } from "../../backend/api";
import CommentReplies from "./CommentReplies";
import { useLocation } from "react-router-dom";

const CommentItem = (props) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const { sendRequest: addReplyHandler, user } = useHttp(addReply);
  const match = useLocation();
  const feedbackId = match.pathname.split("/")[2];
  const replyingCommentId = props.id;

  const showReplyBoxHandler = () => {
    setShowReplyBox(true);
  };

  const postReplyHandler = (replyContent) => {
    addReplyHandler({
      feedbackId,
      replyingCommentId: Number(replyingCommentId),
      content: replyContent,
      replyingTo: props.user.username,
      user: user,
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
