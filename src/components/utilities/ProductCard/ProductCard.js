import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img alt="img" src={props.image} className="card-image" />
      </div>
      <div className="card-content">
        <div className="title">title</div>
        <div className="description">description</div>
      </div>
    </div>
  );
};

export default ProductCard;
