import React from "react";
import { Link } from "gatsby";
import {
  headerContainer,
  headerLogo,
  headerDesktop,
  headerButton,
  headerHandburger,
  headerBar1,
  headerBar2,
  headerBar3,
  headerMobile,
  headerOpen,
} from "./Header.module.css";
import LogoImage from "../../images/rawanFinal.png";

/* eslint-disable react/jsx-no-target-blank */

/**
 * Safe link to own external websites only.
 */

function header() {
  const toggleMobile = () => {
    const headerLinks = document.getElementsByClassName(headerHandburger)[0];
    headerLinks.classList.toggle(headerOpen);
  };

  return (
    <header>
      <div className={headerContainer}>
        <div className={headerLogo}>
          <Link to="/">
            <img src={LogoImage} alt="Logo" />
          </Link>
        </div>
        <nav>
          <ul className={headerDesktop}>
            {/* <li><p>Hi,Rawan</p></li> */}
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
            <li>
              <a href="https://rawan-resume.netlify.app/" target="_blank">
                v1
              </a>
            </li>
            {/* <li><p>Articles</p></li> */}
            <li id={headerButton}>
              <Link to="/contact">Say Hello</Link>{" "}
            </li>
          </ul>
        </nav>
        <div
          className={headerHandburger}
          role={"button"}
          tabIndex={0}
          onKeyDown={toggleMobile}
          onClick={toggleMobile}
        >
          <div className={headerBar1}></div>
          <div className={headerBar2}></div>
          <div className={headerBar3}></div>
          <div className={headerMobile}>
            <hr />
            <ul>
              {/* <li>Hi,Rawan</li> */}
              <li>
                <Link to="/quotes">Quotes</Link>
              </li>
              <li>
                <a href="https://rawan-resume.netlify.app/" target="_blank">
                  v1
                </a>
              </li>
              <li id={headerButton}>
                <Link to="/contact">Say Hello</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
