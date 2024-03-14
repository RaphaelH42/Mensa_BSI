import React from "react";

const Bewertung = ({ rating, title, text, author, date }) => {
  return (
    <div>
      <div
        className="card text-dark bg-warning mb-3"
        style={{ marginRight: 10 + "em", marginLeft: 10 + "em" }}
      >
        <div className="card-header">{rating}/10</div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">
            {author},{date}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Bewertung;
