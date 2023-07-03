import React, { Fragment } from "react";
import { ImageWithTitleSectionFragment } from "../../app/api/generated/graphql/graphql";
import DynamicComponent from "../DynamicComponent";
import clsx from "clsx";
import Image from "../Common/Image";

const ImageWithTitleSection: React.FC<{
  block: ImageWithTitleSectionFragment;
}> = ({ block }) => {
  const { imageWithTitleArray, sectionTheme } = block || {};

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1440, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 1,
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
          "imageWithTitleSection withSlider sectionInnerSpace mt-[8.125em] mb-0",
          sectionTheme ?? "bg-white"
        )}
      >
        <div className="container max-w-[100%]">
          <div className="slider w-full h-[100%] relative overflow-hidden">
            <div className="slide-track flex w-[7000px] animate-scroll">
              {imageWithTitleArray?.map((items, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="slide w-[24em] ml-[1em] grayscale hover:grayscale-0">
                     {items?.image &&  <Image block={items?.image} className="h-[18em] w-full max-w-[100%] object-cover"/>}
                      <h6>{items?.title}</h6>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ImageWithTitleSection;
