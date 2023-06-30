import clsx from "clsx";
import React from "react";

import { TitleWithFourImageSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";

const TitleWithFourImage: React.FC<{
  block: TitleWithFourImageSectionFragment;
}> = ({ block }) => {
  const { title, fourImage, sectionTheme } = block || {};
  return (
    <section
      className={clsx(
        "titlewithfourimageSection sectionInnerSpace",
        sectionTheme ?? "bg-white"
      )}
    >
      <div className="container fullWidth">
        <div className="titlewithfourimageContent">
          <div className="fourImgWrap gridBox">
            <div className="leftBox">
              {fourImage?.slice(0, 1).map((image, index) => {
                return <>{image && <Image block={image} key={index} />}</>;
              })}
            </div>
            <div className="middleBox">
              {fourImage?.slice(1, 2).map((image, index) => {
                return <>{image && <Image block={image} key={index} />}</>;
              })}
              <h3>{title}</h3>
              {fourImage?.slice(2, 3).map((image, index) => {
                return <>{image && <Image block={image} key={index} />}</>;
              })}
            </div>
            <div className="rightBox">
              {fourImage?.slice(3, 4).map((image, index) => {
                return <>{image && <Image block={image} key={index} />}</>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleWithFourImage;
