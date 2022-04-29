import * as React from "react";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import {graphql} from "gatsby"

const IndexPage = ({data}) => {
  console.log("DATA",data)
  return (
    <Layout pageTitle="Home Page">
      <Home sanityHome={data.sanityHome}/>
      <About sanityAbout={data.sanityAbout}/>
      <Projects sanityProjects={data.sanityProjects}/>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
query {
  sanityHome {
    subtitle
    title
  }

  sanityAbout {
    info
    description
    image {
      asset {
        gatsbyImageData
      }
    }
  }

  sanityProjects {
    title
    description
    projectList {
      title
      description
      slug {
        current
      }
      projectLink
      image {
        asset {
          gatsbyImageData
          url
        }
      }
    }
  }
}
`
