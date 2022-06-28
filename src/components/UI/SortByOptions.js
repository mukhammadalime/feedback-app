import SelectedIcon from "../icons/SelectedIcon";

const SortByOptions = ({ selected, selectHandler }) => {
  return (
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
};

export default SortByOptions;
