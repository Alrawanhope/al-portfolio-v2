import React from "react";
import { Link } from "gatsby";
import {
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import LogoImage from "../../images/rawanFinal.png";
import {
  footerContainer,
  footerLogo,
  footerCopyTitle,
  footerCopyrights,
  footerTop,
} from "./Footer.module.css";

/* eslint-disable react/jsx-no-target-blank */

/**
 * Safe link to own external websites only.
 */

function footer() {
  return (
    <footer>
      <div className={footerContainer}>
        <div className={footerLogo}>
          <Link to="/">
            <img src={LogoImage} alt="Logo" />
          </Link>
        </div>
        <h3>Living, learning, & leveling up one day at a time.</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/mohamed-rawan-4495531aa"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://github.com/Alrawanhope" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/users/845130906662731786"
              target="_blank"
            >
              <FaDiscord />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Alrawan264" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/alrawan45?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/919487391727?text=Hey%20I'am%20Rawan.%0AThanks%20for%20reaching%20out.%0AHow%20can%20i%20help%20you?"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
        <div className={footerCopyrights}>
          <p>
            Desinged and Developed by
            <span className={footerCopyTitle}> Alrawan</span>
          </p>
          <p>All right reserved &copy; 2022</p>
          <p>Version 2.0</p>
        </div>
        <div className={footerTop}>
          <h2>Start a project</h2>
          <p>
            Interested in working together? We should queue up a chat. I’ll buy
            the coffee.
          </p>
          <button>
            <Link to="/contact">Let's do this</Link>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default footer;
