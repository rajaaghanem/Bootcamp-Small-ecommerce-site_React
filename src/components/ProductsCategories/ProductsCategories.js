import React from "react";
import "./ProductsCategories.css";
import homeStore from "../../stores/homeStore";
import kidsStore from "../../stores/kidsStore";
import menStore from "../../stores/menStore";
import womenStore from "../../stores/womenStore";
import CategoryCard from "../utilities/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = {
    women: womenStore,
    men: menStore,
    kids: kidsStore,
    home: homeStore,
    categoryName: this.props.match.params.name,
  };

  itemsArr = [];

  // add a category card
  mapping = () => {
    for (let i = 0; i < 4; i++) {
      const item = (
        <Link
          to={`/products/${this.state.categoryName}/${
            this.state[`${this.state.categoryName}`][i].category
          }/${i}`}
          key={i}
        >
          <CategoryCard
            key={i}
            catigoryClass={this.state[this.state.categoryName][i].imageClass}
            catigoryName={`${
              this.state[`${this.state.categoryName}`][i].category
            }`}
          />
        </Link>
      );
      this.itemsArr.push(item);
    }
    return this.itemsArr;
  };

  render() {
    return <div className="category-container">{this.mapping()}</div>;
  }
}

export default Products;
