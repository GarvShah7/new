import clsx from "clsx";
import { Fragment } from "react";
import JamstackCTEServiceList from "./JamstackCTEServiceList";

import { JamstackCteSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../../Common/Image";
import Button from "../../Common/Button";

const JamstackCTESection: React.FC<{ block: JamstackCteSectionFragment }> = ({
  block,
}) => {
  const {
    button,
    description,
    image,
    title,
    jamStackserviceList,
    sectionTheme,
  } = block || {};

  return (
    <Fragment>
      <section
        className={clsx(
          "jamstackCTESection  sectionInnerSpace bg-grad",
          sectionTheme ?? "bg-white"
        )}
      >
        <div className="container">
          <div className="jamstackCTEContent gridBox">
            <div className="leftSide">
              <h4>{title}</h4>
              <p>{description}</p>
              <ul className="list">
                {Array.isArray(jamStackserviceList) &&
                  jamStackserviceList?.map((list, index) => {
                    return (
                      <li className="white" key={index}>
                        {list && <JamstackCTEServiceList block={list} />}
                      </li>
                    );
                  })}
              </ul>
              <div className="sectionButton">
               {button &&  <Button block={button} />}
              </div>
            </div>
            <div className="rightSide text-center">
             {image &&  <Image block={image} />}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default JamstackCTESection;
