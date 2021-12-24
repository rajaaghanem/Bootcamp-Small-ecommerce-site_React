import React from "react";
import homeStore from "../../stores/homeStore";
import kidsStore from "../../stores/kidsStore";
import menStore from "../../stores/menStore";
import womenStore from "../../stores/womenStore";
import ProductCard from "../utilities/ProductCard/ProductCard";
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = {
    women: womenStore,
    men: menStore,
    kids: kidsStore,
    home: homeStore,
    currentCategory:[],
  };

  mapping=()=>{
    const current = this.props.match.params.name
  }

  render() {
    console.log(this.state.women);
    console.log(this.props.match.params);

    return (
      <div className="proudct-container">
        {/* <div>{this.state.currentItem.title}</div>
        {this.state.showBox ? <div className="yellow-box"></div> : null}
        <img src={`${this.state.currentItem.imageUrl}`} />
        <div> {this.state.currentItem.size}</div>
        <div> {`${this.state.currentItem.price} $`}</div>
        <button>ADD TO CART</button> */}
        <ProductCard/>
      </div>
    );
  }
}

export default Products;
