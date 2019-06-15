import React from "react";
import "./ProductCard.css";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="Product-card">
    <NavLink to={`/products/${product.id}`}>
      <div
        className="Card-image"
        style={{ backgroundImage: `url(${product.thumb})` }}
      />
      <h3 className="Product-link">{product.name}</h3>
    </NavLink>
    <h4 className="price">{product.price}</h4>
  </div>
);

export default ProductCard;
