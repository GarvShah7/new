import React from "react";
import { JamstackCteServiceListFragment } from "../../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../../DynamicComponent";
import Image from "../../../Common/Image";

const JamstackCTEServiceList: React.FC<{
  block: JamstackCteServiceListFragment;
}> = ({ block }) => {
  const { title, image } = block || {};

  return (
    <React.Fragment>
      <span className="correctIcon">
       {image && <Image block={image} />}
      </span>
      {title}
    </React.Fragment>
  );
};

export default JamstackCTEServiceList;
