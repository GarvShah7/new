import clsx from "clsx";
import { UiUxDevelopmentSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import { PortableText } from "@portabletext/react";
import Image from "../Image";
import TitleSubtitle from "../TitleSubtitle";

const UIUXDevelopmentSection: React.FC<{
  block: UiUxDevelopmentSectionFragment;
}> = ({ block }) => {
  const { sectionTheme, appIconImage, description, uiUxImage, titleSubtitle } =
    block || {};

  return (
    <section
      className={clsx(
        "uiuxDevSection sectionInnerSpace",
        sectionTheme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="uiuxDevContent">
          {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
          <div className={`uiuxDevList ${description?.customClassName}`}>
            <PortableText value={description?.customeRichTextRaw} />
          </div>
          <div className="uiuxImgGrid">
            {uiUxImage?.map((image, index) => {
              return (
                <div className="uiuxImgBox" key={index}>
                 {image && <Image block={image} key={index} />}
                </div>
              );
            })}
          </div>
          <ul className="uiuxIconGrid">
            {appIconImage?.map((item, index) => {
              return <DynamicComponent block={item} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default UIUXDevelopmentSection;
