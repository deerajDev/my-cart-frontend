import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
//importing custom components
import Logo from "../../common/logo/Logo";
import Jumbotron from "../jumbotron/Jumbotron";
import Button from "../../common/button/Button";
import WelcomeText from "./Welcome";
import "./main_page.css";

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = useCallback(() => {
    history.push("/shop");
  }, [history]);

  return (
    <div className="main_page_container">
      <Logo />
      <WelcomeText />
      <Jumbotron />
      <Button text={"Shop"} onClickHandler={onClickHandler} />
      <p className="bottom_text ">Login for better experience</p>
    </div>
  );
};

export default MainPage;
