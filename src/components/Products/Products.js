import React from "react";
import homeStore from "../../stores/homeStore";
import kidsStore from "../../stores/kidsStore";
import menStore from "../../stores/menStore";
import womenStore from "../../stores/womenStore";
import ProductCard from "../utilities/ProductCard/ProductCard";
import "./Prouducts.css";

class Products extends React.Component {
  state = {
    women: womenStore,
    men: menStore,
    kids: kidsStore,
    home: homeStore,
    currentCategory: this.props.match.params.name,
    currentIdx: this.props.match.params.idx,
  };

  currentProducts =
    this.state[this.state.currentCategory][this.state.currentIdx].data;

  //add the products of the choosen category to screen
  mapping = () => {
    return this.currentProducts.map((product) => {
      return (
        <ProductCard
          key={product.id}
          title={product.title}
          img={product.imageUrl}
          price={product.price}
          id={product.id}
        ></ProductCard>
      );
    });
  };

  render() {
    return <div className="proudct-container">{this.mapping()}</div>;
  }
}

export default Products;
