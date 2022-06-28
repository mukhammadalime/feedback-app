import useHttp from "../../hooks/use-http";
import FContext from "../../store/Fcontext";
import SortByOptions from "../UI/SortByOptions";
import { getAllFeedbacks } from "../../backend/api";
import ArrowUpDownIcon from "../icons/ArrowUpDownIcon";
import SuggestionsIcon from "../icons/SuggestionsIcon";
import { useContext, useEffect, useState } from "react";
import AddFeedbackButton from "../UI/AddFeedbackButton";

const SuggestionsHeader = () => {
  const [sortClicked, setSortClicked] = useState(false);
  const [selected, setSelected] = useState("Most Upvotes");
  const feedbackContext = useContext(FContext);
  const { sendRequest, data, status, error } = useHttp(getAllFeedbacks);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let filteredData = [];
  if (status === "completed" && !error) {
    filteredData = data.filter((feedback) => {
      return feedbackContext.filteredBy === "all"
        ? feedback
        : feedback.category === feedbackContext.filteredBy;
    });
  }

  const sortByHandler = () => {
    setSortClicked((prevState) => !prevState);
  };

  const selectHandler = function (e) {
    const target = e.target.dataset.type;
    setSelected(target);
    feedbackContext.changeSortedBy(target);
    setSortClicked(false);
  };

  const sortByOptions = (
    <SortByOptions selectHandler={selectHandler} selected={selected} />
  );

  return (
    <header className="main__header">
      <div className="main__header--details">
        <SuggestionsIcon />
        <h3 className="main__header--suggestions">
          {filteredData.length} Suggestions
        </h3>
        <div className="main__header--sort-box">
          {sortClicked && sortByOptions}
          <p className="main__header--sort">Sort by :</p>
          <h4 className="main__header--sorted" onClick={sortByHandler}>
            {selected}
          </h4>
          <ArrowUpDownIcon
            sortByHandler={sortByHandler}
            sortClicked={sortClicked}
          />
        </div>
      </div>
      <AddFeedbackButton />
    </header>
  );
};

export default SuggestionsHeader;
