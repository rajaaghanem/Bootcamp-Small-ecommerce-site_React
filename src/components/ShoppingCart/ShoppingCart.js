import React from "react";
import CartCard from "../utilities/CartCard/CartCard";
import "./ShoppingCart.css";

// import { Link } from "react-router-dom";

class ShopingCart extends React.Component {
  state = { addedItems: JSON.parse(localStorage.getItem("productsArr")), count: localStorage.getItem("counter") };

  mapping=()=>{
    return this.state.addedItems.map((item)=>{
        return <CartCard key={item[3]} image={item[0]} title={item[1]} price={item[2]}/>
      // return items.map((item)=>{
      //   console.log(item[1]);
      //   return <CartCard image={item[0]} title={item[1]}/>
      // })
    })
  }


  render() {
    console.log("state of shopping card", this.state.addedItems);
    return <div className="items-container">{this.mapping()}</div>;
  }
}

export default ShopingCart;
