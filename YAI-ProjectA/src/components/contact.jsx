import React, { forwardRef } from "react";
import "./styles/contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin
} from "react-icons/fa";

const ContactUs = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} id="contact" className="contact-section">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-container">
          <div className="contact-left">
            <p>
              <strong className="contact-heading">For more info, contact us via:</strong>
            </p>
            <div className="contact-info">
              <p><FaPhone className="icon flip-icon" /> (233) 555-010-234</p>
              <p><FaEnvelope className="icon" /> attrams@gmail.com</p>
              <p><FaMapMarkerAlt className="icon" /> UMaT Campus, Tarkwa</p>
            </div>

            <div className="socials">
              <p><strong className="contact-heading">Follow Us on Social Media</strong></p>
              <div className="social-icons">
                <FaFacebook className="icon" />
                <FaInstagram className="icon" />
                <FaTiktok className="icon" />
                <FaLinkedin className="icon" />
              </div>
            </div>
          </div>

          <div className="contact-right">
            <p style={{ paddingBottom: "20px", fontSize: "20px", opacity: "0.9" }}>
              <strong>Send message</strong>
            </p>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone Number" />
              </div>
              <input type="email" placeholder="Email Id" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your message" className="textarea"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="copyright-section">
        <p>&copy; {new Date().getFullYear()} Asaasepa. All rights reserved.</p>
      </footer>
    </>
  );
});

export default ContactUs;