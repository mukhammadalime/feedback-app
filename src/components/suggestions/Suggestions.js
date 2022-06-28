import Feedbacks from "../feedbacks/Feedbacks";
import SuggestionsHeader from "./SuggestionsHeader";

const Suggestions = () => {
  return (
    <div className="main">
      <SuggestionsHeader />
      <Feedbacks />
    </div>
  );
};

export default Suggestions;
