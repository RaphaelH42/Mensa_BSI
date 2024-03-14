import React from "react";
import Bewertungskarte from "./Bewertungskarte";
import Bild from "../Images/Vegan_1.jpg";

const Gnocchi = () => {
  const bewertungenGnocchi = [
    {
      rating: "9",
      title: "Beste Gnocchi",
      text: "Ich habe schon mehrfach selber versucht Gnocchi zu machen und sie schmecken nie so gut wie hier. Es ist einfach toll, dass wir so ein tolles Angebot bei der Mensa haben.",
      author: "Ha K.",
      date: "09.02.24",
    },
    {
      rating: "9",
      title: "Mega gut",
      text: "Ich liebe diese Gnocchi einfach. Noch nie sowas Tolles gegessen!",
      author: "Gro H.",
      date: "31.01.24",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center">Gnocchi Arrabiata</h1>
      <div className="row text-center">
        <div className="col-md-6">
          <img src={Bild} className="rounded" width="300px" />
          <p></p>
          <p></p>
        </div>
        <div className="col-md-6">
          <h3>2,60€</h3>
          <h5 className="align-middle">9/10</h5>
          <h5 className="align-middle">
            Enthält Farbstoff, Konservierungsstoffe, Antioxidationsmittel,
            Gluten, Weizen
          </h5>
        </div>
      </div>
      {bewertungenGnocchi.map((item, index) => {
        return (
          <Bewertungskarte
            rating={item.rating}
            title={item.title}
            text={item.text}
            author={item.author}
            date={item.date}
          ></Bewertungskarte>
        );
      })}
    </div>
  );
};

export default Gnocchi;
