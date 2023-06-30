import clsx from "clsx";
import { Fragment } from "react";
import { ImageArraySectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";

const ImageArraySection: React.FC<{ block: ImageArraySectionFragment }> = ({
  block,
}) => {
  const { imageArray ,sectionTheme, isBigger, title } = block || {};
  return (
    <Fragment>
      <section
        className={clsx(
          "imageArraySection sectionInnerSpace",
          sectionTheme ?? "bg-white",
          isBigger && "mb-0"
        )}
      >
        <div className="container">
          <div className="imageArrayContentmvGrid">
            {title && title?.length > 0 ? (
              <div className="innerpageSectionInfo">
                {title && title?.length > 0 ? title : null}
              </div>
            ) : null}

            <div
              className={`imgArrayGrid gridBox col-${imageArray?.length} ${
                isBigger ? "bigImageGrid desktopView" : ""
              }`}
            >
              {imageArray?.map((image, index) => {
                return (
                  <div className="imageBox" key={index}>
                    {image && <Image block={image} />}
                  </div>
                );
              })}
            </div>
            {isBigger && (
              <div
                className={`mobileView ${
                  isBigger ? "imgArrayGrid bigImageGrid mobileView" : ""
                }`}
              >
                {imageArray?.slice(0, 1).map((image, index) => {
                  return (
                    <div className="imageBox bigImage" key={index}>
                      {image && <Image block={image} />}
                    </div>
                  );
                })}
                <div className="imageBoxSlider">
                  {imageArray?.slice(1).map((image, index) => {
                    return (
                      <div className="imageBox" key={index}>
                        {image && <Image block={image} />}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default ImageArraySection;
