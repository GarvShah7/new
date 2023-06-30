import clsx from "clsx";
import React, { Fragment } from "react";
import { CompanyVisionsectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import { PortableText } from "@portabletext/react";

const CompanyVisionSection: React.FC<{
  block: CompanyVisionsectionFragment;
}> = ({ block }) => {
  const {
    description,
    missionVisionCard,
    companyVisionFeatures,
    sectionTheme,
  } = block || {};
  const { customeRichTextRaw } = description || {};

  return (
    <Fragment>
      <div
        className={clsx(
          "companyvisionSection sectionInnerSpace",
          sectionTheme ?? "bg-white"
        )}
      >
        <div className="container">
          <div className="companyvisionContent">
            <div className="innerpageSectionInfo">
              <PortableText value={customeRichTextRaw} />
            </div>
            <div className={`mvGrid col-${String(missionVisionCard?.length)}`}>
              {missionVisionCard?.map((item, index) => {
                return <DynamicComponent block={item} key={index} />;
              })}
            </div>
          </div>
        </div>

        {companyVisionFeatures?.map((feature, index) => {
          return <DynamicComponent block={feature} key={index} />;
        })}
      </div>
    </Fragment>
  );
};

export default CompanyVisionSection;
