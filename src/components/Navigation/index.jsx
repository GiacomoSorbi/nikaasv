import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import MS from "../../assets/images/MS.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { connect } from "react-redux";

const Navigation = ({ navRole, orders }) => (
  <>
    <nav className={`${navRole}-nav desktop`}>
      <NavLink className="nav-logo" to="/" exact>
        <img className="logo" src={MS} alt="logo" />
      </NavLink>
      {navRole === "main" ? (
        <>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/shopping-bag">
            <FontAwesomeIcon className="nav-icon" icon={faShoppingBag} />
            {Boolean(orders.length) && (
              <span className="nav-icon-badge">{orders.length}</span>
            )}
          </NavLink>
        </>
      ) : (
        <span>
          <a href="https://twitter.com">
            <FontAwesomeIcon className="soc-media" icon={faTwitter} />
          </a>
          <a href="https://facebook.com">
            <FontAwesomeIcon className="soc-media" icon={faFacebook} />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon className="soc-media" icon={faInstagram} />
          </a>
        </span>
      )}
    </nav>
    <nav className={`${navRole}-nav mobile`}>
      <NavLink className="nav-logo" to="/" exact>
        <img className="logo" src={MS} alt="logo" />
      </NavLink>
      {navRole === "main" ? (
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/shopping-bag">
              <FontAwesomeIcon className="nav-icon" icon={faShoppingBag} />
            </NavLink>
          </ul>
        </div>
      ) : (
        <span>
          <a href="https://twitter.com">
            <FontAwesomeIcon className="soc-media" icon={faTwitter} />
          </a>
          <a href="https://facebook.com">
            <FontAwesomeIcon className="soc-media" icon={faFacebook} />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon className="soc-media" icon={faInstagram} />
          </a>
        </span>
      )}
    </nav>
  </>
);

const mapStateToProps = state => ({ orders: state.shoppingBagReducer.orders });

export default connect(mapStateToProps)(Navigation);
