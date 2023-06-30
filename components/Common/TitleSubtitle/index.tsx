
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { TitleSubtitleFragment } from "../../../app/api/generated/graphql/graphql";
import React from "react";

const TitleSubtitle: React.FC<{ block: TitleSubtitleFragment }> = ({
  block,
}) => {
  const { subtitle, title } = block || {};
  const { customeRichTextRaw } = subtitle || {};
  const components: Partial<PortableTextReactComponents | any> = {
        
    block: {
      h3: ({children}) => <h3 className="font-Montserrat text-[1.375em] font-[500] leading-[1.4] text-center">{children}</h3>,
    },
  }

  return (
    <React.Fragment>
      <div className={`innerpageSectionInfo ${title && subtitle ? "" : "p-0"}`}>
        {title && title?.length > 0 ? (
          <h2 className="section--Title font-Montserrat text-[1.125em] font-[500] leading-[1.4] pb-[0.7em] text-[#767676] text-center">{title}</h2>
        ) : null}
        <span className="">
          {subtitle ? <PortableText value={customeRichTextRaw} components={components}/> : null}
        </span>
      </div>
    </React.Fragment>
  );
};

export default TitleSubtitle;
