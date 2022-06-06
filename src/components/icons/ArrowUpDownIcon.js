const ArrowUpDownIcon = (props) => {
  return (
    <img
      onClick={props.sortByHandler}
      className="main__header--sorted-icon"
      src={
        props.sortClicked
          ? `assets//shared/icon-arrow-up.png`
          : `assets//shared/icon-arrow-down.png`
      }
      alt=""
    />
  );
};

export default ArrowUpDownIcon;
