import clsx from "clsx";
import { Fragment } from "react";

import { RichTextFragment } from "../../../app/api/generated/graphql/graphql";
import { PortableText, PortableTextReactComponents, ReactPortableTextList } from "@portabletext/react";

const RichTextSection: React.FC<{ block: RichTextFragment }> = ({ block }) => {
  const { customeRichTextRaw, customClassName } = block || {};
 const richText = customeRichTextRaw as ReactPortableTextList
 const components: Partial<PortableTextReactComponents | any> = {       
  block: ({ children, node }) => {
      switch (node.style) {
        case 'normal':
          return <p className="text-[1em] font-[400] text-[#FFF9] leading-[1.7] pb-[1em]">{children}</p>;
        default:
          return <p className="text-white text-[1.875em] font-[500] pb-[0.7em]">{children}</p>;
      }
    },
 }
  return (
    <Fragment>
      <section
        className={`richTextSection sectionInnerSpace ${
          customClassName && customClassName?.length > 0
            ? customClassName
            : "withoutCustomClass"
        }`}
      >
        <div className="container">
          <div className={clsx("richTextContent w-[90%] mx-auto")}>
            <PortableText value={richText} components={components}/>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default RichTextSection;
