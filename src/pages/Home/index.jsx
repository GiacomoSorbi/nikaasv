import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faTruck,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";

const Home = props => (
  <>
    <section className="hero-img">
      <div className="border-box">
        <div className="title-box">
          <h2 className="title"> Minimal Shine </h2>
          <p className="heading"> Simplicity is the ultimate sophistication</p>
          <button className="title-button">discover now</button>
        </div>
      </div>
    </section>

    <section className="menu">
      <div className="menu-1">
        <p className="menu-text"> free shipping</p>
        <p className="menu-text-2">free international shipping</p>
        <FontAwesomeIcon className="menu-icon" icon={faTruck} />
      </div>
      <div className="menu-2">
        <p className="menu-text"> fast delivery</p>
        <p className="menu-text-2">2-3 days local delivery</p>
        <FontAwesomeIcon className="menu-icon" icon={faBell} />
      </div>
      <div className="menu-3">
        <p className="menu-text"> free returns</p>
        <p className="menu-text-2">one month free return</p>
        <FontAwesomeIcon className="menu-icon" icon={faShoppingBag} />
      </div>
    </section>
    <section className="menu-bottom">
      <div className="grid-1">
        <p> NECKLACE</p>
      </div>
      <div className="grid-2">
        <p> EARRINGS </p>
      </div>
    </section>
  </>
);

export default Home;





