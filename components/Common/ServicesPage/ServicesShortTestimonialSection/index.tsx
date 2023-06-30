import clsx from "clsx";
import TitleSubtitle from "../../TitleSubtitle";
import { TestimonialsSectionFragment } from "../../../../app/api/generated/graphql/graphql";
import Carousel from "../../../Carousel";
import ServiceShortTestimonialCard from "./ServiceShortTestimonialCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const ServicesShortTestimonialSection: React.FC<{
  block: TestimonialsSectionFragment;
}> = ({ block }) => {
  const { testimonialsCard, sectionTheme, titleSubtitle } = block || {};

  return (
    <section
      className={clsx(
        "shortTestimonialSection innerSectionSpace sectionInnerSpace",
        sectionTheme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="shortTestimonialContent">
          {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
          <Carousel
            responsive={responsive}
            arrows={false}
            showDots={false}
            autoPlaySpeed={8000}
          >
            {testimonialsCard?.map((item, index) => {
              return (
                <div key={index}>
                  {item && <ServiceShortTestimonialCard item={item} />}
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default ServicesShortTestimonialSection;
