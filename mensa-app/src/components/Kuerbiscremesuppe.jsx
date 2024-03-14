import React from "react";
import Bewertungskarte from "./Bewertungskarte";
import Bild from "../Images/Vegan_2.jpg";

const Kuerbiscremesuppe = () => {
  const bewertungenKuerbiscremesuppe = [
    {
      rating: "6",
      title: "Einer der besseren Suppen",
      text: "Die Mensa bietet oft Suppen an, die ziemlich mies sind. Die ist hingegen im Vergleich ganz gut. Nicht mega, aber solide",
      author: "Petra L.",
      date: "17.02.24",
    },
    {
      rating: "5",
      title: "Solide",
      text: "Ist halt ne Suppe.",
      author: "Su W.",
      date: "15.02.24",
    },
    {
      rating: "8",
      title: "Unschlagbares Essen für den Preis",
      text: "Das Essen schmeckt wirklich richtig gut und ist für den Preis echt nicht zu schlagen",
      author: "Horst P.",
      date: "01.02.24",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center">Kürbiscremesuppe</h1>
      <div className="row text-center">
        <div className="col-md-6">
          <img src={Bild} className="rounded" width="300px" />
          <p></p>
          <p></p>
        </div>
        <div className="col-md-6">
          <h3>1,80€</h3>
          <h5 className="align-middle">6/10</h5>
          <h5 className="align-middle">
            Enthält Gluten, Hafer, Roggen, Weizen, Soja
          </h5>
        </div>
      </div>
      {bewertungenKuerbiscremesuppe.map((item, index) => {
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

export default Kuerbiscremesuppe;
