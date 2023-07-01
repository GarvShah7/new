import clsx from "clsx";
import { Fragment } from "react";

import { HeroSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import { PortableText } from "@portabletext/react";
import Image from "../Image";

const HeroSection: React.FC<{ block: HeroSectionFragment }> = ({ block }) => {
  const { description, image, sectionTheme } = block || {};
  const { customeRichTextRaw } = description || {};

  return (
    <Fragment>
      <section
        className={clsx("innerpageBannerSection", sectionTheme ?? "bg-white")}
      >
        <div className="container">
          <div className="innerPageBannerContent gridBox">
            {image ? (
              <div className="leftSide">
                <PortableText value={customeRichTextRaw} />
              </div>
            ) : (
              <div className="leftSide withBtmPad">
                <PortableText value={customeRichTextRaw} />
              </div>
            )}

            {image && (
              <div className="rightSide innerBannerImage">
                {image && <Image block={image} />}
              </div>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default HeroSection;
