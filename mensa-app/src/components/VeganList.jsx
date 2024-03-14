import React, { useState } from "react";
import VeganInfo from "./VeganInfo";
import picture from "../Images/Vegan_1.jpg";
import picture2 from "../Images/Vegan_2.jpg";
import picture3 from "../Images/Vegan3_Linsensuppe.jpeg";
import { Link } from "react-router-dom";

const VeganList = () => {
  const veganInfo = [
    {
      Bild: picture,
      title: "Gnocchi Arrabiata",
      rating: "9",
      path: "Vegan/Gnocchi",
    },
    {
      Bild: picture2,
      title: "Kürbiscremesuppe",
      rating: "7",
      path: "Vegan/Kuerbiscremesuppe",
    },
    {
      Bild: picture3,
      title: "Linsensuppe",
      rating: "6",
      path: "Vegan/Linsensuppe",
    },
  ];
  const [selectedIndex, setIndex] = useState(-1);

  return (
    <div>
      <h1 className="text-center">Vegan</h1>
      <p></p>
      <ul className="list-group">
        {veganInfo.map((item, path, index) => {
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

export default VeganList;
