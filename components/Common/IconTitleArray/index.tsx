import { Fragment } from "react";

import { IconTitleArrayFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";

const IconTitleArray: React.FC<{ block: IconTitleArrayFragment }> = ({
  block,
}) => {
  const { image, title } = block;

  return (
    <Fragment>
      <li>
        {image && <Image block={image} />}
        <h6>{title}</h6>
      </li>
    </Fragment>
  );
};

export default IconTitleArray;
