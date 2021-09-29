import React from "react";
import "./ContactPage.css";
import ContactForm from "../../Components/contactFormComponent/ContactForm";
import squiggleImage from "./squiggleContact.png";

const ContactPage = () => {
  return (
    <section className="contact-container">
      <div className="contact-bottom">
        <div className="contact-bottom-left">
          <p className="contact-text">
            <h3 className="contact-header">We'd love to hear from you!</h3>
            <img
              src={squiggleImage}
              alt="line-squiggle"
              className="squiggle-image"
            />
            <br />
            contact@lixicecream.com
            <br />
            <br />
            111-111-1111
            <br />
            <br />
            123 Main Street, Houston, TX 77056
          </p>
        </div>
        <div className="contact-bottom-right">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
