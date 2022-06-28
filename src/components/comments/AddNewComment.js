import { useRef } from "react";
import { useState } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../backend/api";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const AddNewComment = () => {
  const match = useLocation();
  let feedbackId = match.pathname.split("/")[2];
  const { sendRequest, user, status, error } = useHttp(addComment);
  const [commentError, setCommentError] = useState("");
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

    sendRequest({
      feedbackId,
      content: enteredComment,
      user: user,
    });
    commentInputRef.current.value = "";
  };

  if (status === "pending") {
    return (
      <form className="add-comment">
        <LoadingSpinner />
      </form>
    );
  }

  return (
    <form className="add-comment">
      <h4 className="primary-text-3 add-comment__text">Add Comment</h4>
      <div className="add-comment__textarea-box">
        <textarea
          className={`add-comment__textarea ${
            commentError !== "" && "form-error-outline"
          }`}
          required
          cols="30"
          rows="20"
          ref={commentInputRef}
        />
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
        children=" Post Comment"
      />
      {error && (
        <label className="http-error">
          Could not add comment. Please try again
        </label>
      )}
    </form>
  );
};

export default AddNewComment;
