import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  let navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid text-center">
        <Link to="/" className="navbar-brand" href="#">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kategorie
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#">
                    Fleischgerichte
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Vegetarisch
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Vegan
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            navigate("/Einloggen");
          }}
        >
          Einloggen
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
