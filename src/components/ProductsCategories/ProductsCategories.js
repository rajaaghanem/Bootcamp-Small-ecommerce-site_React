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

  mapping = () => {
    for (let i = 0; i < 4; i++) {
      const item = ( 
        <Link
          to={`/products/${this.state.categoryName}/${
            this.state[`${this.state.categoryName}`][i].category
          }/${i}`}
          key={i}
        >
          <CategoryCard key={i}
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
    return (
      <div className="category-container">
        {this.mapping()}
        {/* <Link
          to={`/products/${this.state.categoryName}/${
            this.state[`${this.state.categoryName}`][0].category
          }/0`}
        >
          <CategoryCard
            catigoryClass={this.state[this.state.categoryName][0].imageClass}
            catigoryName={`${
              this.state[`${this.state.categoryName}`][0].category
            }`}
          />
        </Link>
        <Link
          to={`/products/${this.state.categoryName}/${
            this.state[`${this.state.categoryName}`][1].category
          }/1`}
        >
          <CategoryCard
            catigoryClass={this.state[this.state.categoryName][1].imageClass}
            catigoryName={`${
              this.state[`${this.state.categoryName}`][1].category
            }`}
          />
        </Link>
        <Link
          to={`/products/${this.state.categoryName}/${
            this.state[`${this.state.categoryName}`][2].category
          }/2`}
        >
          <CategoryCard
            catigoryClass={this.state[this.state.categoryName][2].imageClass}
            catigoryName={`${
              this.state[`${this.state.categoryName}`][2].category
            }`}
          />
        </Link>
        <Link
          to={`/products/${this.state.categoryName}/${
            this.state[`${this.state.categoryName}`][3].category
          }/3`}
        >
          <CategoryCard
            catigoryClass={this.state[this.state.categoryName][3].imageClass}
            catigoryName={`${
              this.state[`${this.state.categoryName}`][3].category
            }`}
          />
        </Link> */}
      </div>
    );
  }
}

export default Products;
