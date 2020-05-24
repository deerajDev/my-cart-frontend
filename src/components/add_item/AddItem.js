import React, { useState } from "react";
import axios from "axios";
import Button from "../../common/button/Button";
import "../cart/cart.css";
import "./add_item.css";

const baseUrl = "http://localhost:9000";
const url = baseUrl + "/cart/add_product";
const AddItem = () => {
  const [productID, setProductID] = useState("");
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onClickHandler = async () => {
    const body = JSON.stringify({
      product_id: productID,
      name,
      cost,
    });
    try {
      const response = await axios.post(url, body, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status !== 200) {
        console.log("could not add the item");
      }
    } catch (err) {
      console.log("could not post your error");
    }
  };
  return (
    <div className="add_item_container">
      <h2>Add new item</h2>
      <input
        value={productID}
        onChange={(e) => setProductID(e.target.value)}
        className="input"
        placeholder={"item id"}
      />
      <div className="input_bottom_bar "></div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
        placeholder={"name"}
      />
      <div className="input_bottom_bar "></div>
      <input
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        className="input"
        placeholder={"Cost"}
      />
      <div className="input_bottom_bar "></div>
      <Button text={"Submit"} onClickHandler={onClickHandler} />
    </div>
  );
};

export default AddItem;
