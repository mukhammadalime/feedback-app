import React, { useEffect, useState } from "react";
import SelectedIcon from "../icons/SelectedIcon";

const SelectCategory = (props) => {
  // When editing feedback, currently editing feedback's category will be in the form category
  // When adding new feedback, "Feature" will be the default category
  const category = props.category
    ? props.category[0].toUpperCase() + props.category.substring(1)
    : "Feature";
  const [selected, setSelected] = useState(category);
  const [sortClicked, setSortClicked] = useState(false);

  const showCategories = () => {
    setSortClicked((prevState) => !prevState);
  };

  useEffect(() => {
    props.getCategoryInput(selected);
  }, [props, selected]);

  const selectCategory = (e) => {
    const target = e.target.dataset.type;
    setSelected(target);
    setSortClicked(false);
    props.getCategoryInput(selected);
  };

  const selectCategoryOptions = (
    <div className="sort-box new-feed-sort-box" onClick={selectCategory}>
      <div className="sort-box__item" data-type="Feature">
        Feature
        {selected === "Feature" && <SelectedIcon />}
      </div>
      <div className="sort-box__item" data-type="UI">
        UI
        {selected === "UI" && <SelectedIcon />}
      </div>
      <div className="sort-box__item" data-type="UX">
        UX
        {selected === "UX" && <SelectedIcon />}
      </div>
      <div className="sort-box__item" data-type="Enhancement">
        Enhancement
        {selected === "Enhancement" && <SelectedIcon />}
      </div>
      <div className="sort-box__item" data-type="Bug">
        Bug
        {selected === "Bug" && <SelectedIcon />}
      </div>
    </div>
  );

  return (
    <div className="sorting-input" style={{ zIndex: "100" }}>
      <h5 className="primary-text-4">Category</h5>
      <p className="body-4">Choose a category for your feedback</p>
      <div className="sorting-input--sort">
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

export default SelectCategory;
