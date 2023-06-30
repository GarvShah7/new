import clsx from "clsx";
import { TestimonialsSectionFragment } from "../../../app/api/generated/graphql/graphql";
import TitleSubtitle from "../TitleSubtitle";
import Carousel from "../../Carousel";
import Image from "../Image";
import React from "react";

const TestimonialsSection: React.FC<{ block: TestimonialsSectionFragment }> = ({
  block,
}) => {
  const { titleSubtitle, testimonialsCard, sectionTheme } = block || {};

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section
      className={clsx(
        "testimonialSection sectionInnerSpace",
        sectionTheme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="testimonialContent">
          <div className="sectionInfo">
            {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
          </div>
          <div className="testimonialWrap">
            <Carousel
              responsive={responsive}
              arrows={false}
              showDots={true}
              autoPlaySpeed={8000}
            >
              {Array.isArray(testimonialsCard) &&
                testimonialsCard?.map((testimonial, index) => {
                  const { description, profileDetail, profileName, image } =
                    testimonial || {};
                  return (
                    <div key={index} className="testiBox gridBox col2-1">
                      <div className="leftSide">
                        <p className="description">{description}</p>
                        <div className="profileWrap">
                          <h5 className="profileName">{profileName}</h5>
                          <h6 className="profileDetails">{profileDetail}</h6>
                        </div>
                      </div>
                      <div className="rightSide text-right">
                        {image?.map((item, index) => {
                          return (
                            <React.Fragment>
                              {item && <Image block={item} key={index} />}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
