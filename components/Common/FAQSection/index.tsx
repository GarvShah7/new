import clsx from "clsx";
import React, { Fragment, useState } from "react";

import QueAnsSection from "./QueAnsSection";

import { FaqSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";
import TitleSubtitle from "../TitleSubtitle";
import Button from "../Button";

const FAQSection: React.FC<{ block: FaqSectionFragment }> = ({ block }) => {
  const {
    sectionTitle,
    sideContentWithQueAns,
    sectionTheme,
    titleButton,
    titleSubtitle,
    titleButtonWithBG,
  } = block || {};

  const { title, button } = titleButton || {};
  const str = title;
  const lastWord = str?.split(" ").pop();

  let lastStr = title;
  const lastIndex = lastStr?.lastIndexOf(" ");

  lastStr = lastStr?.substring(0, lastIndex);
  const [sortedFAQ, setSortedFAQ] = useState<string | null | undefined>(
    sideContentWithQueAns ? sideContentWithQueAns[0]?.title : null
  );

  return (
    <Fragment>
      <section
        className={clsx(
          "FAQSection sectionInnerSpace mt-0",
          sectionTheme ?? "bg-white",
          titleButtonWithBG ? "titleButtonWithbG" : "titleButtonWithoutBG"
        )}
      >
        <div className="container">
          <div className="FAQContent">
           {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
            <h4>{sectionTitle}</h4>
            <div className="FAQGrid gridBox col1-2">
              <div className="leftSide">
                {sideContentWithQueAns?.map((i, index) => {
                  return (
                    <div className="faqTab" key={index}>
                      {i?.image && <Image block={i?.image} />}
                      <h6
                        className={clsx({
                          active: sortedFAQ == i?.title!,
                        })}
                        onClick={() => setSortedFAQ(i?.title)}
                      >
                        {i?.title}
                      </h6>
                    </div>
                  );
                })}
              </div>
              <div className="rightSide">
                {sideContentWithQueAns?.map((details, index) => {
                  return (
                    <React.Fragment key={index}>
                      {details?.title === sortedFAQ && (
                        <QueAnsSection {...details} />
                      )}
                    </React.Fragment>
                  );
                })}
                <div className="questionWrap">
                  <h4>
                    {lastStr} <span className="withRainbowImg">{lastWord}</span>
                  </h4>
                {button &&  <Button block={button} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default FAQSection;
