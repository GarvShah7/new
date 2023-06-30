import clsx from "clsx";
import IconTitle from "./IconTitle";
import { RichTextIconSideImageSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import { PortableText } from "@portabletext/react";
import Image from "../Image";
import TitleSubtitle from "../TitleSubtitle";

const RichTextIconSideImageSection: React.FC<{
  block: RichTextIconSideImageSectionFragment;
}> = ({ block }) => {
  const {
    developmentIconTitle,
    image,
    sectionTheme,
    titleSubtitle,
    description,
    iconTitleDirection,
  } = block || {};

  return (
    <section
      className={clsx(
        "iconSidebySideSection sectionInnerSpace",
        sectionTheme ?? "bg-white",
        iconTitleDirection ?? "none"
      )}
    >
      <div className="container">
        <div className="iconSidebySideContent">
          {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
          <div className="iconSidebySideGrid gridBox">
            <div className="leftSide">
              <PortableText value={description?.customeRichTextRaw} />

              {iconTitleDirection === "left" && (
                <ul
                  className={`richIconWrap col-${String(
                    developmentIconTitle?.length
                  )}`}
                >
                  {developmentIconTitle?.map((item, index) => {
                    return (
                      <li key={index}>
                        <IconTitle {...item} />
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="rightSide">
              {image && <Image block={image} />}
              {iconTitleDirection === "right" && (
                <ul
                  className={`richIconWrap col-${String(
                    developmentIconTitle?.length
                  )}`}
                >
                  {developmentIconTitle?.map((item, index) => {
                    return (
                      <li key={index}>
                        <IconTitle {...item} />
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RichTextIconSideImageSection;
