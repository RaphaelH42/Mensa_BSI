import React from "react";
import Bewertungskarte from "./Bewertungskarte";
import Bild from "../Images/Schnitzel_Vegetarisch.jpeg";

const Schnitzel = () => {
  const bewertungenLinsenSuppe = [
    {
      rating: "4",
      title: "Pilze und Schnitzel eher enttäuschend",
      text: "Das Schnitzel ist ziemlich trocken. Die Sauce schmeckt auch nicht wirklich nach Pilzen. Es fehlt auch an Gewürzen. Jetzt nicht mein Favorit.",
      author: "Pori H.",
      date: "03.03.24",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center">Schnitzel mit Championsauce und Pommes</h1>
      <div className="row text-center">
        <div className="col-md-6">
          <img src={Bild} className="rounded" width="300px" />
          <p></p>
          <p></p>
        </div>
        <div className="col-md-6">
          <h3>3,05€</h3>
          <h5 className="align-middle">4/10</h5>
          <h5 className="align-middle">
            Enthält Gluten, Weizen, Konservierungsstoffe
          </h5>
        </div>
      </div>
      {bewertungenLinsenSuppe.map((item, index) => {
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

export default Schnitzel;
