import { Fragment } from "react";
import DynamicComponent from "../../../DynamicComponent";
import { ImageTitleDescriptionDetailsFragment } from "../../../../app/api/generated/graphql/graphql";
import { PortableText } from "@portabletext/react";
import Image from "../../Image";

const ImageTitleDescriptionDetails: React.FC<{
  block: ImageTitleDescriptionDetailsFragment;
}> = ({ block }) => {
  const { descriptionDetailsRichText, image, title } = block || {};
  return (
    <Fragment>
      <div className="imgTitleDescBox">
        <div className="gifBox">{image && <Image block={image} />}</div>
        <div className="gifContent">
          {title && title?.length > 0 ? <h4>{title}</h4> : null}
          <PortableText
            value={descriptionDetailsRichText?.customeRichTextRaw}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ImageTitleDescriptionDetails;
