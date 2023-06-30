import clsx from "clsx";
import { ImageRichTextCardSectionFragment } from "../../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../../DynamicComponent";
import { PortableText, ReactPortableTextList } from "@portabletext/react";
import Image from "../../Image";

const imageRichTextCardSection: React.FC<{
  block: ImageRichTextCardSectionFragment;
  className?: string;
}> = ({ block, className }) => {
  const { image, description } = block || {};
  const { customeRichTextRaw } = description || {};
  const richText = customeRichTextRaw as ReactPortableTextList
  return (
    <div className={clsx("mvBox", className ?? "")}>
      <div className="mvImg">
       {image && <Image block={image} />}
      </div>
      <div className="mvContent">
        <PortableText value={richText} />
      </div>
    </div>
  );
};

export default imageRichTextCardSection;
