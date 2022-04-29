import * as React from "react";
import {
  projectContainer,
  projectHeader,
  projectList,
  projectImageBox,
  projectOverlay,
  projectHoverTitle,
} from "./Projects.module.css";
import { Link } from "gatsby";
import { FaLongArrowAltRight } from "react-icons/fa";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Projects = ({ sanityProjects }) => {
  console.log("sanityProjects", sanityProjects);
  return (
    <section className={projectContainer}>
      <div className={projectHeader}>
        <h1>{sanityProjects.title}</h1>
        <p>{sanityProjects.description}</p>
      </div>

      <div className={projectList}>
        {sanityProjects &&
          sanityProjects.projectList &&
          sanityProjects.projectList.map((project) => {
            return (
              <div className={projectImageBox}>
                <div className={projectOverlay}></div>
                <img src={project.image.asset.url} alt="test" />
                <div className={projectHoverTitle}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div>
                    <Link to="/contact">
                      Visit Website{" "}
                      <span>
                        <FaLongArrowAltRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Projects;

{
  /* <GatsbyImage
image={project.image.asset.gatsbyImageData}
alt="info-logo"
/> */
}
