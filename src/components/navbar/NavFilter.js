import { useContext } from "react";
import FContext from "../../store/Fcontext";

const NavFilter = () => {
  const { changeFilterBy, filteredBy } = useContext(FContext);

  const filterHandler = (e) => {
    if (e.target.className === "nav__filter") return;
    const type = e.target.dataset.type;
    changeFilterBy(type);
  };

  return (
    <div className="nav__filter" onClick={filterHandler}>
      <div
        className={`btn-elements ${filteredBy === "all" && "active"}`}
        data-type={"all"}
        children="All"
      />
      <div
        className={`btn-elements ${filteredBy === "ui" && "active"}`}
        data-type={"ui"}
        children="UI"
      />
      <div
        className={`btn-elements ${filteredBy === "ux" && "active"}`}
        data-type={"ux"}
        children="UX"
      />
      <div
        className={`btn-elements ${filteredBy === "enhancement" && "active"}`}
        data-type={"enhancement"}
        children="Enhancement"
      />
      <div
        className={`btn-elements ${filteredBy === "bug" && "active"}`}
        data-type={"bug"}
        children="Bug"
      />
      <div
        className={`btn-elements ${filteredBy === "feature" && "active"}`}
        data-type={"feature"}
        children="Feature"
      />
    </div>
  );
};

export default NavFilter;
