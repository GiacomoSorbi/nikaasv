import React from "react";
import "./ShoppingBagItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ShoppingBagItem = ({ index, item, onRemove }) => (
  <div className="shopping-bag-item">
    -{item.quantity}- {item.product.name}
    <FontAwesomeIcon
      className="shopping-bag-item-remove"
      data-index={index}
      icon={faTimes}
      onClick={onRemove}
      role="button"
    />
  </div>
);

export default ShoppingBagItem;
