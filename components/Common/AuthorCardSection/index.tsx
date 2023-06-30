import { Fragment } from "react";
import { AuthorCardSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import { PortableText } from "@portabletext/react";
import Image from "../Image";

const AuthorCardSection: React.FC<{ block: AuthorCardSectionFragment }> = ({
  block,
}) => {
  const { authorCardAppLogo, description, image, authorName, authorPosition } =
    block || {};
  const { customeRichTextRaw } = description || {};

  return (
    <Fragment>
      <section className="authorCardSection">
        <div className="authorCardContent">
          <div className="authorCardHeader">
            <div className="leftSide">
              <div className="authorInfo">
                <div className="authorImage">
                  {image && <Image block={image} />}
                </div>
                <div className="authorName">
                  <h6>{authorName}</h6>
                  <span>{authorPosition}</span>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <ul className="authorSocialIcon">
                {authorCardAppLogo?.map((item, index) => {
                  return (
                    <li key={index}>
                      <DynamicComponent block={item} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <PortableText value={customeRichTextRaw} />
        </div>
      </section>
    </Fragment>
  );
};

export default AuthorCardSection;
