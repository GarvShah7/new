import { PortableText } from "@portabletext/react";
import { DevelopmentCardFragment } from "../../../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../../../DynamicComponent";
import Image from "../../../Image";
const ServicesDevelopmentCard: React.FC<DevelopmentCardFragment> = ({
  ...cardItem
}) => {
  const { developmentCardRichText, image } = cardItem || {};

  const { customeRichTextRaw } = developmentCardRichText || {};
  return (
    <>
      <div className="serDevCard gridBox col2-1">
        <div className="leftSide">
          <PortableText value={customeRichTextRaw} />
        </div>
        <div className="rightSide">{image && <Image block={image} />}</div>
      </div>
    </>
  );
};
export default ServicesDevelopmentCard;
