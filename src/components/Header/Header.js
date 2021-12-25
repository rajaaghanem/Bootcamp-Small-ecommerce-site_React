import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = { count: localStorage.getItem("counter") };

  componentDidMount = () => {
    setInterval(() => {
      if (localStorage.getItem("counter") !== this.state.count) {
        this.handleShopping();
      }
    }, 500);
  };

  handleShopping = () => {
    this.setState({ count: localStorage.getItem("counter") });
  };

  render() {
      console.log("headet",this.state.count);
    return (
      <div className="header-container">
        <Link className="link homepage-link" to="/">
          HomePage
        </Link>
        <Link className="link" to="/shoppingcart" onClick={this.handleClick}>
          <div className="cart-container">
            <p>{this.state.count}</p>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </Link>
      </div>
    );
  }
}

export default Header;
