import React from "react";
import { render } from "react-dom";
import "./ProductCard.css";


class ProductCard extends React.Component {
  state ={addedItem: ""};

  handleClick=()=>{
    let number= localStorage.getItem('counter');
    number++;
    localStorage.setItem("counter", number);
    
    const item = [this.props.img, this.props.title, this.props.price, this.props.id];
    let storedItems = JSON.parse(localStorage.getItem('productsArr'));
    storedItems.push(item);
    localStorage.setItem('productsArr', JSON.stringify(storedItems));
    console.log("local", storedItems);
  }

  render(){
    return (
      <div className="card">
        <div className="card-image">
          <img alt={this.props.title} src={this.props.img} className="card-image" />
        </div>
        <div className="card-content">
          <div className="title">{this.props.title}</div>
          <div className="price">{this.props.price}</div>
          <button className="btn-style" onClick={this.handleClick}>ADD TO CART</button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
