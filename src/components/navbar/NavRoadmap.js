import React from "react";

const NavRoadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap__name-box">
        <h4 className="roadmap__name primary-text-2">Roadmap</h4>
        <div className="roadmap__view body-3">View</div>
      </div>

      <div className="roadmap__planned">
        <div
          className="roadmap__planned--circle"
          style={{ backgroundColor: "#f49f85" }}
        >
          &nbsp;
        </div>
        <p className="roadmap__planned--name body-1">Planned</p>
        <h4
          className="roadmap__planned--number body-1"
          style={{ fontWeight: "600" }}
        >
          2
        </h4>
      </div>

      <div className="roadmap__planned">
        <div
          className="roadmap__planned--circle"
          style={{ backgroundColor: "#ad1fea" }}
        >
          &nbsp;
        </div>
        <p className="roadmap__planned--name body-1">In-Progress</p>
        <h4
          className="roadmap__planned--number body-1"
          style={{ fontWeight: "600" }}
        >
          3
        </h4>
      </div>

      <div className="roadmap__planned">
        <div
          className="roadmap__planned--circle"
          style={{ backgroundColor: "#62bcfa" }}
        >
          &nbsp;
        </div>
        <p className="roadmap__planned--name body-1">Live</p>
        <h4
          className="roadmap__planned--number body-1"
          style={{ fontWeight: "600" }}
        >
          1
        </h4>
      </div>
    </div>
  );
};

export default NavRoadmap;
