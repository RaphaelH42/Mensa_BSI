import React from "react";

const Einloggen = () => {
  return (
    <div>
      <h1 className="text-center">Jetzt einloggen und Essen bewerten!</h1>
      <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Passwort
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
      <p></p>
      <button type="button" className="btn btn-warning">
        Einloggen
      </button>
    </div>
  );
};

export default Einloggen;
