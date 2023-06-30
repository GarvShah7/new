import React from "react";

import { SolutionDetailsFragment } from "../../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../../DynamicComponent";
import Image from "../../../Common/Image";

const SolutionDetails: React.FC<SolutionDetailsFragment> = ({ ...details }) => {
  const { description, image, title } = details || {};
  return (
    <React.Fragment>
      <div className="leftSide font-Montserrat">
        <h3 className="text-[3em] font-[600] pb-[0.2em] leading-[1.4]">{title}</h3>
        <p className="text-[1.125em] font-[400] leading-[1.7]">{description}</p>
      </div>
      <div className="rightSide tabImageGrid grid grid-cols-[2fr_1fr] gap-[1.5em]">
        {image?.map((img, index) => {
          return (
            <div className="tabImage first:row-span-2 " key={index}>
              {img && <Image block={img} className="object-fill w-full h-full max-w-[100%]"/>}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default SolutionDetails;
