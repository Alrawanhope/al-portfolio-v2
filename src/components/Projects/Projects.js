import React, { useState, useEffect } from "react";
import {
  projectContainer,
  projectHeader,
  projectNavbar,
  projectListDiv,
  projectActive,
  projectImageBox,
  projectOverlay,
  projectHoverTitle,
} from "./Projects.module.css";
import { Link } from "gatsby";
import { FaLongArrowAltRight } from "react-icons/fa";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Projects = ({ sanityProjects }) => {
  console.log("sanityProjects", sanityProjects);
  const [projectList, setProjectList] = useState([]);
  const [activeID, setActiveID] = useState(45);
  const [usedLanguage, setUsedLanguage] = useState([]);

  useEffect(() => {
    const lang =
      sanityProjects &&
      sanityProjects.projectList.map((project) => project.usedLanguage);
    const filteredUsedLanguage = [...new Set(lang)];
    setUsedLanguage(filteredUsedLanguage);
    setProjectList(sanityProjects.projectList);
  }, []);

  const filterProject = (usedLanguage, i) => {
    if (usedLanguage === "all") {
      setActiveID(45);
      setProjectList(sanityProjects.projectList);
    } else {
      const filteredProjectList =
        sanityProjects.projectList &&
        sanityProjects.projectList.filter(
          (project) => project.usedLanguage === usedLanguage
        );
      setActiveID(i);
      setProjectList(filteredProjectList);
    }
  };
  return (
    <section className={projectContainer}>
      <div className={projectHeader}>
        <h1>{sanityProjects.title}</h1>
        <p>{sanityProjects.description}</p>
      </div>

      <div className={projectNavbar}>
        <div
          className={activeID === 45 && projectActive}
          role={"button"}
          tabIndex={0}
          onClick={() => filterProject("all")}
          onKeyDown={() => filterProject("all")}
        >
          All
        </div>
        {usedLanguage &&
          usedLanguage.map((lang, i) => {
            return (
              <div
                key={i}
                className={activeID === i && projectActive}
                role={"button"}
                tabIndex={0}
                onClick={() => filterProject(lang, i)}
                onKeyDown={() => filterProject(lang, i)}
              >
                {lang}
              </div>
            );
          })}
      </div>
      {/* <GatsbyImage
image={project.image.asset.gatsbyImageData}
alt="info-logo"
/> */}

      <div className={projectListDiv}>
        {projectList &&
          projectList.map((project, i) => {
            return (
              <div className={projectImageBox} key={i}>
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
