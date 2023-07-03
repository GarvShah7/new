import { HomeVideoSectionFragment } from "../../app/api/generated/graphql/graphql";
import Image from "../Common/Image";
import CustomImage from "../Common/Image";

const VideoSection: React.FC<{ block: HomeVideoSectionFragment }> = ({
  block,
}) => {
  const { image } = block || {};

  return (
    <section className="videoSection">
      <div className="w-full">
        <div className="videoContent">
          {image && <Image block={image} priority={true} />}
        </div>
      </div>
    </section>
  );
};
export default VideoSection;
