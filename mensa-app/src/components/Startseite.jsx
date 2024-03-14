import React from "react";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";

const Startseite = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="container align-items-center">
        <div className=" row align-items-center justify-content-center">
          <p></p>
          <h1 className="text-center">Herzlich Willkommen!</h1>
          <p></p>
          <h2 className="text-center">
            Bewerte jetzt das Mensaessen der Kölner Universität. Sag uns, was
            dir schmeckt und was nicht. Und schau nach, was andere zu sagen
            haben.
          </h2>
          <p></p>
        </div>
      </div>
      <div className="container align-items-center">
        <div className=" row align-items-center justify-content-center">
          <h2 className="text-center">Wähle dafür jetzt die Kategorie:</h2>
        </div>
      </div>
      <div className="container align-items-center">
        <div className=" row align-items-center justify-content-center">
          <div className="col-lg-auto">
            <button
              type="button"
              className="btn btn-warning btn-lg"
              onClick={() => {
                navigate("/Vegetarisch");
              }}
            >
              Vegetarisch
            </button>
          </div>
          <div className="col-lg-auto">
            <button
              type="button"
              className="btn btn-warning btn-lg"
              onClick={() => {
                navigate("/Vegan");
              }}
            >
              Vegan
            </button>
          </div>
          <div className="col-lg-auto">
            <button
              type="button"
              className="btn btn-warning btn-lg"
              onClick={() => {
                navigate("/Fleischgerichte");
              }}
            >
              Fleischgerichte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startseite;
