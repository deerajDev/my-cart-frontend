import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Logo from "../../common/logo/Logo";
import Button from "../../common/button/Button";
import "./cart.css";

const baseUrl = "http://localhost:9000";
const url = baseUrl + "/cart/create";

//cartID
const CartID = () => {
  const [cartID, setCartID] = useState("");
  const history = useHistory();
  const onClickHandler = useCallback(() => {
    history.push("/active");
  }, [history]);

  const createCartID = async () => {
    console.log("entered create cartID");
    const body = JSON.stringify({
      cart_id: cartID,
    });
    try {
      const response = await axios.post(url, body, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        localStorage.setItem("cart_id", cartID);
        onClickHandler();
      } else {
        console.log("could not create the cart");
      }
    } catch (err) {
      console.log("could not create a cart");
    }
  };
  return (
    <div className="input_container">
      <Logo />
      <input
        value={cartID}
        onChange={(e) => setCartID(e.target.value)}
        className="input"
        placeholder={"Enter Cart Id"}
      />
      <div className="input_bottom_bar"></div>
      <Button text={"Shop"} onClickHandler={createCartID} />
    </div>
  );
};

export default CartID;
