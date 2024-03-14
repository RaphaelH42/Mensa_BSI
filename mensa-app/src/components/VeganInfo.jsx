import React from "react";

const VeganInfo = ({ Bild, title, rating, onClick }) => {
  return (
    <div className="container" onClick={onClick}>
      <div className="row text-center">
        <div className="col-md-6">
          <img src={Bild} className="rounded" width="300px" />
        </div>
        <div className="col-md-6">
          <h3 className="text-dark">{title}</h3>
          <h5 className="align-middle text-dark">{rating}/10</h5>
        </div>
      </div>
    </div>
  );
};

export default VeganInfo;
