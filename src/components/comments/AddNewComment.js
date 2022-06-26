import React from "react";

const AddNewComment = () => {
  return (
    <form className="add-comment">
      <h4 className="primary-text-3 add-comment__text">Add Comment</h4>
      {/* <!-- <input  type="textarea" className="add-comment__textarea" placeholder="Typre your comment here"> --> */}

      <textarea
        className="add-comment__textarea"
        name=""
        required
        id=""
        cols="30"
        rows="10"
      ></textarea>

      <p className="add-comment__wordslimit body-1">250 characters</p>
      <div className="add-comment__post-btn btn-purple">Post Comment</div>
    </form>
  );
};

export default AddNewComment;
