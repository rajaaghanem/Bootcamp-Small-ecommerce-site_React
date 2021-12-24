import React from "react";
import { Link } from "react-router-dom";


class Products extends React.Component {
  // state = { data: store, currentItem: {} };

  // componentDidMount = () => {
  //   const id = Number(this.props.match.params.id);
  //   const findItem = this.state.data.find((item) => {
  //     return item.id === id;
  //   });
  //   this.setState({ currentItem: findItem });
  // };


  render() {
    return (
      <div className="proudct-container">products
        {/* <div>{this.state.currentItem.title}</div>
        {this.state.showBox ? <div className="yellow-box"></div> : null}
        <img src={`${this.state.currentItem.imageUrl}`} />
        <div> {this.state.currentItem.size}</div>
        <div> {`${this.state.currentItem.price} $`}</div>
        <button>ADD TO CART</button> */}
      </div>
    );
  }
}

export default Products;
