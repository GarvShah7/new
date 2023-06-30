import clsx from "clsx";
import { Fragment } from "react";

import { TitleSubtitleWithImageArraySectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";
import TitleSubtitle from "../TitleSubtitle";

const TitleSubtitleWithImageArraySection: React.FC<{
  block: TitleSubtitleWithImageArraySectionFragment;
}> = ({ block }) => {
  const { titleSubtitle, sectionTheme, imageArray } = block || {};

  return (
    <Fragment>
      <section
        className={clsx(
          "imageGridSection sectionInnerSpace",
          sectionTheme ?? "bg-white"
        )}
      >
        <div className="container">
          <div className="imageGridContent">
            {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
            <div className="imageGrid">
              <div className="rowOne">
                {imageArray?.slice(0, 4).map((image, index) => {
                  return (
                    <div className="imageBox" key={index}>
                      {image && <Image block={image} />}
                    </div>
                  );
                })}
              </div>
              <div className="rowTwo">
                {imageArray?.slice(4, 8).map((image, index) => {
                  return (
                    <div className="imageBox" key={index}>
                      {image && <Image block={image} />}
                    </div>
                  );
                })}
              </div>
              <div className="rowThree">
                {imageArray?.slice(8, 12).map((image, index) => {
                  return (
                    <div className="imageBox" key={index}>
                      {image && <Image block={image} />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TitleSubtitleWithImageArraySection;
