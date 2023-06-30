import clsx from "clsx";
import { Fragment } from "react";

import { OurProcessSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";
import TitleSubtitle from "../TitleSubtitle";

const OurProcessSection: React.FC<{ block: OurProcessSectionFragment }> = ({
  block,
}) => {
  const { ourProcessAppIconImage, titleSubtitle, sectionTheme } = block;

  return (
    <Fragment>
      <section
        className={clsx(
          "ourProcessSection sectionInnerSpace",
          sectionTheme ?? "bg-white"
        )}
      >
        <div className="container">
          <div className="ourProcessContent">
           {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
            <ul className="ourProcessList">
              {ourProcessAppIconImage?.map((item, index) => {
                return (
                  <li key={index}>
                    {item?.image && <Image block={item?.image} />}
                    <div className="progressNumberWrap">
                      <div className="progressNumber">{index + 1}</div>
                    </div>
                    <h6>{item?.title}</h6>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurProcessSection;
