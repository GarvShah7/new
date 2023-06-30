import clsx from "clsx";
import { Fragment } from "react";

import { ChooseChSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import TitleSubtitle from "../TitleSubtitle";

const ChooseCHSection: React.FC<{ block: ChooseChSectionFragment }> = ({
  block,
}) => {
  const { titleSubtitle, appIconImage, sectionTheme } = block;

  return (
    <Fragment>
      <section
        className={clsx(
          "chooseCHSection sectionInnerSpace",
          sectionTheme ?? "bg-white"
        )}
      >
        <div className="container">
          <div className="chooseCHContent">
            {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
            <ul className="chooseIconWrap">
              {appIconImage?.map((item, index) => {
                return <DynamicComponent block={item} key={index} />;
              })}
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ChooseCHSection;
