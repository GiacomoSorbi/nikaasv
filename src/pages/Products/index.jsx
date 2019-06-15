import React from "react";
import "./Products.css";
import { Route } from "react-router-dom";
import Product from "../Product";
import ProductList from "../../components/ProductList";

const Products = props => (
  <div className="single-products-container">
    <h1 className="products-heading">Products</h1>
    <Route path="/products" exact component={ProductList} />
    <Route path="/products/:id" exact component={Product} />
  </div>
);

export default Products;
