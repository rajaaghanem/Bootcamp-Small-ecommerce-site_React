import React from "react";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import ProductsCategories from "./components/ProductsCategories/ProductsCategories";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CategoryCard from "./components/utilities/CategoryCard/CategoryCard";
import Products from "./components/Products/Products";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={Homepage} />
            <Route path="/ProductsCategories/:name" exact component={ProductsCategories} />
            <Route path="/products/:name/:category/:idx" exact component={Products} />
            <Route path="/shoppingcart" exact component={ShoppingCart} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
