import * as React from "react";
import { Link } from "gatsby";
import error from "../images/404.gif";
import { fofContainer, fofImage, fofContent } from "../styles/404.module.css";

const NotFoundPage = () => {
  return (
    <section className={fofContainer}>
      <h1>404</h1>
      <div className={fofImage}>
        <img src={error} alt="gif" />
      </div>
      <div className={fofContent}>
        <h2>Look like you're lost</h2>
        <p>the page you are looking for not avaible!</p>
        <Link to="/">Go to Home</Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
