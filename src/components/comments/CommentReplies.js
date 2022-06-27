import React from "react";
import CommentReplyItem from "./CommentReplyItem";

const CommentReplies = (props) => {
  return (
    <div className="comment__replies">
      {props.replies.map((reply) => (
        <CommentReplyItem
          key={reply.id}
          id={reply.id}
          commentId={props.commentId}
          content={reply.content}
          replyingTo={reply.replyingTo}
          user={reply.user}
        />
      ))}
    </div>
  );
};

export default CommentReplies;
