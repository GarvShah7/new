import { ImageButtonTitleFragment } from "../../../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../../../DynamicComponent";
import Button from "../../../Button";
import Image from "../../../Image";

const ImageButtontitle: React.FC<ImageButtonTitleFragment> = (item) => {
  const { button, image, title } = item || {};

  return (
    <div className="portfolioBox">
      <div className="portfolioImage">{image && <Image block={image} />}</div>
      <div className="portfolioCategory">
        {button && <Button block={button} />}
      </div>
      <div className="portfolioTitle">
        <h4>{title}</h4>
      </div>
    </div>
  );
};
export default ImageButtontitle;
