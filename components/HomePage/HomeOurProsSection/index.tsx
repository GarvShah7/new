import clsx from "clsx";

import { HomeOurProsSectionFragment } from "../../../app/api/generated/graphql/graphql";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";


const HomeOurProsSection: React.FC<{ block: HomeOurProsSectionFragment }> = ({
  block,
}) => {
  const { title, subTitle, descriptionRaw, sectionTheme } = block || {};
  const ringText = "love";
  const ringText1 = ringText.slice(1);
  const firstLetter = ringText.charAt(0);
  const components: Partial<PortableTextReactComponents | any> = {
        
    block: ({ children, node }) => {
        switch (node.style) {
          case 'normal':
            return <p className="text-[1.125em] font-[400] text-white leading-[2] pb-[1em]">{children}</p>;
          default:
            return <p className="text-white">{children}</p>;    
        }
      },
}

  return (
    <section className="ourProsConsSection sectionInnerSpace my-[8.125em]">
      <div className="container max-w-[1440px] w-[90%] mx-auto">
        <div
          className={clsx(
            "ourProsConsContent gridBox col15-4 bg-black py-[4.375em] px-[4em] rounded-[10px] grid bg-black py-[4.375em] px-[4em] rounded-[10px] grid-cols-[1.5fr_4fr] gap-[6em]",
            sectionTheme ?? "bg-black py-[4.375em] px-[4em] rounded-[10px] "
          )}
        >
          <div className="leftSide">
            <h2 className="color-White font-Montserrat text-[3.75em] font-[700] leading-[1.4] text-white capitalize">
              {title}{" "}
              <span className="blueRing">
                <span className="firstLetter">{firstLetter}</span>
                {ringText1}
              </span>
            </h2>
          </div>
          <div className="rightSide font-Montserrat">
            <h4 className="color-White text-[1.875em] leading-[1.4] font-[500] pb-[0.667em] text-white capitalize">{subTitle}</h4>
            {descriptionRaw && <PortableText value={descriptionRaw} components={components}/>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOurProsSection;
