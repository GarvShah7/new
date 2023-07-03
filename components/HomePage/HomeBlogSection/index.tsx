import clsx from "clsx";
import {
  BlogInnerFragment,
  HomeBlogSectionFragment,
} from "../../../app/api/generated/graphql/graphql";

import AllBlogPosts from "../../Common/AllBlogPostsSection";
import Button from "../../Common/Button";
import React from "react";
const HomeBlogSection: React.FC<{
  block: HomeBlogSectionFragment;
  extraProps?: BlogInnerFragment[];
}> = ({ block, extraProps }) => {
  const { mainTitle, subtitle, button, sectionTheme } = block || {};

  return (
    <section className={clsx("homeBlogSection", sectionTheme ?? "bg-white")}>
      <div className="container max-w-[1440px] w-[90%] mx-auto">
        <div className="homeBlogSectionContent">
          <div className="sectionInfo">
            <h2 className="section--Title color-black">{mainTitle}</h2>
            <h3 className="section--subTitle color-black">{subtitle}</h3>
          </div>
          <div className="postGrid gridBox col3">
            {extraProps?.map((item, index) => {
              const { slug } = item || {};
              return (
             
                <React.Fragment>
                  <div className="postBox">
                    {item && <AllBlogPosts item={item} key={index} />}
                  </div>
                </React.Fragment>

       
              );
            })}
          </div>
          <div className="seeAllBtn text-center">
            {button && <Button block={button} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
