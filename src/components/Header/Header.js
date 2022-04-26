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
  headerOpen
} from "./Header.module.css";
import LogoImage from "../../images/rawanFinal.png"

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
          <img src={LogoImage} alt="Logo"/>
        </Link>
      </div>
      <nav>
        <ul className={headerDesktop}>
          <li><p>Hi,Rawan</p></li>
          <li id={headerButton}>
            <Link to="/contact">Say Hello</Link>{" "}
          </li>
        </ul>
      </nav>
      <div className={headerHandburger} onClick={toggleMobile}>
        <div className={headerBar1}></div>
        <div className={headerBar2}></div>
        <div className={headerBar3}></div>
        <div className={headerMobile}> 
        <hr/>
        <ul>
          <li>Hi,Rawan</li>
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
