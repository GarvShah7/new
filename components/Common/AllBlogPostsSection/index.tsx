import { Fragment } from "react";
import DynamicComponent from "../../DynamicComponent";
import { getDateString } from "../../../app/api/utils/helper/getDateString";
import { HomeBlogInnerFragment } from "../../../app/api/generated/graphql/graphql";
import Link from "../Link";
import Image from "../Image";

const AllBlogPosts: React.FC<{ item: HomeBlogInnerFragment }> = ({ item }) => {
  const { publishDate, featuredImage, authorDetails, slug, title } = item || {};
  const { authorImage, authorPosition, authorTitle } = authorDetails || {};
  const convertDate = getDateString(publishDate);

  return (
    <Fragment>
      <div className="featureImage">
        <Link
          to={
            String(slug?.current)?.startsWith("/blogs/")
              ? String(slug?.current)
              : "/blogs/" + String(slug?.current)
          }
          className="link withArrow blackLink"
        >
          {" "}
          {featuredImage && <Image block={featuredImage} />}
        </Link>
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
        to={
          String(slug?.current)?.startsWith("/blogs/")
            ? String(slug?.current)
            : "/blogs/" + String(slug?.current)
        }
        className="link withArrow blackLink"
      >
        {" "}
        <h3>{title}</h3>
      </Link>
      <div className="arrowLink">
        <Link
          to={
            String(slug?.current)?.startsWith("/blogs/")
              ? String(slug?.current)
              : "/blogs/" + String(slug?.current)
          }
          className="link withArrow blackLink"
        >
          <i className="arrowIcon" />
          <span className="exploreIcon">Explore</span>
        </Link>
      </div>
    </Fragment>
  );
};

export default AllBlogPosts;
