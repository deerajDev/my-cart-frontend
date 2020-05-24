import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../common/button/Button";
import "../main_page/main_page.css";

const extraStyles = {
  margin: "40px auto 20px",
};
const bottomMargin = {
  margin: "10px  auto 30px",
};

const Active = () => {
  const cartID = JSON.parse(localStorage.getItem("cart_id"));
  const history = useHistory();
  const onClickHandler = useCallback(() => {
    history.push("/items");
  }, [history]);
  return (
    <div className="main_page_container" style={extraStyles}>
      <h2 className="welcome_text">You cart is active</h2>
      <h2 className="welcome_text" style={bottomMargin}>
        CartID : {cartID}
      </h2>
      <Button text={"proceed"} onClickHandler={onClickHandler} />
    </div>
  );
};

export default Active;
