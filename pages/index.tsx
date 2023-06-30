import { NextPage } from "next";
import { getClient } from "../app/api/lib/sanity-client";
import {
  GetHomePageQuery,
  MetaTagFragment,
} from "../app/api/generated/graphql/graphql";
import { reduce_to_single } from "../app/api/utils/reduce-to-single";
import React from "react";
import HomeAllSections from "../components/HomePage/HomeAllSections";
import Layout from "../components/Common/Layout";
import { getMetaObjects } from "../app/api/utils/helper";
import {  getHomePageData } from "./api/getHomePage";
export type PageProps = {
  getPage: GetHomePageQuery["allHome"];
  allServicesTypes: GetHomePageQuery["allServiceType"];
  hireDedicatedType: GetHomePageQuery["allHireDedicatedPageTypes"];
  hireDedicatedPages: GetHomePageQuery["allAllPage"];
  servicesPage: GetHomePageQuery["allAllPage"];
  servicesCard: GetHomePageQuery["allAllPage"];
  allBlogInner: GetHomePageQuery["allBlogInner"];
};

const Home: NextPage<PageProps> = ({
  getPage,
  allServicesTypes,
  hireDedicatedType,
  hireDedicatedPages,
  servicesPage,
  servicesCard,
  allBlogInner,
}) => {
  const home = reduce_to_single(getPage);
  const { header, footer, sections, seo } = home || {};
  const { meta_title, meta_tags, noFollow, noIndex } = seo || {};
  const tags = meta_tags && getMetaObjects(meta_tags as MetaTagFragment[]);
  const sanity_client = getClient();
  return (
    <div>
      <Layout
        SeoTitle={meta_title || ""}
        tags={tags as any}
        header={header || {}}
        footer={footer || {}}
        allServicesTypes={allServicesTypes}
        hireDedicatedPages={hireDedicatedPages}
        hireDedicatedType={hireDedicatedType}
        servicesPage={servicesPage}
      >
        {sections?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <HomeAllSections
                block={item}
                extraProps={allBlogInner}
                services_card={servicesCard}
              />
            </React.Fragment>
          );
        })}
      </Layout>
    </div>
  );
};
export async function getStaticProps() {
  const {
    allBlogInner,
    allServicesTypes,
    getPage,
    hireDedicatedPages,
    hireDedicatedType,
    servicesCard,
    servicesPage,
  } = await getHomePageData();

  return {
    props: {
      getPage,
      allServicesTypes,
      hireDedicatedType,
      hireDedicatedPages,
      servicesPage,
      servicesCard,
      allBlogInner,
    },
    revalidate: 1000,
  };
}
export default Home;
