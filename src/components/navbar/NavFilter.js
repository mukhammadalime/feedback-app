import React, { useContext, useState } from "react";
import FContext from "../../store/Fcontext";

const NavFilter = () => {
  const { changeFilterBy } = useContext(FContext);
  const [selected, setSelected] = useState("all");

  const filterHandler = (e) => {
    if (e.target.className === "nav__filter") return;
    const type = e.target.dataset.type;
    changeFilterBy(type);
    setSelected(type);
  };

  return (
    <div className="nav__filter" onClick={filterHandler}>
      <div
        className={`btn-elements ${selected === "all" && "active"}`}
        data-type={"all"}
      >
        All
      </div>
      <div
        className={`btn-elements ${selected === "ui" && "active"}`}
        data-type={"ui"}
      >
        UI
      </div>
      <div
        className={`btn-elements ${selected === "ux" && "active"}`}
        data-type={"ux"}
      >
        UX
      </div>
      <div
        className={`btn-elements ${selected === "enhancement" && "active"}`}
        data-type={"enhancement"}
      >
        Enhancement
      </div>
      <div
        className={`btn-elements ${selected === "bug" && "active"}`}
        data-type={"bug"}
      >
        Bug
      </div>
      <div
        className={`btn-elements ${selected === "feature" && "active"}`}
        data-type={"feature"}
      >
        Feature
      </div>
    </div>
  );
};

export default NavFilter;
