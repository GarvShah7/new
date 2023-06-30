import React from "react";
import { TabItemFragment } from "../../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../../DynamicComponent";
import Image from "../../Image";

const TabItem: React.FC<TabItemFragment> = ({ ...item }) => {
  const { appIconLinkItem } = item || {};

  return (
    <React.Fragment>
      {appIconLinkItem?.map((item, index) => {
        return (
          <li key={index}>
            <div className="techIcon">
              {item?.appImage && <Image block={item?.appImage} />}
            </div>
            <h6>{item?.title}</h6>
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default TabItem;
