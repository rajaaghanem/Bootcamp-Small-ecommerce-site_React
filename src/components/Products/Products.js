import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import store from "../../store/store";

class Products extends React.Component {
  state = { data: [] };

  componentDidMount = () => {
    this.setState({ data: store });
  };

  render() {
    // console.log(this.state.data);
    // console.log(this.props.location.pathname);
    return (
      <div>
        
        {/* {this.state.data.map((el) => {
          return (
            <Link
              key={el.id}
              to={`${this.props.location.pathname}/${el.id}`}
              className="product-design"
            >
              <div className="div-test">{el.title}</div>
              
            </Link>
          );
        })} */}
      </div>
    );
  }
}

export default Products;
