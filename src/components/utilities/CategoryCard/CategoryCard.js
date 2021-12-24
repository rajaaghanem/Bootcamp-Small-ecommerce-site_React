import React from "react";
import "./CategoryCard.css";


class CategoryCard extends React.Component{
    state={data: this.props.catigoryData};

    render(){

        return (
            <div className={`category-card category-${this.props.catigoryClass}`}>
              <h1 className="category-card-title">{this.props.catigoryName}</h1>
            </div>
          );
    }
}

export default CategoryCard;
