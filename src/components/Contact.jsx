import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className="container section-padding" id="contact">
      <h1 className="text-center">Contact Us</h1>
      <div className="contact-icons d-flex justify-content-center mt-4">
        <div className="contact-items">
          <a href="https://www.instagram.com/pandit_aniket_15/" target="_blank">
            <FaSquareInstagram className="fs-1" />
          </a>
        </div>
        <div className="contact-items">
          <a href="https://www.facebook.com/aniket.pandit.587" target="_blank">
            <FaFacebook className="fs-1" />
          </a>
        </div>
        <div className="contact-items">
          <a href="https://www.linkedin.com/in/aniket-pandit-b59a79201/" target="_blank">
            <FaLinkedin className="fs-1" />
          </a>
        </div>
        <div className="contact-items">
          <a href="https://github.com/co-002" target="_blank">
            <FaGithub className="fs-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
