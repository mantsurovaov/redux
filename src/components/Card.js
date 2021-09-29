import React from "react";

const Card = ({ onClick, title, id, price, isSelected }) => (
  <div
    style={{
      backgroundColor: "#F7F7F7",
      border: "1px grey solid",
      display: "inline-block",
      padding: "5px",
      margin: "3px",
    }}
  >
    <h4>{title}</h4>
    <p>ID: {id}</p>
    <p>Price: {price}</p>
    <input
      type="button"
      onClick={onClick}
      value={isSelected ? "Selected" : "Select"}
    />
  </div>
);

export default Card;
