import { PageService } from "../../app/api/models";

export const getFourZeroPageData = async () => {
  const pageService = new PageService();
  const data = await pageService.getAllPage({
    filter: { slug: { current: { neq: "/" } } },
  });
  const page = data.allAllPage.find((i) => i?.slug?.current === "404");
  const servicesPage = data.allAllPage.filter((i) => i.service_page === true);
  const allServicesTypes = data.allServiceType;
  const hireDedicatedPages = data.allAllPage.filter(
    (i) => i.hire_dedicated_page === true
  );
  const hireDedicatedType = data.allHireDedicatedPageTypes;
  return {
    page,
    servicesPage,
    allServicesTypes,
    hireDedicatedPages,
    hireDedicatedType,
  };
};
