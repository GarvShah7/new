import React, { PropsWithChildren } from "react";
import DynamicComponent from "../../DynamicComponent";
import { RightSymbolTitleArrayFragment } from "../../../app/api/generated/graphql/graphql";
import Image from "../Image";

const RightSymbolTitleArray: React.FC<
  PropsWithChildren<{ block: RightSymbolTitleArrayFragment }>
> = ({ block, ...props }) => {
  const { jamstackCTEServiceList } = block || {};

  return (
    <ul>
      {jamstackCTEServiceList?.map((item, index) => {
        return (
          <li key={index}>
           {item?.image  && <Image block={item?.image} />}
            {item?.title}
          </li>
        );
      })}
    </ul>
  );
};
export default RightSymbolTitleArray;
