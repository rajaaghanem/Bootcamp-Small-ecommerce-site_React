import React from "react";
import "./CartCard.css";

const CartCard = (props) =>{
    console.log(props);
    return(
       <div className="card-container">
           <div >
             <img alt="img" src={props.image} className="the-image"/>
           </div>
           <div className="content">
                <div className="title">{props.title}</div>
                <div className="price">{props.price}</div>
                <button></button>
                <p></p>
                <button></button>
           </div>
       </div>
      
    );
};

export default CartCard;

