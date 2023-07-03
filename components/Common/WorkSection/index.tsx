import clsx from "clsx";
import { WorkSectionFragment } from "../../../app/api/generated/graphql/graphql";
import TitleSubtitle from "../TitleSubtitle";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";

const WorkSection: React.FC<{ block: WorkSectionFragment }> = ({ block }) => {
  const { titleSubtitle, workImage, sectionTheme } = block || {};


  return (
    <section className={clsx("workSection", sectionTheme ?? "bg-white")}>
      <div className="container max-w-[1440px] w-[90%] mx-auto">
        <div className="workContent">
          {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
          <div className="workGrid gridBox grid grid-cols-2 gap-[1.875em] pt-[4.375em]">
            {workImage?.map((item, index) => {
              const {backgroundColor,image} = item || {}
              
              return (
                <div  className={clsx(`gifBox p-[2.5em] rounded-[10px]`)} style={{background : backgroundColor!}} key={index}>
                  {image && <Image block={image} className="w-full object-fill h-[28.5em]"/>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
