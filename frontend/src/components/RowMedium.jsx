import React from "react";

const RowMedium = ({works}) => {
  return (
    <div className="row medium-up-3 large-up-4">
      {works.map((work, index) => (
        <div key={index} className="column">
          <img className="thumbnail" src={work.image} alt="Recent Work" />
        </div>
      ))}
    </div>
  );
};

export default RowMedium;
