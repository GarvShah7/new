import { NextPage } from "next";
import { BlogInnerFragment, BlogInnerSideContentFragment, GetBlogInnerPageQuery, MetaTagFragment } from "../../app/api/generated/graphql/graphql";
import { BlogService } from "../../app/api/models";
import { getClient } from "../../app/api/lib/sanity-client";
import Layout from "../../components/Common/Layout";
import { reduce_to_single } from "../../app/api/utils/reduce-to-single";
import BlogInnerPage from "../../components/BlogInnerPage";
import React from "react";
import { useBlogProvider } from "../../app/api/generated/hooks/globalContext";
import { getMetaObjects } from "../../app/api/utils/helper";
import { getBlogDetailPage } from "../api/getBlogDetailPage";

export type PageProps = {
  page_data: GetBlogInnerPageQuery["allBlogInner"];
  blog_inner_side_content: GetBlogInnerPageQuery["allBlogInnerSideContent"];
  blog_data: GetBlogInnerPageQuery["limitedBlogs"];
  servicesPage: GetBlogInnerPageQuery["allAllPage"];
  allServicesTypes: GetBlogInnerPageQuery["allServiceType"];
  hireDedicatedPages: GetBlogInnerPageQuery["allAllPage"];
  hireDedicatedType: GetBlogInnerPageQuery["allHireDedicatedPageTypes"];
};

const allPage: NextPage<PageProps> = ({
  page_data,
  blog_inner_side_content,
  blog_data,
  servicesPage,
  allServicesTypes,
  hireDedicatedPages,
  hireDedicatedType,
}) => {
   {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
  {/*@ts-ignore */}
  const page = reduce_to_single(page_data);
  const bloginnersidecontent = blog_inner_side_content as BlogInnerSideContentFragment
  const {seo,footer,header} = page || {}
  const {meta_title,meta_tags,noFollow,noIndex} = seo || {}
  const tags = meta_tags && getMetaObjects(meta_tags as MetaTagFragment[])
  const sanity_client = getClient();
  return (
    <React.Fragment>
        <Layout
         header={header || {}}
         footer={footer || {}}
          SeoTitle={meta_title || ""}
          tags={tags as any}
          allServicesTypes={allServicesTypes}
          hireDedicatedPages={hireDedicatedPages}
          hireDedicatedType={hireDedicatedType}
          servicesPage={servicesPage}
        >
          <BlogInnerPage
            block={page}
            extraProps={blog_data}
            blogInnerSideContent={bloginnersidecontent}
          />
        </Layout>
    </React.Fragment>
  );
};
export default allPage;

export async function getStaticPaths() {
  const pageService = new BlogService();
  const data = await pageService.getAllBlogInnerPagePath({
    filter: { slug: { current: { neq: "blogs" } } },
  });
  const paths = data.GetAllBlogInnerPagePath.map((post) => ({
    params: { slug: post?.slug?.current },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const getslug = params.slug;
  const {allServicesTypes,blog_data,blog_inner_side_content,hireDedicatedPages,hireDedicatedType,page_data,servicesPage,data } = await getBlogDetailPage(getslug)
  return {
    props: {
      page_data,
      blog_inner_side_content,
      blog_data: data.limitedBlogs,
      servicesPage,
      allServicesTypes,
      hireDedicatedPages,
      hireDedicatedType,
    },
    revalidate: 10,
  };
}
