import React from "react";
import { FaLaptopCode,FaLightbulb } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import {
  aboutContainer,
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
  aboutAws,
  aboutSanity
} from "./About.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

export default function About({ sanityAbout }) {
  console.log("sanityAbout", sanityAbout);
  return (
    <section className={aboutContainer}>
        <div className={aboutHeader}>
        <h1>{sanityAbout.title}</h1>
        <p>{sanityAbout.subTitle}</p>
      </div>
        <div className={aboutRowContainer}>
          <div className={aboutRowChild}>
            <div>
              <MdSpeed style={{ width: "80%", height: "100%" }} />
            </div>
            <h2>Fast</h2>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div className={aboutRowChild}>
            <div>
              <FaLaptopCode style={{ width: "80%", height: "100%" }} />
            </div>
            <h2>Responsive</h2>
            <p>
            My layouts will work on any device, big or small.
            </p>
          </div>
          <div className={aboutRowChild}>
            <div>
              <FaLightbulb style={{ width: "80%", height: "100%" }} />
            </div>
            <h2>Refactoring</h2>
            <p>
            Strong preference for code refactoring, Without changing its external behavior.
            </p>
          </div>
          <div className={aboutRowChild}>
            <div>
              <IoIosRocket style={{ width: "80%", height: "100%" }} />
            </div>
            <h2>Dynamic</h2>
            <p>
            Websites don't have to be static, I love making pages come to life.
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
              <div>85%</div>
            </div>
            <div className={`${aboutPercentage} ${aboutGatsby}`}>
              <div>GATSBY</div>
              <div></div>
              <div>80%</div>
            </div>
            <div className={`${aboutPercentage} ${aboutNode}`}>
              <div>NODE</div>
              <div></div>
              <div>70%</div>
            </div>
            <div className={`${aboutPercentage} ${aboutAws}`}>
              <div>AWS</div>
              <div></div>
              <div>70%</div>
            </div>
            <div className={`${aboutPercentage} ${aboutSanity}`}>
              <div>Sanity</div>
              <div></div>
              <div>80%</div>
            </div>
          </div>
        </div>
    </section>
  );
}
