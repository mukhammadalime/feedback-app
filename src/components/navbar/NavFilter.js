import React, { useContext } from "react";
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
      >
        All
      </div>
      <div
        className={`btn-elements ${filteredBy === "ui" && "active"}`}
        data-type={"ui"}
      >
        UI
      </div>
      <div
        className={`btn-elements ${filteredBy === "ux" && "active"}`}
        data-type={"ux"}
      >
        UX
      </div>
      <div
        className={`btn-elements ${filteredBy === "enhancement" && "active"}`}
        data-type={"enhancement"}
      >
        Enhancement
      </div>
      <div
        className={`btn-elements ${filteredBy === "bug" && "active"}`}
        data-type={"bug"}
      >
        Bug
      </div>
      <div
        className={`btn-elements ${filteredBy === "feature" && "active"}`}
        data-type={"feature"}
      >
        Feature
      </div>
    </div>
  );
};

export default NavFilter;
