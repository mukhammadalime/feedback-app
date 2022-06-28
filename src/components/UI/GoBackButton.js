import { useNavigate } from "react-router-dom";

const GoBackButton = ({ color }) => {
  const navigate = useNavigate();
  return (
    <div className="btn-go-back" onClick={() => navigate(-1)} style={color}>
      <img src="/assets/shared/icon-arrow-left.svg" alt="" />
      Go back
    </div>
  );
};

export default GoBackButton;
