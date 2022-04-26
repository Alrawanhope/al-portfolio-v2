import React from "react";
import {
  FaGithub
 } from "react-icons/fa";
import {
  aboutWrap,
  aboutTitle,
  aboutRowContainer,
  aboutRowChild,
  aboutRowContainer2,
  aboutInfo,
  aboutImage,
  aboutProgressBar,
  aboutPercentage,
  aboutHtml,
  aboutCss,
  aboutJs,
  aboutReact,
  aboutNode,
  aboutGatsby,
  aboutAws
} from "./About.module.css";
import logoImage from "../../images/R-logo.png";

export default function About() {
  return (
    <section style={{marginBottom:"5rem"}}>
      <div className={aboutWrap}>
        <h1 className={aboutTitle}>ABOUT</h1>
        <div className={aboutRowContainer}>
          <div className={aboutRowChild}>
            <div>
              <FaGithub style={{ width: "80%", height: "100%" }} />
            </div>
            <h2>Fast</h2>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div className={aboutRowChild}>
            <div>
              <FaGithub style={{ width: "80%", height: "100%" }} />
            </div>
            <h2>Fast</h2>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div className={aboutRowChild}>
            <div>
              <FaGithub style={{ width: "80%", height: "100%" }} />
            </div>
            <h2>Fast</h2>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div className={aboutRowChild}>
            <div>
              <FaGithub style={{ width: "80%", height: "100%" }} />
            </div>
            <h2>Fast</h2>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
        </div>
        <div className={aboutRowContainer2}>
          <div className={aboutInfo}>
            <div className={aboutImage}>
              <img src={logoImage} style={{ width: "100%" }} alt="Logo"/>
            </div>
            <h2>Who's this guy?</h2>
            <p>
              I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
              serious passion for UI effects, animations and creating intuitive,
              dynamic user experiences. Let's make something special.
            </p>
          </div>
          <div className={aboutProgressBar}>
            <div className={`${aboutPercentage} ${aboutHtml}`}>
              <div>HTML</div>
              <div></div>
              <div>90%</div>
            </div>
            <div className={`${aboutPercentage} ${aboutCss}`}>
              <div>CSS</div>
              <div></div>
              <div>90%</div>
            </div>
            <div className={`${aboutPercentage} ${aboutJs}`}>
              <div>JS</div>
              <div></div>
              <div>85%</div>
            </div>
            <div className={`${aboutPercentage} ${aboutReact}`}>
              <div>REACT</div>
              <div></div>
              <div>80%</div>
            </div>
            <div className={`${aboutPercentage} ${aboutNode}`}>
              <div>NODE</div>
              <div></div>
              <div>70%</div>
            </div>
            <div className={`${aboutPercentage} ${aboutGatsby}`}>
              <div>GATSBY</div>
              <div></div>
              <div>80%</div>
            </div>
            <div className={`${aboutPercentage} ${aboutAws}`}>
              <div>AWS</div>
              <div></div>
              <div>70%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
