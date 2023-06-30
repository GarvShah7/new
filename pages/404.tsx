import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import {
  AllPageFragment,
  GetAllPageQuery,
  MetaTagFragment,
} from "../app/api/generated/graphql/graphql";
import { getClient } from "../app/api/lib/sanity-client";
import { PageService } from "../app/api/models";
import Layout from "../components/Common/Layout";
import Sections from "../components/Common/Sections";
import { getMetaObjects } from "../app/api/utils/helper";
import { getFourZeroPageData } from "./api/getFourZeroPage";

export type PageProps = {
  page: GetAllPageQuery["allAllPage"];
  servicesPage: GetAllPageQuery["allAllPage"];
  allServicesTypes: GetAllPageQuery["allServiceType"];
  hireDedicatedPages: GetAllPageQuery["allAllPage"];
  hireDedicatedType: GetAllPageQuery["allHireDedicatedPageTypes"];
};
const fourOfour: NextPage<PageProps> = ({
  page,
  servicesPage,
  allServicesTypes,
  hireDedicatedPages,
  hireDedicatedType,
}) => {
  const router = useRouter();
  useEffect(() => {
    router.push("/404");
  }, []);
  const { sections,footer,header, seo } = (page as AllPageFragment) || {};
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
              <Sections block={item} />
            </React.Fragment>
          );
        })}
      </Layout>
    </div>
  );
};
export default fourOfour;
export async function getStaticProps() {
const {allServicesTypes,hireDedicatedPages,hireDedicatedType,page,servicesPage} = await getFourZeroPageData()
  return {
    props: {
      page,
      servicesPage,
      allServicesTypes,
      hireDedicatedPages,
      hireDedicatedType,
    },
    revalidate: 10,
  };
}
