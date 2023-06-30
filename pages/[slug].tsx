import { NextPage } from "next";
import {
  AllPageFragment,
  GetAllPageQuery,
  MetaTagFragment,
} from "../app/api/generated/graphql/graphql";
import { getClient } from "../app/api/lib/sanity-client";
import { PageService } from "../app/api/models";
import Layout from "../components/Common/Layout";
import React, { Fragment, useEffect } from "react";
import Sections from "../components/Common/Sections";
import { useRouter } from "next/router";
import { getMetaObjects } from "../app/api/utils/helper";
import { getAllPageData } from "./api/getAllPage";

export type PageProps = {
  page: GetAllPageQuery["allAllPage"];
  servicesCard: GetAllPageQuery["allAllPage"];
  servicesPage: GetAllPageQuery["allAllPage"];
  allServicesTypes: GetAllPageQuery["allServiceType"];
  hireDedicatedPages: GetAllPageQuery["allAllPage"];
  hireDedicatedType: GetAllPageQuery["allHireDedicatedPageTypes"];
};

const allPage: NextPage<PageProps> = ({
  page,
  servicesCard,
  servicesPage,
  allServicesTypes,
  hireDedicatedPages,
  hireDedicatedType,
}) => {

  const { sections ,footer,header,seo} = (page as AllPageFragment) || {};
  const sanity_client = getClient();
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
        {sections?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Sections block={item} services_card={servicesCard} />
            </React.Fragment>
          );
        })}
      </Layout>
    </div>
  );
};
export default allPage;

export async function getStaticPaths() {
  const pageService = new PageService();
  const GetAllPagePaths = await pageService.getAllPagePath({
    filter: { slug: { current: { neq: "/" } } },
  });
  const paths = GetAllPagePaths.GetAllPagePath.filter(
    (i) => i?.slug?.current != "404"
  ).map((post) => ({
    params: { slug: post?.slug?.current },
  }));


  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const getslug = params.slug;
  const {allServicesTypes,hireDedicatedPages,hireDedicatedType,page,servicesCard,servicesPage} = await getAllPageData(getslug)
  return {
    props: {
      page,
      servicesCard,
      servicesPage,
      allServicesTypes,
      hireDedicatedPages,
      hireDedicatedType,
    },
    revalidate: 10,
  };
}
