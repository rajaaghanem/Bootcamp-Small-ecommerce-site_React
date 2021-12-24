import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img alt={props.title} src={props.img} className="card-image" />
      </div>
      <div className="card-content">
        <div className="title">{props.title}</div>
        <div className="price">{props.price}</div>
        <button className="btn-style">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;
