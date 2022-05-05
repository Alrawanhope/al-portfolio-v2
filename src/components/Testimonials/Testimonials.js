import * as React from "react";
import {
  testimonialContainer,
  testimonialHeader,
  testimonialList,
  testimonialImage,
  testimonialDetails,
  testimonialCarousel,
} from "./Testimonials.module.css";
import "../../styles/common.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonials = ({ sanityTestimonials }) => {
  console.log("sanityTestimonials", sanityTestimonials);
  return (
    <section className={testimonialContainer}>
      <div className={testimonialHeader}>
        <h1>{sanityTestimonials.title}</h1>
        <p>{sanityTestimonials.description}</p>
      </div>

      <div className={testimonialList}>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
          interval={2500}
        >
          {sanityTestimonials &&
            sanityTestimonials.testimonialsList &&
            sanityTestimonials.testimonialsList.map((testimonial, i) => {
              return (
                <div className={testimonialCarousel}>
                  <div className={testimonialImage}>
                    <img src={testimonial.image.asset.url} alt="test" />
                  </div>
                  <div className={testimonialDetails}>
                    <blockquote>{testimonial.description}</blockquote>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.from}</p>
                  </div>
                </div>
              );
            })}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
