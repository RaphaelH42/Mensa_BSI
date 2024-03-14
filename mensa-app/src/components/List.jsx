import { useState } from "react";
import React from "react";
import Alert from "./Alert";
import NavigationBar from "./NavigationBar";
import VeganList from "./VeganList";

const List = () => {
  const [alertVisible, alertSetVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => alertSetVisibility(false)}></Alert>
      )}
      <p></p>
      <VeganList></VeganList>
    </div>
  );
};

export default List;
