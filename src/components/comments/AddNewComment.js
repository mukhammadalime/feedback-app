import React, { useContext, useState } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import FContext from "../../store/Fcontext";

const AddNewComment = () => {
  const match = useLocation();
  let feedbackId = match.pathname.split("/")[2];

  const [commentError, setCommentError] = useState("");
  const feedbackCtx = useContext(FContext);
  const commentInputRef = useRef();

  const addCommentHandler = () => {
    const enteredComment = commentInputRef.current.value;

    if (enteredComment === "") {
      setCommentError("no-comment");
      return;
    }

    if (enteredComment.length > 250) {
      setCommentError("long");
      return;
    }

    feedbackCtx.addComment({
      feedbackId: Number(feedbackId),
      content: enteredComment,
      user: feedbackCtx.currentUser,
    });
    commentInputRef.current.value = "";
  };

  return (
    <form className="add-comment">
      <h4 className="primary-text-3 add-comment__text">Add Comment</h4>

      <div className="add-comment__textarea-box">
        <textarea
          className={`add-comment__textarea ${
            commentError !== "" && "form-error-outline"
          }`}
          required
          id=""
          cols="30"
          rows="20"
          ref={commentInputRef}
        ></textarea>
        {commentError === "long" && (
          <label className="form-error">Please write 250 characters only</label>
        )}
        {commentError === "no-comment" && (
          <label className="form-error">Comment can't be empty</label>
        )}
      </div>

      <p className="add-comment__wordslimit body-1">250 characters</p>
      <div
        className="add-comment__post-btn btn-purple"
        onClick={addCommentHandler}
      >
        Post Comment
      </div>
    </form>
  );
};

export default AddNewComment;
