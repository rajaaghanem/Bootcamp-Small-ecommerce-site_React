import React from "react";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail ";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CategoryCard from "./components/utilities/CategoryCard/CategoryCard";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" exact component={ProductDetail} />
            <Route path="/shoppingcart" exact component={ShoppingCart} />
            <CategoryCard />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
