import React from "react";
import "./CartCard.css";

class CartCard extends React.Component {
  state = { itemcount: 1 };

  // increase the amount of items by one
  handleClickUp = () => {
    this.setState((state) => {
      return { itemcount: state.itemcount + 1 };
    });
  };

  // dicrease the amount of items by one
  handleClickDown = () => {
    this.setState((state) => {
      if (state.itemcount > 0) {
        return { itemcount: state.itemcount - 1 };
      }
      return;
    });
  };

  render() {
    return (
      <div className="card-container">
        <div>
          <img alt="img" src={this.props.image} className="the-image" />
        </div>
        <div className="content">
          <div className="title">{this.props.title}</div>
          <div className="price">{this.props.price}</div>
          <button onClick={this.handleClickUp}>
            <i className="fas fa-chevron-up"></i>
          </button>
          <p>{this.state.itemcount}</p>
          <button onClick={this.handleClickDown}>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default CartCard;
