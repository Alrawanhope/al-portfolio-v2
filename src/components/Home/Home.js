import * as React from "react";
import {homeSession,homeHeader} from "./Home.module.css"

const Home = ({sanityHome}) => {
    console.log("sanityHome",sanityHome)
  return (
    <section className={homeSession}>
      <div className={homeHeader}>
        <h1>{sanityHome.title}</h1>
        <p>{sanityHome.subtitle}</p>
      </div>
    </section>
  );
};

export default Home