import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import {
  quoteContainer,
  quoteHeader,
  quoteGalleryContainer,
  quoteGalleryPics,
  quoteModal,
  quoteCloseIcon,
} from "../styles/quotes.module.css";
import { graphql } from "gatsby";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { AiOutlineClose } from "react-icons/ai";

const Quotes = ({ data }) => {
  const [image, setImage] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const images = data.sanityQuotes.quoteList.map((quote) => {
      return {
        original: quote.image.asset.url,
        thumbnail: quote.image.asset.url,
      };
    });
    setImage(images);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imageViewer = (i) => {
    setShowModal(true);
    setCurrentImage(i);
  };

  console.log("sanityQuotes", data.sanityQuotes);

  return (
    <Layout pageTitle="Home Page">
      <section className={quoteContainer}>
        <div className={quoteHeader}>
          <h1>{data.sanityQuotes.title}</h1>
          <p>
            I design and code beautifully simple things, and I love what I do.
          </p>
        </div>

        <div className={quoteGalleryContainer}>
          {data.sanityQuotes.quoteList.map((quote, i) => {
            return (
              <div
                className={quoteGalleryPics}
                key={i}
                role={"button"}
                tabIndex={0}
                onKeyDown={() => imageViewer(i)}
                onClick={() => imageViewer(i)}
              >
                <img src={quote.image.asset.url} style={{ width: "100%" }} alt={quote.image.asset.url} />
              </div>
            );
          })}
        </div>
      </section>
      {showModal && (
        <div className={quoteModal}>
          <AiOutlineClose
            onClick={() => setShowModal(false)}
            className={quoteCloseIcon}
          />
          <ImageGallery items={image} startIndex={currentImage} />
        </div>
      )}
    </Layout>
  );
};

export default Quotes;

export const query = graphql`
  query {
    sanityQuotes {
      title
      description
      quoteList {
        title
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
`;
