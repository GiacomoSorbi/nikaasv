import React from "react";
import "./QuantitySelector.css";

const ProductCard = ({
  id,
  label,
  max = 10,
  onChange,
  type = "number",
  value
}) => (
  <div className="quantity-selector">
    {label && <label htmlFor={id}>{label}</label>}
    <input
      className="number"
      type={type}
      min={0}
      max={max}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default ProductCard;
