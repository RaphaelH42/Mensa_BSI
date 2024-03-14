import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Vegan from "./components/Vegan";
import Fleischgerichte from "./components/Fleischgerichte";
import Startseite from "./components/Startseite";
import Linsensuppe from "./components/Linsensuppe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Kuerbiscremesuppe from "./components/Kuerbiscremesuppe";
import Gnocchi from "./components/Gnocchi";
import Nuggets from "./components/Nuggets";
import Vegetarisch from "./components/Vegetarisch";
import Schnitzel from "./components/Schnitzel";
import Einloggen from "./components/Einloggen";

function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Startseite></Startseite>} />
        <Route path="/Einloggen" element={<Einloggen></Einloggen>} />
        <Route path="/Vegetarisch" element={<Vegetarisch></Vegetarisch>} />
        <Route path="/Vegan" element={<Vegan></Vegan>} />
        <Route
          path="/Fleischgerichte"
          element={<Fleischgerichte></Fleischgerichte>}
        />
        <Route
          path="/Vegan/Linsensuppe"
          element={<Linsensuppe></Linsensuppe>}
        />
        <Route
          path="/Vegan/Kuerbiscremesuppe"
          element={<Kuerbiscremesuppe></Kuerbiscremesuppe>}
        />
        <Route path="/Vegan/Gnocchi" element={<Gnocchi></Gnocchi>} />
        <Route path="/Fleischgerichte/Nuggets" element={<Nuggets></Nuggets>} />
        <Route
          path="/Vegetarisch/Schnitzel"
          element={<Schnitzel></Schnitzel>}
        />
      </Routes>
    </Router>
  );
}

export default App;
