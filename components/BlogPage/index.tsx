import clsx from "clsx";
import { Fragment, useState } from "react";
import {
  BlogFragment,
  BlogInnerFragment,
  BlogPostCardFragment,
  CategoryFragment,
} from "../../app/api/generated/graphql/graphql";
import Image from "next/image";
import React from "react";
import ReviewsSection from "../Common/ReviewsSection";
import BlogPostCardSection from "../BlogPostCardSection";
import { PortableText } from "@portabletext/react";
import notFoundImage from '../../app/assets/images/not_found.svg'

const BlogPage: React.FC<{
  block: BlogFragment;
  blogPostCard: BlogPostCardFragment[];
  allCategory: CategoryFragment[];
}> = ({ block, blogPostCard, allCategory }) => {
  const { hero,reviewsSection } = block || {};
  const { title, description } = hero || {};
  const { customeRichTextRaw } = description || {};
  const emptyQuery = "";
  const [state, setState] = useState({
    filteredData: blogPostCard,
    query: emptyQuery,
  });

  const filterItems = (item: BlogInnerFragment) => {
    if (item) {
      const isData =
        currCategory == "All Post"
          ? item
          : Array.isArray(item?.category) &&
            item?.category?.filter((i) => i?.title == currCategory)?.length > 0;
      return isData;
    }
  };
  const [currBlogNo, setCurrBlogNo] = useState(12);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event?.target?.value;
    const posts = blogPostCard || [];
    const filteredData = posts.filter((post) => {
      const { title } = post;
      return title?.toLowerCase().includes(query.toLowerCase());
    });
    setState({
      query,
      filteredData,
    });
  };
  const [currCategory, setCurrCategory] = useState("All Post");
  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const dataLength = state?.filteredData?.filter(filterItems)?.length;

  return (
    <Fragment>
      <section
        className={clsx("innerpageBannerSection blogBannerSection bg-black")}
      >
        <div className="container">
          <div className="innerpageBannerContent gridBox col2-1">
            <div className="leftSide">
              {currCategory == "All Post" ? (
                <React.Fragment>
                  <h1>{title}</h1>
                  {customeRichTextRaw && (
                    <PortableText value={customeRichTextRaw} />
                  )}
                </React.Fragment>
              ) : (
                <h1> {currCategory} </h1>
              )}
              <div className="catList">
                <div className="leftSide">
                  <h5>Category</h5>
                  <div className="horizontalLine" />
                </div>
                <div className="rightSide">
                  <ul>
                    <li
                      className={currCategory == "All Post" ? "active" : ""}
                      onClick={() => setCurrCategory("All Post")}
                    >
                      All Post
                    </li>
                    {allCategory?.map((i, index) => {
                      return (
                        <React.Fragment>
                          <li
                            key={index}
                            className={
                              i?.title && i?.title == currCategory
                                ? "active"
                                : ""
                            }
                            onClick={() => setCurrCategory(String(i.title))}
                          >
                            {i.title}
                          </li>
                        </React.Fragment>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <input
                type="text"
                className="searchBox"
                placeholder="Search"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="postsWrap sectionInnerSpace">
        <div className="container">
          {state?.filteredData?.filter(filterItems)?.length > 0 ? (
            <div className="postGrid gridBox col3">
              {state?.filteredData
                ?.filter(filterItems)
                ?.slice(0, currBlogNo)
                ?.map((item, index) => {
                  return <BlogPostCardSection block={item} key={index} />;
                })}
            </div>
          ) : (
            <div className="catnotFoundImage">
              <div className="notFoundImageImage">
                <Image
                  height={10}
                  width={10}
                  src={notFoundImage}
                  alt="close icon"
                />
              </div>
              <h4>WE ARE SORRY, No Blogs Found!</h4>
            </div>
          )}
          <div className="loadMore">
            {currBlogNo <= dataLength && (
              <button
                className="button blue"
                onClick={() => setCurrBlogNo((prevNo) => prevNo + 12)}
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
      {reviewsSection && <ReviewsSection block={reviewsSection} />}
    </Fragment>
  );
};

export default BlogPage;
