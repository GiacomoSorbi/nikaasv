import React from "react";
import "./About.css";

const About = props => (
  <>
    <section className="hero-about-us">
      <div className="border-box-about" />
      <div className="title-box-about">
        <h2 className="title"> About Minimal Shine </h2>
        <p className="heading"> Simplicity is the ultimate sophistication</p>
      </div>
    </section>
    <div className="about-us">
      <h1 className="heading">Our Brand</h1>
      <p className="text">
        {" "}
        Our mission is to empower females globally. Confidentiality and truct in
        who they want to be is our core. Minimal Shine is minimalistic, straight
        talking and forward thinking accessories brand inspired by real life
        that aims to do exactly that. Everything we create is informed by our
        customer along with global influences like social media, street style,
        and popular culture, creating a destination that delivers and
        encompasses everything it means to be a girl on the go in the world
        today. But a tone of elegancy and strict touch{" "}
      </p>
      <h1 className="heading">Our Mission</h1>
      <p className="text">
        {" "}
        To offer the best jewellery at great prices. To bring high street
        quality of service to the Internet. To act in an official capacity as an
        authorised dealer of all brands sold online. To ensure shopping at The
        Jewel Hut is simple and secure. To deliver your purchase quickly,
        efficiently and fully insured. To provide a no-fuss after sales service.{" "}
      </p>
    </div>
  </>
);

export default About;
