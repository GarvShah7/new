import clsx from "clsx";

import { TeamPhotosSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";
import TitleSubtitle from "../TitleSubtitle";

const TeamPhotosSection: React.FC<{ block: TeamPhotosSectionFragment }> = ({
  block,
}) => {
  const { image, titleSubtitle, sectionTheme } = block || {};

  return (
    <section
      className={clsx(
        "teamPhotoSection sectionInnerSpace",
        sectionTheme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="teamPhotoContent innerSpacing">
       {titleSubtitle &&   <TitleSubtitle block={titleSubtitle} />}
          <div className="teamImage innerSpacing">
            {image && <Image block={image} />}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamPhotosSection;
