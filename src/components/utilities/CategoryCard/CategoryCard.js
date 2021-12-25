import React from "react";
import "./CategoryCard.css";

const CategoryCard = (props) =>{
  return (
    <div className={`category-card ${props.catigoryClass}`}>
      <h1 className="category-card-title">{props.catigoryName}</h1>
    </div>
  );
}


export default CategoryCard;
