import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import homeStore from "../../stores/homeStore";
import kidsStore from "../../stores/kidsStore";
import menStore from "../../stores/menStore";
import womenStore from "../../stores/womenStore";
import CategoryCard from "../utilities/CategoryCard/CategoryCard";

class Homepage extends React.Component {
  state = { homeData: [], womenData: [], menData: [], kidsData: [] };

  componentDidMount = () => {
    this.setState({
      homeData: homeStore,
      womenData: womenStore,
      menData: menStore,
      kidsData: kidsStore,
    });
  };

  render() {
    return (
      <div className="categories-container">
        <Link to="/ProductsCategories/women" className="link-style">
          <CategoryCard
            catigoryClass="women"
            catigoryName="Women"
            catigoryData={this.state.womenData}
          />
        </Link>
        <Link to="/ProductsCategories/men">
          <CategoryCard
            catigoryClass="men"
            catigoryName="Men"
            catigoryData={this.state.menData}
          />
        </Link>
        <Link to="/ProductsCategories/kids">
          <CategoryCard
            catigoryClass="kids"
            catigoryName="Kids"
            catigoryData={this.state.kidsData}
          />
        </Link>
        <Link to="/ProductsCategories/home">
          <CategoryCard
            catigoryClass="home"
            catigoryName="Home"
            catigoryData={this.state.homeData}
          />
        </Link>
      </div>
    );
  }
}

export default Homepage;
