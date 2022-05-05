import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  aboutWrap,
  aboutHeader,
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
import { GatsbyImage } from "gatsby-plugin-image";

export default function About({ sanityAbout }) {
  console.log("sanityAbout", sanityAbout);
  return (
    <section>
      <div className={aboutWrap}>
        <div className={aboutHeader}>
        <h1>{sanityAbout.title}</h1>
        <p>{sanityAbout.subTitle}</p>
      </div>
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
              <GatsbyImage
                image={sanityAbout.image.asset.gatsbyImageData}
                alt="info-logo"
              />
              {/* <img src={logoImage} style={{ width: "100%" }} alt="Logo"/> */}
            </div>
            <h2>{sanityAbout.info}</h2>
            <p>{sanityAbout.description}</p>
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
