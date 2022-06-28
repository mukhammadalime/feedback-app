import CommentItem from "./CommentItem";

const Comments = (props) => {
  return (
    <div className="comments">
      <h4 className="primary-text-3">
        {props.comments?.length ? props.comments.length : 0} Comments
      </h4>

      {props.comments?.map((comment) => (
        <CommentItem
          content={comment.content}
          replies={comment.replies}
          id={comment.id}
          key={comment.id}
          user={comment.user}
        />
      ))}
    </div>
  );
};

export default Comments;
