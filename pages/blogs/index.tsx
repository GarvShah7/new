import { NextPage } from "next";
import { getClient } from "../../app/api/lib/sanity-client";
import { BlogService } from "../../app/api/models";
import { reduce_to_single } from "../../app/api/utils/reduce-to-single";
import Layout from "../../components/Common/Layout";
import { GetBlogPageQuery, MetaTagFragment } from "../../app/api/generated/graphql/graphql";
import BlogPage from "../../components/BlogPage";
import { getMetaObjects } from "../../app/api/utils/helper";
import { getBlogPage } from "../api/getBlogPage";


export type PageProps = {
  getblogPage: GetBlogPageQuery["allBlog"];
  allServicesTypes: GetBlogPageQuery["allServiceType"];
  hireDedicatedType: GetBlogPageQuery["allHireDedicatedPageTypes"];
  hireDedicatedPages: GetBlogPageQuery["allAllPage"];
  servicesPage: GetBlogPageQuery["allAllPage"];
  allCategory: GetBlogPageQuery["allCategory"];
  allBlogInner: GetBlogPageQuery["allBlogInner"];
};

const BlogIndexPage: NextPage<PageProps> = ({
      getblogPage,
      allServicesTypes,
      hireDedicatedType,
      hireDedicatedPages,
      servicesPage,
      allCategory,
      allBlogInner,
}) => {
  const sanity_client = getClient();
 {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
  {/*@ts-ignore */}
  const page = reduce_to_single(getblogPage);
  const {seo,footer,header} = page || {}
  const {meta_title,meta_tags,noFollow,noIndex} = seo || {}
  const tags = meta_tags && getMetaObjects(meta_tags as MetaTagFragment[])
  return (
    <div>
      <Layout
        SeoTitle={meta_title || ""}
        tags={tags as any}
    footer={footer || {}}
    header={header || {}}
        allServicesTypes={allServicesTypes}
        hireDedicatedPages={hireDedicatedPages}
        hireDedicatedType={hireDedicatedType}
        servicesPage={servicesPage}
      >
         <BlogPage block={page} blogPostCard={allBlogInner} allCategory={allCategory} />
      </Layout>
    </div>
  );
};
export async function getStaticProps() {
const {allBlogInner,allCategory,allServicesTypes,getblogPage,hireDedicatedPages,hireDedicatedType,servicesPage } = await getBlogPage()
  return {
    props: {
      getblogPage,
      allServicesTypes,
      hireDedicatedType,
      hireDedicatedPages,
      servicesPage,
      allCategory,
      allBlogInner,
    },
    revalidate: 10,
  };
}
export default BlogIndexPage;
