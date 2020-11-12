import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Category from "./Components/Category/Category";
import CardList from "./Components/CardList/CardList";
import "./ProductList.scss";

class ProductList extends Component {
  render() {
    console.log("mount!");
    return (
      <div className="productList">
        <Header />
        <div className="mainSection">
          <Category />
          <CardList />
        </div>
      </div>
    );
  }
}

export default ProductList;
