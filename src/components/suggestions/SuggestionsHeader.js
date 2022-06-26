import React, { useContext, useState } from "react";
import FContext from "../../store/Fcontext";
import ArrowUpDownIcon from "../icons/ArrowUpDownIcon";
import SelectedIcon from "../icons/SelectedIcon";
import SuggestionsIcon from "../icons/SuggestionsIcon";
import AddFeedbackButton from "../UI/AddFeedbackButton";

const SuggestionsHeader = (props) => {
  const [sortClicked, setSortClicked] = useState(false);
  const [selected, setSelected] = useState("Most Upvotes");
  const feedbackContext = useContext(FContext);

  let filteredData = feedbackContext.feedbacks.filter((feedback) => {
    return feedbackContext.filteredBy === "all"
      ? feedback
      : feedback.category === feedbackContext.filteredBy;
  });

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
    <div className="sort-box" onClick={selectHandler}>
      <div className="sort-box__item" data-type="Most Upvotes">
        Most Upvotes
        {selected === "Most Upvotes" && <SelectedIcon />}
      </div>
      <div className="sort-box__item" data-type="Least Upvotes">
        Least Upvotes
        {selected === "Least Upvotes" && <SelectedIcon />}
      </div>
      <div className="sort-box__item" data-type="Most Comments">
        Most Comments
        {selected === "Most Comments" && <SelectedIcon />}
      </div>
      <div className="sort-box__item" data-type="Least Comments">
        Least Comments
        {selected === "Least Comments" && <SelectedIcon />}
      </div>
    </div>
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
