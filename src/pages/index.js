import * as React from "react";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Testimonials from "../components/Testimonials/Testimonials";
import {graphql} from "gatsby"

const IndexPage = ({data}) => {
  console.log("DATA",data)
  return (
    <Layout pageTitle="Home Page">
      <Home sanityHome={data.sanityHome}/>
      <About sanityAbout={data.sanityAbout}/>
      <Projects sanityProjects={data.sanityProjects}/>
      <Testimonials sanityTestimonials={data.sanityTestimonials}/>
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
    title
    subTitle
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
      usedLanguage
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

  sanityTestimonials {
    title
    description
    testimonialsList {
      name
      from
      description
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
