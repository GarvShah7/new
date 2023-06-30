import { BlogService } from "../../app/api/models";

export const getBlogPage = async () => {
  const pageService = new BlogService();
  const data = await pageService.getBlogPage({
    filter: { slug: { current: { eq: "blogs" } } },
    blogFilter: { slug: { current: { neq: "blogs" } } },
    sortFilter: { publishDate: "DESC" },
  });
  const getblogPage = data?.allBlog;
  const allCategory = data.allCategory;
  const allBlogInner = data.allBlogInner;
  const servicesPage = data.allAllPage.filter((i) => i.service_page === true);
  const allServicesTypes = data.allServiceType;
  const hireDedicatedPages = data.allAllPage.filter(
    (i) => i.hire_dedicated_page === true
  );
  const hireDedicatedType = data.allHireDedicatedPageTypes;
  return {
    getblogPage,
    allServicesTypes,
    hireDedicatedType,
    hireDedicatedPages,
    servicesPage,
    allCategory,
    allBlogInner,
  };
};
