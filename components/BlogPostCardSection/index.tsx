import { Fragment } from "react";
import { getDateString } from "../../app/api/utils/helper/getDateString";
import DynamicComponent from "../DynamicComponent";
import { BlogInnerFragment, BlogPostCardFragment } from "../../app/api/generated/graphql/graphql";
import Link from "next/link";
import Image from "../Common/Image";

const BlogPostCardSection: React.FC<{ block: BlogPostCardFragment }> = ({
  block,
}) => {
  const { title, publishDate, featuredImage, authorDetails, slug } =
    block || {};
  const { authorImage, authorPosition, authorTitle } = authorDetails || {};
  const convertDate = getDateString(publishDate);

  return (
    <Fragment>
    
        <div className="postBox">
          <div className="featureImage">
          <Link
        href={
          String(slug?.current)?.startsWith("/blogs/")
            ? String(slug?.current)
            : "/blogs/" + String(slug?.current)
        }
      >   {featuredImage && <Image block={featuredImage} />}</Link>
          </div>
          <div className="metaBox">
            <div className="leftSide">
              <div className="authorContent">
                <div className="authorImage">
                  {authorImage && <Image block={authorImage} />}
                  <div className="date mobileView">
                    <h6>{convertDate}</h6>
                  </div>
                </div>
                <div className="authorDetails">
                  <h4>{authorTitle}</h4>
                  <h6>{authorPosition}</h6>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <div className="date">
                <h6>{convertDate}</h6>
              </div>
            </div>
          </div>
          <Link
        href={
          String(slug?.current)?.startsWith("/blogs/")
            ? String(slug?.current)
            : "/blogs/" + String(slug?.current)
        }
      > <h3>{title}</h3></Link>
          <div className="arrowLink">
            <Link
              href={
                String(slug?.current).startsWith("/blogs/")
                  ? String(slug?.current)
                  : "/blogs/" + String(slug?.current)
              }
              className="link withArrow blueLink"
            >
              <i className="arrowIcon" />
              <span>Explore</span>
            </Link>
          </div>
        </div>

    </Fragment>
  );
};

export default BlogPostCardSection;
