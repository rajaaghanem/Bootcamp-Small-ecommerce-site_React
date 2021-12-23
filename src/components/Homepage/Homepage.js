import React from "react";
import { Link } from "react-router-dom";
import homeStore from "../../stores/homeStore";
import kidsStore from "../../stores/kidsStore";
import menStore from "../../stores/menStore";
import womenStore from "../../stores/womenStore";
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
    return <div></div>;
  }
}

export default Homepage;
