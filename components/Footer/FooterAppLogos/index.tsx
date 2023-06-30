import React from "react";
import { FooterLogoFragment } from "../../../app/api/generated/graphql/graphql";
import Link from "../../Common/Link";
import DynamicComponent from "../../DynamicComponent";
import Image from "../../Common/Image";

const FooterAppLogos: React.FC<{ block: FooterLogoFragment }> = ({ block }) => {
  const { image, Hoverimage, ApplogoLink, target, title } = block || {};

  return (
    <React.Fragment>
      <Link to={ApplogoLink} target={target as string} className="[&>img]:BLOCK">
       {image &&  <Image block={image} className=""/>}
       {Hoverimage &&  <Image block={Hoverimage} className="hidden" />}
      </Link>
    </React.Fragment>
  );
};

export default FooterAppLogos;
