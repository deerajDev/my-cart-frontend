import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/main_page/MainPage";
import Cart from "./components/cart/CartID";
import ItemsList from "./components/items/ItemsList";
import AddItem from "./components/add_item/AddItem";
import Active from "./components/active/Active";

const repoName = "/my-cart-frontend";
const App = () => {
  return (
    <Router>
      <Route exact path={`${repoName}`} component={MainPage} />
      <Route exact path={`${repoName}/shop`} component={Cart} />
      <Route exact path={`${repoName}/active`} component={Active} />
      <Route exact path={`${repoName}/items`} component={ItemsList} />
      <Route exact path={`${repoName}/add`} component={AddItem} />
    </Router>
  );
};

export default App;
