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
            <a href="/">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="/">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <FaDiscord />
            </a>
          </li>
        </ul>
        <div className={footerCopyrights}>
          <p>
            Desinged and Developed by &copy;
            <span className={footerCopyTitle}> Alrawan</span>
          </p>
          <p>All right reserved.</p>
          <p>version 2.0</p>
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
