import clsx from "clsx";
import { Fragment } from "react";
import { ImageSideBySideTitleDescArraySectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";
import TitleSubtitle from "../TitleSubtitle";
import { PortableText } from "@portabletext/react";

const ImageSideBySideTitleDescArraySection: React.FC<{
  block: ImageSideBySideTitleDescArraySectionFragment;
}> = ({ block }) => {
  const { titleSubtitle, image, titleDescriptionArray } = block || {};

  return (
    <Fragment>
      <section
        className={clsx("imgSidebySideTitleDescArraySection sectionInnerSpace")}
      >
        <div className="container">
          <div className="imgSidebySideTitleDescArrayContent">
        {titleSubtitle &&    <TitleSubtitle block={titleSubtitle} />}
            <div className="imgSidebySideTitleDescArrayGrid gridBox col1-2">
              <div className="leftSide">{image && <Image block={image} />}</div>
              <div className="rightSide">
                <div className="descArrayGrid">
                  {titleDescriptionArray?.map((i, index) => {
                    return (
                      <div className="descArrayBox" key={index}>
                        <h3>{i?.title}</h3>
                        <PortableText value={i?.description?.customeRichTextRaw} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ImageSideBySideTitleDescArraySection;
