import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Comments from "../comments/Comments";
import GoBackButton from "../UI/GoBackButton";
import LoadingSpinner from "../UI/LoadingSpinner";
import { Link, useParams } from "react-router-dom";
import FeedbackItem from "../feedbacks/FeedbackItem";
import { getFeedbackDetail } from "../../backend/api";
import AddNewComment from "../comments/AddNewComment";

const FeedbackDetail = () => {
  const params = useParams();
  const { sendRequest, data: feed, error, status } = useHttp(getFeedbackDetail);

  useEffect(() => {
    sendRequest(params.feedbackId);
  }, [params.feedbackId, sendRequest]);

  if (status === "pending") {
    return (
      <div className="container-detail">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-detail">
        <h1 style={{ margin: "0 auto" }} children={error} />
      </div>
    );
  }

  if (status === "completed" && !error) {
    return (
      <div className="container-detail">
        <div className="detail__header">
          <GoBackButton />
          <Link to={`/edit-feedback/${feed.id}`} className="btn-blue">
            Edit Feedback
          </Link>
        </div>

        <FeedbackItem
          key={feed.id}
          id={feed.id}
          upvotes={feed.upvotes}
          title={feed.title}
          description={feed.description}
          comments={feed.comments}
          status={feed.status}
        />
        <Comments comments={feed.comments} />
        <AddNewComment />
      </div>
    );
  }
};

export default FeedbackDetail;
