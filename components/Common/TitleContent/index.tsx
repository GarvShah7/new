
import { PortableText, ReactPortableTextList } from "@portabletext/react";
import { TitleContentFragment } from "../../../app/api/generated/graphql/graphql";
import React from "react";

const TitleContent: React.FC<{
  block: Omit<TitleContentFragment, 'content'> & {content : {customeRichText : ReactPortableTextList}};
  index: number;
}> = ({ block, index }) => {
  const { title, content } = block || {};
  const { customeRichText } = content || {};
  return (
    <React.Fragment>
      <section id={`postHas_content_${index}`}>
        {title && title?.length > 0 ? <h4>{title}</h4> : null}
        <PortableText value={customeRichText} />
      </section>
    </React.Fragment>
  );
};
export default TitleContent;
