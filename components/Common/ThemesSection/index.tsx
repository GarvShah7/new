import clsx from "clsx";

import { ThemesSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";
import TitleSubtitle from "../TitleSubtitle";

const ThemesSection: React.FC<{ block: ThemesSectionFragment }> = ({
  block,
}) => {
  const { titleSubtitle, themesImage, sectionTheme } = block || {};

  return (
    <section
      className={clsx(
        "themesSection innerSectionSpace",
        sectionTheme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="themesContent">
          {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
          <ul className="themesList">
            {themesImage?.map((image, index) => {
              return <li key={index}>{image && <Image block={image} />}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ThemesSection;
