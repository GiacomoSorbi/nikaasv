import React, { useState } from "react";
import "./Contact.css";

const Contact = props => {
  const [name, setName] = useState("");
  const onChangeName = e => setName(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    alert(`Thanks for your message, ${name}\nWe will contact you back shortly`);
  };
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div>
        <h4 className="heading-contact"> We'd love to hear from you!</h4>
      </div>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <div className="styled-input wide">
            <input onChange={onChangeName} type="text" required />
            <label>Name</label>
          </div>
        </div>
        <div className="input-container middle-input-container">
          <div className="styled-input email-input">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="styled-input phone-number-input">
            <input type="phone" required />
            <label>Phone Number</label>
          </div>
        </div>
        <div className="input-container">
          <div className="styled-input wide">
            <textarea required />
            <label>Message</label>
          </div>
        </div>
        <input type="submit" className="submit-btn" value="Send Message" />
      </form>
    </div>
  );
};

export default Contact;
