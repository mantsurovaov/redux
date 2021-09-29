import React from "react";
import Buttons from "./components/Buttons";
import VisibleCardsList from "./components/VisibleCardsList";
import SelectedCardsList from "./components/SelectedCardsList";

const CardsApp = () => (
  <div>
    <h4 style={{ marginBottom: "3px" }}>All:</h4>
    <Buttons />
    <VisibleCardsList />
    <h4 style={{ marginBottom: "3px" }}>Selected:</h4>
    <SelectedCardsList />
  </div>
);

export default CardsApp;
