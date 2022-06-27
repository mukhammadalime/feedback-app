import { useRef, useState } from "react";

const ReplyBox = (props) => {
  const [replyError, setReplyError] = useState(false);
  const replyInputRef = useRef();

  const postReplyHandler = () => {
    const enteredReply = replyInputRef.current.value;

    if (enteredReply === "") {
      setReplyError(true);
      return;
    }
    props.postReplyHandler(enteredReply);
  };

  return (
    <div className="replying-box">
      <textarea
        className={`replying-box__textarea ${
          replyError && "form-error-outline"
        }`}
        cols="30"
        rows="10"
        placeholder="Please your reply comment here..."
        ref={replyInputRef}
      ></textarea>

      <div className="replying-box__post btn-purple" onClick={postReplyHandler}>
        Post Reply
      </div>
    </div>
  );
};

export default ReplyBox;
