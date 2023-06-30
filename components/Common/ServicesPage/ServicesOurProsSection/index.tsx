import clsx from "clsx";

import { ServiceOurProcessSectionFragment } from "../../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../../DynamicComponent";
import { PortableText } from "@portabletext/react";
import Image from "../../Image";

const ServicesOurProsSection: React.FC<{
  block: ServiceOurProcessSectionFragment;
}> = ({ block }) => {
  const { description, image, mainTitle, pointerImage, sectionTheme } =
    block || {};
  const { customeRichTextRaw } = description || {};

  return (
    <section
      className={clsx(
        "ourProcessSection sectionInnerSpace bg-black pb-0",
        sectionTheme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="ourProcessContent">
          <div className="ourProcessGrid gridBox col1-2">
            <div className="leftSide">
              <h3>{mainTitle}</h3>
              <PortableText value={customeRichTextRaw} />
            </div>
            <div className="rightSide">
              {image && <Image block={image} />}
              <div className="pointerImage">
                {pointerImage && <Image block={pointerImage} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesOurProsSection;
