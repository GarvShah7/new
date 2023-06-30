import clsx from "clsx";
import { Fragment } from "react";

import { HourlyDeveloperSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import { PortableText } from "@portabletext/react";
import Image from "../Image";
import TitleSubtitle from "../TitleSubtitle";
import Button from "../Button";

const HourlyDeveloperSection: React.FC<{
  block: HourlyDeveloperSectionFragment;
}> = ({ block }) => {
  const {
    sectionTheme,
    button,
    desc,
    image,
    price,
    price_section,
    titleSubtitle,
  } = block || {};
  const { description, title } = price_section || {};

  return (
    <Fragment>
      <section
        className={clsx(
          "hourlyBasisSection sectionInnerSpace",
          sectionTheme ?? "bg-white"
        )}
      >
        <div className="container">
          <div className="hourlyBasisContent">
       {titleSubtitle &&     <TitleSubtitle block={titleSubtitle} />}
            <div className="hourlyBasisDetails">
              <div className="quoteImage">
                {image && <Image block={image} />}
              </div>
              <h3>{title}</h3>
              <PortableText value={description?.customeRichTextRaw} />
              <div className="priceWrap">
                <span className="dollar">{price?.split(" ").at(0)}</span>
                <span className="price">{price?.split(" ").at(1)}</span>
                <span className="time">{price?.split(" ").at(2)}</span>
              </div>
              <p>{desc}</p>
             {button && <Button block={button} />}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default HourlyDeveloperSection;
