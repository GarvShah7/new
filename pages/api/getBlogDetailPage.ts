import { BlogService } from "../../app/api/models";

export const getBlogDetailPage = async(slug: string) => {
   
  const pageService = new BlogService();
  const data = await pageService.getBlogInnerPage({
    sortFilter: { publishDate: "DESC" },
    limitFilter: 3,
    blogFilter: { slug: { current: { neq: slug } } },
    filter: { slug: { current: { eq: slug } } },
    blogSideContent: { slug: { current: { eq: "blog-inner-side-content" } } },
  });
  const page_data = data.allBlogInner;
  const blog_inner_side_content = data.allBlogInnerSideContent;
  const servicesPage = data.allAllPage.filter((i) => i.service_page === true);
  const allServicesTypes = data.allServiceType;
  const hireDedicatedPages = data.allAllPage.filter(
    (i) => i.hire_dedicated_page === true
  );
  const hireDedicatedType = data.allHireDedicatedPageTypes;
  return {

      page_data,
      blog_inner_side_content,
      blog_data: data.limitedBlogs,
      servicesPage,
      allServicesTypes,
      hireDedicatedPages,
      hireDedicatedType,
      data

}
}