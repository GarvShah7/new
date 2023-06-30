import clsx from "clsx";
import { Fragment } from "react";

import { RichTextWithSideImageFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import { PortableText } from "@portabletext/react";
import Image from "../Image";

const RichTextWithSideImage: React.FC<{
  block: RichTextWithSideImageFragment;
}> = ({ block }) => {
  const { image, description, useRichText, sectionTheme, title } = block || {};
  const { customeRichTextRaw } = useRichText || {};

  return (
    <Fragment>
      <section className={clsx(sectionTheme ?? "bg-white")}>
        <div>
          <h5>{title}</h5>
          <PortableText value={customeRichTextRaw} />
          {image && <Image block={image} />}
          <PortableText value={description?.customeRichTextRaw} />
        </div>
      </section>
    </Fragment>
  );
};

export default RichTextWithSideImage;
