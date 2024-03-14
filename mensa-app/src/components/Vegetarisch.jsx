import React, { useState } from "react";
import VeganInfo from "./VeganInfo";
import picture from "../Images/Schnitzel_Vegetarisch.jpeg";
import { Link } from "react-router-dom";

const Vegetarisch = () => {
  const vegetarischInfo = [
    {
      Bild: picture,
      title: "Schnitzel mit Championsauce und Pommes",
      rating: "4",
      path: "Vegetarisch/Schnitzel",
    },
  ];
  const [selectedIndex, setIndex] = useState(-1);

  return (
    <div>
      <h1 className="text-center">Vegetarisch</h1>
      <p></p>
      <ul className="list-group">
        {vegetarischInfo.map((item, path, index) => {
          return (
            <li
              className={
                selectedIndex == index
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              <Link to={"/" + item.path} style={{ textDecoration: "none" }}>
                <VeganInfo
                  Bild={item.Bild}
                  title={item.title}
                  rating={item.rating}
                  key={index}
                  onClick={() => {}}
                ></VeganInfo>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Vegetarisch;
