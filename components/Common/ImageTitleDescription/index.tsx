import clsx from "clsx";
import { Fragment } from "react";

import { ImageTitleDescriptionSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import React from "react";
import Carousel from "../../Carousel";

const ImageTitleDescription: React.FC<{
  block: ImageTitleDescriptionSectionFragment;
}> = ({ block }) => {
  const {
    details,
    titleSubtitle,
    align,
    columns,
    sectionTheme,
    sliderOption,
    widthOption,
    borderOption,
    ourApproach,
    imageOption,
  } = block || {};

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <Fragment>
      <section
        className={clsx(
          "imageTitleDescriptionSection sectionInnerSpace bg-white",
          sectionTheme ?? "bg-white",
          ourApproach ? "ourApproach" : "withoutOurApproach",
          imageOption ?? "isIcon"
        )}
      >
        <div className="container">
          <div className="imageTitleDescriptionContent">
            <DynamicComponent block={titleSubtitle} />
            <div
              className={clsx(
                "imgTitleDescWrap",
                `content-${align}`,
                `col-${columns}`,
                sliderOption ?? "withoutSlider",
                widthOption ?? "fullWidth",
                borderOption ?? "withBorder"
              )}
            >
              {sliderOption === "withSlider" && (
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  showDots={false}
                  itemClass="leftSpace"
                  autoPlaySpeed={8000}
                >
                  {Array.isArray(details) &&
                    details?.map((detail, index) => {
                      return <DynamicComponent block={detail} key={index} />;
                    })}
                </Carousel>
              )}
              {sliderOption === "withoutSlider" && (
                <React.Fragment>
                  {Array.isArray(details) &&
                    details?.map((detail, index) => {
                      return <DynamicComponent block={detail} key={index} />;
                    })}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default ImageTitleDescription;
