import * as React from "react";
import Layout from "../components/Layout/Layout";
import About from "../components/About/About";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div style={{marginTop:"15rem"}}></div>
      <About />
    </Layout>
  );
};

export default IndexPage;
