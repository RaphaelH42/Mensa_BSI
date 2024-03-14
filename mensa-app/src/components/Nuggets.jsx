import React from "react";
import Bewertungskarte from "./Bewertungskarte";
import Bild from "../Images/Nuggets.jpeg";

const Nuggets = () => {
  const bewertungenNuggets = [
    {
      rating: "8",
      title: "Ich liebe diese Nuggets!!",
      text: "Diese Nuggets sind mein absolutes Lieblingsessen in der Mensa. Einfach toll!",
      author: "Nina v. W.",
      date: "10.03.24",
    },
    {
      rating: "2",
      title: "Viel zu trocken",
      text: "Pommes und diese Nuggets sind viel, viel zu trocken. Ich musste mir Salatdressing dazunehmen, damit es einigermaßen erträglich ist.",
      author: "Hank L.",
      date: "01.03.24",
    },
    {
      rating: "4",
      title: "Net so dolle",
      text: "Diese Nuggets haben keine Geschmack und die Pommes sind ganz okay.",
      author: "Anna Q.",
      date: "20.02.24",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center">Hähnchennuggets mit Pommes</h1>
      <div className="row text-center">
        <div className="col-md-6">
          <img src={Bild} className="rounded" width="300px" />
          <p></p>
          <p></p>
        </div>
        <div className="col-md-6">
          <h3>2,60€</h3>
          <h5 className="align-middle">5/10</h5>
          <h5 className="align-middle">
            Enthält Farbstoff, Konservierungsstoffe, Antioxidationsmittel,
            Gluten, Weizen
          </h5>
        </div>
      </div>
      {bewertungenNuggets.map((item, index) => {
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

export default Nuggets;
