import { Fragment, useEffect, useRef } from "react";
import {
  BlogInnerFragment,
  BlogInnerSideContentFragment,
} from "../../app/api/generated/graphql/graphql";
import { getDateString } from "../../app/api/utils/helper/getDateString";
import { useBlogProvider } from "../../app/api/generated/hooks/globalContext";
import React from "react";
import ReviewsSection from "../Common/ReviewsSection";
import BlogPostCardSection from "../BlogPostCardSection";
import NewsLetterSection from "./NewsLetterSection";
import SideContentTitle from "./SideContentTitle";
import { PortableText } from "@portabletext/react";
import Button from "../Common/Button";
import Image from "../Common/Image";

const BlogInnerPage: React.FC<{
  block?: BlogInnerFragment;
  slideTitle?: string[];
  extraProps?: BlogInnerFragment[];
  blogInnerSideContent?: BlogInnerSideContentFragment;
  env?: NodeJS.ProcessEnv | null;
}> = ({ block, extraProps, blogInnerSideContent, env }) => {
  const {
    button,
    content,
    featuredImage,
    reviewsSection,
    publishDate,
    sideContentCard,
    title,
  } = block || {};
  const { customeRichTextRaw } = content || {};
  const convertDate = getDateString(publishDate);

  const SideTitle =
    customeRichTextRaw &&
    customeRichTextRaw
      .filter((i: { _type: string }) => i?._type == "titleContent")
      .map((i: { title: string }, index: React.Key | null | undefined) => {
        return <React.Fragment key={index}>{i?.title}</React.Fragment>;
      });

  const { blogData } = useBlogProvider();
  const { data, methods } = blogData;
  const { readingProgress } = data;
  const { setReadingProgress, setPageHeight } = methods;

  const ReadingProgress: React.FC<{
    target: React.RefObject<HTMLBaseElement>;
  }> = ({ target }) => {
    const scrollListener = () => {
      if (!target.current) {
        return;
      }

      const element = target.current;

      const totalHeight =
        element &&
        element?.clientHeight - element?.offsetTop - window.innerHeight;
      const blogMainDivHeight =
        document?.getElementById("mainSection2")?.clientHeight ?? 0;
      const heroDovHeight =
        document?.getElementById("heroSection")?.clientHeight ?? 0;
      const totalH = blogMainDivHeight + heroDovHeight;

      const windowScrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (windowScrollTop === 0) {
        return setReadingProgress(0);
      }

      if (windowScrollTop > totalH) {
        return setReadingProgress(100);
      }

      setReadingProgress((windowScrollTop / totalH) * 100);
      setPageHeight(totalHeight);
    };

    useEffect(() => {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    });

    return (
      <div className="single-post__progress">
        <div
          className="reading-progress-bar"
          style={{ width: `${readingProgress ?? 0}%` }}
        />
      </div>
    );
  };
  const target = useRef<any>();

  return (
    <Fragment>
      <ReadingProgress target={target} />
      <section
        id="heroSection"
        className="innerpageBannerSection innerBlogBannerSection bg-black"
      >
        <div className="container">
          <div className="innerPageBannerContent gridBox">
            <div className="leftSide">
              <h6 className="bannerDate">{convertDate}</h6>
              <h1>{title}</h1>
              {button && <Button block={button} />}
            </div>
            <div className="rightSide innerBannerImage">
              {featuredImage && <Image block={featuredImage} />}
            </div>
          </div>
        </div>
      </section>

      <section id="mainSection2" className="innerBlogWrap" ref={target}>
        <div className="container">
          <div className="innerBlogContent">
            <div className="leftSide">
              <SideContentTitle
                contentTitle={sideContentCard}
                sideTitle={SideTitle || []}
                blogInnerSideContent={
                  blogInnerSideContent as unknown as BlogInnerSideContentFragment
                }
              />

              <NewsLetterSection
                blogInnerSideContent={
                  blogInnerSideContent as unknown as BlogInnerSideContentFragment
                }
                // env={env}
              />
            </div>
            <div className="rightSide">
              <PortableText value={customeRichTextRaw} />
            </div>
          </div>
        </div>
      </section>
      <div className="postsWrap sectionInnerSpace">
        <div className="container">
          <div className="postGrid gridBox col3">
            {extraProps?.map((item, index) => {
              return <BlogPostCardSection block={item} key={index} />;
            })}
          </div>
        </div>
      </div>
      {reviewsSection && <ReviewsSection block={reviewsSection} />}
    </Fragment>
  );
};

export default React.memo(BlogInnerPage);
