import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/main_page/MainPage";
import Cart from "./components/cart/CartID";
import ItemsList from "./components/items/ItemsList";
import AddItem from "./components/add_item/AddItem";
import Active from "./components/active/Active";
const App = () => {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/shop" component={Cart} />
      <Route exact path="/active" component={Active} />
      <Route exact path="/items" component={ItemsList} />
      <Route exact path="/add" component={AddItem} />
    </Router>
  );
};

export default App;
