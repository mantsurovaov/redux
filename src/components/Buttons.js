import { endPrice, sortBy, startPrice } from "../actions";
import { connect } from "react-redux";
import React from "react";

let Buttons = ({ dispatch, filterState }) => (
  <div>
    <div style={{ marginBottom: "5px" }}>
      Filter by price:
      <input
        type="text"
        placeholder="0"
        id="start"
        onChange={() =>
          dispatch(startPrice(document.getElementById("start").value))
        }
      />
      <input
        type="text"
        placeholder="2000"
        id="end"
        onChange={() =>
          dispatch(endPrice(document.getElementById("end").value))
        }
      />
    </div>
    <div style={{ marginBottom: "5px" }}>
      Sort:
      <input
        type="button"
        value="By ID"
        onClick={() => dispatch(sortBy("id"))}
      />
      <input
        type="button"
        value="By Price"
        onClick={() => dispatch(sortBy("price"))}
      />
      <p>Sorted by: {filterState.sortBy}</p>
    </div>
  </div>
);
const mapStateToButtonsProps = (state) => {
  return {
    filterState: state.filterState,
  };
};
Buttons = connect(mapStateToButtonsProps)(Buttons);

export default Buttons;
