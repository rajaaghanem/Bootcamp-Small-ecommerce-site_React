import React from "react";
import CartCard from "../utilities/CartCard/CartCard";
import "./ShoppingCart.css";

// import { Link } from "react-router-dom";

class ShopingCart extends React.Component {
  state = {
    addedItems: JSON.parse(localStorage.getItem("productsArr")),
    count: localStorage.getItem("counter"),
  };

  //add an card for each selected item in the shopping cart
  mapping = () => {
    return this.state.addedItems.map((item) => {
      return (
        <CartCard
          key={item[3]}
          image={item[0]}
          title={item[1]}
          price={item[2]}
        />
      );
    });
  };

  render() {
    return <div className="items-container">{this.mapping()}</div>;
  }
}

export default ShopingCart;
