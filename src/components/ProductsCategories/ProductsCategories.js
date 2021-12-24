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


  render() {
    // console.log(this.props.match.params);
    // console.log(this.state[`${this.state.categoryName}`][0].category);
    console.log(`${this.state.categoryName}_${this.state[`${this.state.categoryName}`][0].category}`.toLowerCase());
    return (
      <div>
        <Link
          to={`/products/${this.state.categoryName}/${this.state[`${this.state.categoryName}`][0].category}`}
        >
          <CategoryCard
            catigoryClass={`${this.state.categoryName}_${this.state[`${this.state.categoryName}`][0].category}`.toLowerCase()}
            catigoryName={`${this.state[`${this.state.categoryName}`][0].category}`}
          />
        </Link>
        <Link to={`/products/${this.state.categoryName}/${this.state[`${this.state.categoryName}`][1].category}`}>
          <CategoryCard
            catigoryClass={`${this.state.categoryName}_${this.state[`${this.state.categoryName}`][1].category}`.toLowerCase()}
            catigoryName={`${this.state[`${this.state.categoryName}`][1].category}`}
          />
        </Link>
        <Link to={`/products/${this.state.categoryName}/${this.state[`${this.state.categoryName}`][2].category}`}>
          <CategoryCard
            catigoryClass={`${this.state.categoryName}_${this.state[`${this.state.categoryName}`][2].category}`.toLowerCase()}
            catigoryName={`${this.state[`${this.state.categoryName}`][2].category}`}
          />
        </Link>
        <Link to={`/products/${this.state.categoryName}/${this.state[`${this.state.categoryName}`][3].category}`}>
          <CategoryCard
            catigoryClass={`${this.state.categoryName}_${this.state[`${this.state.categoryName}`][3].category}`.toLowerCase()}
            catigoryName={`${this.state[`${this.state.categoryName}`][3].category}`}
          />
        </Link>
      </div>
    );
  }
}

export default Products;
