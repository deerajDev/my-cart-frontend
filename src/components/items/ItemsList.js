import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
import TotalCost from "./TotalCost";
import Button from "../../common/button/Button";
import "./items.css";

const baseUrl = "http://localhost:9000";
const url = baseUrl + "/cart/bill";
let totalBill = 0;
let totalItems = 0;
const ItemsList = () => {
  const cartID = JSON.parse(localStorage.getItem("cart_id"));
  const body = JSON.stringify({
    cart_id: cartID,
  });
  const [items, setItems] = useState([]);

  const getList = async () => {
    try {
      const response = await axios.post(url, body, {
        headers: { "Content-Type": "application/json" },
      });
      const listItems = response["data"]["productsList"];
      setItems(listItems);
    } catch (err) {
      console.log("could not get you list");
    }
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="main_container">
      <h2 className="heading">Items</h2>
      {items[0] &&
        items.map((item) => {
          const {
            name,
            product_id: productID,
            cost,
            num_items: numItems,
          } = item;
          const totalCost = numItems * cost;
          totalBill += totalCost;
          totalItems += numItems;
          return (
            <Item
              key={productID}
              name={name}
              cost={cost}
              numItems={numItems}
              totalCost={totalCost}
            />
          );
        })}
      <TotalCost totalBill={totalBill} totalItems={totalItems} />
      <Button text={"Pay"} />
    </div>
  );
};

export default ItemsList;
