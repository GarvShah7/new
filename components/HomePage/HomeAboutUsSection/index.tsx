import clsx from "clsx";
import { HomeAboutUsSectionFragment } from "../../../app/api/generated/graphql/graphql";
import TitleSubtitle from "../../Common/TitleSubtitle";
import RichTextSection from "../../Common/RichTextSection";
import DynamicComponent from "../../DynamicComponent";
import Image from "../../Common/Image";

const HomeAboutUsSection: React.FC<{ block: HomeAboutUsSectionFragment }> =  ({
  block,
}) => {
  const { titleSubtitle, aboutDescription, image, sectionTheme } = block || {};
  
  return (
    <section
      className={clsx(
        "homeAboutUsSection bg-black sectionInnerSpace my-[8.125em] py-[8.125em]",
        sectionTheme ?? "bg-white"
      )}
    >
      <div className="container max-w-[1440px] w-[90%] mx-auto">
        <div className="homeAboutUsSectionContent">
          <div className="sectionInfo text-center pb-[4.375em] text-white">
            {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
          </div>
          <div className="homeAboutUsSectionContentGrid gridBox col2-1 grid grid-cols-[2fr_1fr] gap-[12.5em] items-center">
            <div className="leftSide font-Montserrat">
              {aboutDescription && <RichTextSection block={aboutDescription} />}
            </div>
            <div className="rightSide">
              {image && <Image block={image} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUsSection;
