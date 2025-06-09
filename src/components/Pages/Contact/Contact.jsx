import React from "react";
import "./Contact.scss";
import { FaTelegramPlane } from "react-icons/fa";
import phone from "../../../assets/img/call.svg";
import email from "../../../assets/img/Email.svg";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact--form">
            <h2>Send a message</h2>
            <div className="form--inputs">
              <div className="row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="row">
                <input type="text" placeholder="Phone" />
                <input type="email" placeholder="Email" />
              </div>
              <input
                type="text"
                placeholder="Group or Company"
                className="full"
              />
              <textarea placeholder="How can we help?" className="full" />
              <center>
                <button type="submit">Submit</button>
              </center>
            </div>
          </div>

          <div className="contact--info">
            <div className="contact--info__share">
            </div>
            <h3>Contact Info</h3>
            <p>
              <img src={phone} alt="img" />
              <a href="tel:+996500348439">+996 500 34 84 39</a>
            </p>
            <p>
              <img src={email} alt="img" />
              <a href="mailto:motionweb312@gmail.com">motionweb312@gmail.com</a>
            </p>
            <div className="icons">
              <a
                href="https://t.me/твой_никнейм"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://wa.me/твой_никнейм"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                href="https://instagram.com/твой_никнейм"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps?q=42.869859,74.620945&hl=ru&z=16&output=embed"
              width="100%"
              height="280"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
