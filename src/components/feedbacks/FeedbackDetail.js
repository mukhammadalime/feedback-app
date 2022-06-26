import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FContext from "../../store/Fcontext";
import AddNewComment from "../comments/AddNewComment";
import Comments from "../comments/Comments";
import FeedbackItem from "./FeedbackItem";

const FeedbackDetail = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const { feedbacks } = useContext(FContext);

  const filteredFeedback = feedbacks.find(
    (feedback) => feedback.id === Number(params.feedbackId)
  );

  return (
    <div className="container-detail">
      <div className="detail__header">
        <div
          className="btn-go-back"
          onClick={() => {
            navigate(-1);
          }}
        >
          <img
            src="/assets/shared/icon-arrow-left.svg"
            alt=""
            className="detail__go-back--btn"
          />
          Go back
        </div>

        <Link to={`/edit-feedback/${filteredFeedback.id}`} className="btn-blue">
          Edit Feedback
        </Link>
      </div>

      <FeedbackItem
        key={filteredFeedback.id}
        id={filteredFeedback.id}
        upvotes={filteredFeedback.upvotes}
        title={filteredFeedback.title}
        description={filteredFeedback.description}
        comments={filteredFeedback.comments}
        status={filteredFeedback.status}
      />

      <Comments comments={filteredFeedback.comments} />

      <AddNewComment />
    </div>
  );
};

export default FeedbackDetail;
