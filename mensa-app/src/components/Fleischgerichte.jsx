import React, { useState } from "react";
import VeganInfo from "./VeganInfo";
import picture from "../Images/Nuggets.jpeg";
import { Link } from "react-router-dom";

const Fleischgerichte = () => {
  const FleischInfo = [
    {
      Bild: picture,
      title: "Hähnchennuggets mit Pommes",
      rating: "5",
      path: "Fleischgerichte/Nuggets",
    },
  ];
  const [selectedIndex, setIndex] = useState(-1);

  return (
    <div>
      <h1 className="text-center">Fleischgerichte</h1>
      <p></p>
      <ul className="list-group">
        {FleischInfo.map((item, path, index) => {
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
                  onClick={() => {
                    setIndex(index);
                  }}
                ></VeganInfo>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fleischgerichte;
