import { useState } from "react";
import SelectedIcon from "../icons/SelectedIcon";

const SelectStatus = (props) => {
  const [selected, setSelected] = useState(props.status);
  const [sortClicked, setSortClicked] = useState(false);

  const showCategories = () => {
    setSortClicked((prevState) => !prevState);
  };

  props.getStatusInput(selected);

  const selectStatus = (e) => {
    const target = e.target.dataset.type;
    setSelected(target);
    setSortClicked(false);
    props.getStatusInput(selected);
  };

  const selectCategoryOptions = (
    <div className="sort-box new-feed-sort-box" onClick={selectStatus}>
      <div className="sort-box__item" data-type="Planned">
        Planned
        {selected === "Planned" && <SelectedIcon />}
      </div>
      <div className="sort-box__item" data-type="Suggestion">
        Suggestion
        {selected === "Suggestion" && <SelectedIcon />}
      </div>
      <div className="sort-box__item" data-type="In-Progress">
        In-Progress
        {selected === "In-Progress" && <SelectedIcon />}
      </div>
      <div className="sort-box__item" data-type="Live">
        Live
        {selected === "Live" && <SelectedIcon />}
      </div>
    </div>
  );

  return (
    <div className="sorting-input">
      <h5 className="primary-text-4">Status</h5>
      <p className="body-4">Choose a status for your feedback</p>
      <div
        className={`sorting-input--sort ${sortClicked && "form-focus-outline"}`}
      >
        <p className="sorting-input--sort--text">{selected}</p>
        <img
          src={`/assets/shared/icon-arrow-${sortClicked ? "up" : "down"}.svg`}
          alt=""
          className="sorting-input--sort--icon"
          onClick={showCategories}
        />
        {sortClicked && selectCategoryOptions}
      </div>
    </div>
  );
};

export default SelectStatus;
