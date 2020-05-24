import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div className="button_container" onClick={props.onClickHandler}>
      <h6 className="button_text">{props.text}</h6>
    </div>
  );
};

export default Button;
