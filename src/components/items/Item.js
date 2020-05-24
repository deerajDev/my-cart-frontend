import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";
import "./items.css";

const Item = (props) => {
  const { name, cost, numItems, totalCost } = props;

  return (
    <div className="item_container">
      <ItemDetail
        name={name}
        cost={cost}
        numItems={numItems}
        totalCost={totalCost}
      />
    </div>
  );
};

export default Item;
