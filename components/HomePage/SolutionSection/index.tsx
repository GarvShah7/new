import React, { Fragment, useState } from "react";
import clsx from "clsx";

import SolutionDetails from "./SolutionDetails";
import { SolutionSectionFragment } from "../../../app/api/generated/graphql/graphql";
import TitleSubtitle from "../../Common/TitleSubtitle";

const SolutionSection: React.FC<{ block: SolutionSectionFragment }> = ({
  block,
}) => {
  const { titleSubtitle, solutionDetails, sectionTheme } = block || {};

  const [sortedDetails, setSortedDetails] = useState<string | null | undefined>(
    solutionDetails && solutionDetails ? solutionDetails[0]?.title : null
  );

  return (
    <section
      className={clsx("commonSolutionSection", sectionTheme ?? "bg-white")}
    >
      <div className="container max-w-[1440px] w-[90%] mx-auto">
        <div className="commonSolutionSectionContent">
          {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
          <div className="tabsWrap w-full max-w-[60em] mx-auto mb-[3.125em] pt-[4.375em] text-center font-Montserrat">
            {solutionDetails?.map((buttonTitle, index) => {
              const { description, image, title } = buttonTitle || {};
              return (
                <div className="tabBox inline-block mb-[12px] ml-[15px]" key={index}>
                  <button
                    className={clsx("tab black bg-black hover:bg-blue text-white text-[1em] font-[500] rounded-[10px] px-[0.75em] py-[0.3em] border-2 border-black hover:border-blue transition-all delay-150 ease-linear", {
                      active: sortedDetails == buttonTitle?.title!,
                    })}
                    onClick={() => setSortedDetails(title && title)}
                  >
                    {buttonTitle?.title}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="tabsContent grid grid-cols-[1.2fr_3fr] gap-[5em] items-center">
            {solutionDetails?.map((details, index) => {
              return (
                <React.Fragment key={index}>
                  {details?.title === sortedDetails && (
                    <SolutionDetails {...details} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
