import React, { PropsWithChildren } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import {
  FooterFragment,
  HeaderFragment,
  HireDedicatedPageTypesFragment,
  HomeNavServicesFragment,
  ServiceTypeFragment,
} from "../../../app/api/generated/graphql/graphql";
import { NextSeo, NextSeoProps } from "next-seo";

export type LayoutProps = {
  header?: HeaderFragment;
  footer?: FooterFragment
  allServicesTypes?: ServiceTypeFragment[];
  hireDedicatedType?: HireDedicatedPageTypesFragment[];
  hireDedicatedPages?: HomeNavServicesFragment[];
  servicesPage?: HomeNavServicesFragment[];
  SeoTitle?: NextSeoProps["title"];
  SeoDescription?: NextSeoProps["description"];
  tags?: Omit<NextSeoProps, "additionalMetaTags"> & {
    additionalMetaTags: Record<string, unknown>;
  };
};
const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  header,
  allServicesTypes,
  hireDedicatedType,
  hireDedicatedPages,
  servicesPage,
  SeoTitle,
  footer,
  SeoDescription,
  tags,
}) => {
  
  return (
    <React.Fragment>
      <NextSeo
        title={SeoTitle}
        description={SeoDescription}
        additionalMetaTags={[...Object.values(tags || {})]}
      />
      <Header
        block={header}
        footer={footer}
        allServicesTypes={allServicesTypes}
        hireDedicatedPages={hireDedicatedPages}
        hireDedicatedType={hireDedicatedType}
        servicesPage={servicesPage}
      />
      {children}
     {footer && <Footer block={footer} />}
    </React.Fragment>
  );
};

export default Layout;
