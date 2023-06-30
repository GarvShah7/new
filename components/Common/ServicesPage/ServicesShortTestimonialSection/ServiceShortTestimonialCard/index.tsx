import { PortableText } from "@portabletext/react";
import Image from "../../../Image";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ServiceShortTestimonialCard: React.FC<{ item: any }> = ({ item }) => {
  const {
    description,
    image,
    mainTitle,
    profileDescription,
    profileImage,
    profileName,
  } = item || {};
  const { customeRichTextRaw } = description || {};

  return (
    <>
      <div className="shortTestimonialGrid gridBox">
        <div className="leftSide">
          <h4>{mainTitle}</h4>

          <PortableText value={customeRichTextRaw} />
          <div className="profileBox">
            <div className="profileLeft">
              {profileImage && <Image block={profileImage} />}
            </div>
            <div className="profileRight">
              <h6>{profileName}</h6>
              <PortableText value={profileDescription?.customeRichTextRaw} />
            </div>
          </div>
        </div>
        <div className="rightSide">
         {image && <Image block={image} />}
        </div>
      </div>
    </>
  );
};
export default ServiceShortTestimonialCard;
