import React from "react";
import { Link } from "react-router-dom";
import homeStore from "../../stores/homeStore";
import kidsStore from "../../stores/kidsStore";
import menStore from "../../stores/menStore";
import womenStore from "../../stores/womenStore";
import CategoryCard from "../utilities/CategoryCard/CategoryCard";
import "./Homepage.css";

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
    console.log(this.state);
    return (
      <div className="categories-container">
        <Link to="/" className="link-style">
          <CategoryCard
            catigoryClass="women"
            catigoryName="Women"
            catigoryData={this.state.womenData}
          />
        </Link>
        <Link to="/">
          <CategoryCard
            catigoryClass="men"
            catigoryName="Men"
            catigoryData={this.state.menData}
          />
        </Link>
        <Link to="/">
          <CategoryCard
            catigoryClass="kids"
            catigoryName="Kids"
            catigoryData={this.state.kidsData}
          />
        </Link>
        <Link to="/">
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
