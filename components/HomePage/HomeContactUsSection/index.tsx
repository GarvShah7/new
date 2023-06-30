import clsx from "clsx";
import { HomeContactUsSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "../../Common/Image";

const HomeContactUsSection: React.FC<{
  block: HomeContactUsSectionFragment;
}> = ({ block }) => {
  const { contactDescription, image, sectionTheme } = block || {};
  const { customeRichTextRaw } = contactDescription || {};
  const components: Partial<PortableTextReactComponents | any> = {
        
    block: ({ children, node }) => {
        switch (node.style) {
          case 'normal':
            return <p className="font-Montserrat text-[1em] text-[#000000b3] leading-[2] font-[400] pb-[1em]">{children}</p>;
          default:
            return <p className="font-Montserrat text-[1.875em] leading-[1.4] font-[600] pb-[0.667em]">{children}</p>;
        } 
      },
  }

  return (
    <section
      className={clsx(
        "contactUsSection sectionInnerSpace",
        sectionTheme ?? "bg-white"
      )}
    >
      <div className="container max-w-[1440px] w-[90%] mx-auto">
        <div className="contactUsContent my-[8.125em]">
          <div className="gridBox col2-1 flex item-center justify-between">
            <div className="leftSide w-[60%]">
              <PortableText value={customeRichTextRaw} components={components}/>
            </div>
            <div className="rightSide w-[30%] flex items-center">
              {image && <Image block={image} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactUsSection;
