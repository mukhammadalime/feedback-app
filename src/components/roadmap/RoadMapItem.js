import { Link } from "react-router-dom";

const RoadMapItem = (props) => {
  return (
    <div className={`status ${props.lineType}`}>
      <div className="status__icon-box">
        <div className={`status__icon ${props.status}`}>&nbsp;</div>
        <p className="status__name body-1">
          {props.status[0].toUpperCase() + props.status.substring(1)}
        </p>
      </div>
      <div className="status__content">
        <h3 className="primary-text-3 status__content--name">{props.title}</h3>
        <p className="body-1">{props.description}</p>
      </div>
      <div className="status__type btn-elements">{props.category}</div>

      <div className="status__upvote btn-votes">
        <img
          className="status__upvote--icon"
          src="assets/shared/icon-arrow-up.svg"
          alt=""
        />
        {props.upvotes}
      </div>

      <Link
        to={`/feedback-detail/${props.id}`}
        className="status__comments--box"
      >
        <img src="assets/shared/icon-comments.svg" alt="" />
        <h5
          className="status__comments--num body-1"
          style={{ fontWeight: "600" }}
          children={props.commentsLength ? props.commentsLength : 0}
        />
      </Link>
    </div>
  );
};

export default RoadMapItem;
