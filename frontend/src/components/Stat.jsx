import React from "react";

const Stat = ({ stats }) => {
  return (
    <div className="stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat">
          <div className="number">{stat.number}</div>
          <div className="label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stat;
