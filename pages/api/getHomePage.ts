import { PageService } from "../../app/api/models";

export const getHomePageData = async () => {
  const pageService = new PageService();
  const data = await pageService.getPage({
    filter: { slug: { current: { eq: "/" } } },
    sortFilter: { publishDate: "DESC" },
    blogFilter: { _id: { neq: "home" } },
    limitFilter: 3,
  });
  const getPage = data?.allHome;
  const allBlogInner = data.allBlogInner;
  const allServicesTypes = data.allServiceType;
  const hireDedicatedType = data.allHireDedicatedPageTypes;
  const hireDedicatedPages = data.allAllPage.filter(
    (i) => i.hire_dedicated_page === true
  );
  const servicesPage = data.allAllPage.filter((i) => i.service_page === true);
  const servicesCard = data.allAllPage.filter(
    (i) => i.service_page === true || i._id !== "home"
  );
  return {
    getPage,
    allServicesTypes,
    hireDedicatedType,
    hireDedicatedPages,
    servicesPage,
    servicesCard,
    allBlogInner,
  };
};
