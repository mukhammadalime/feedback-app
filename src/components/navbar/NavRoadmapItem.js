const NavRoadmapItem = ({ color, items }) => {
  return (
    <div className="roadmap__planned">
      <div
        className="roadmap__planned--circle"
        style={{ backgroundColor: color }}
      >
        &nbsp;
      </div>
      <p className="roadmap__planned--name body-1">Planned</p>
      <h4
        className="roadmap__planned--number body-1"
        style={{ fontWeight: "600" }}
        children={items.length}
      />
    </div>
  );
};

export default NavRoadmapItem;
