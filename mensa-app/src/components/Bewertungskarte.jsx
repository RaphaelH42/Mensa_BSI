import React from "react";
import Bewertung from "./Bewertung";

const Bewertungskarte = ({ rating, title, text, author, date }) => {
  return (
    <>
      <Bewertung
        rating={rating}
        title={title}
        text={text}
        author={author}
        date={date}
      ></Bewertung>
    </>
  );
};

export default Bewertungskarte;
