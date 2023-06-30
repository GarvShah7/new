import React from 'react'
import { AllPageFragment, BlogInnerFragment, HomeAboutUsSectionFragment, HomeBlogSectionFragment, HomeContactUsSectionFragment, HomeFragment, HomeHeroSectionFragment, HomeOurProsSectionFragment, HomeServicesSectionFragment, HomeVideoSectionFragment, ImageWithTitleSectionFragment, JamstackCteSectionFragment, ReviewsSectionFragment, SolutionSectionFragment, TestimonialsSectionFragment, TitleHoverImageSectionFragment, WorkSectionFragment } from '../../../app/api/generated/graphql/graphql'
import ReviewsSection from '../../Common/ReviewsSection'
import WorkSection from '../../Common/WorkSection'
import ImageWithTitleSection from '../../ImageWithTitleSection'
import TitleHoverImageSection from '../../TitleHoverImageSection'
import VideoSection from '../../VideoSection'
import HomeAboutUsSection from '../HomeAboutUsSection'
import HomeBlogSection from '../HomeBlogSection'
import HomeContactUsSection from '../HomeContactUsSection'
import HomeHeroSection from '../HomeHeroSection'
import HomeOurProsSection from '../HomeOurProsSection'
import HomeServicesSection from '../HomeServicesSection'
import JamstackCTESection from '../JamstackCTESection'
import SolutionSection from '../SolutionSection'
import TestimonialsSection from '../../Common/TestimonialsSection'

// const HomeAllSections = ({ block, ...props }) => {
//     // switch (block?._type) {
//     //     case 'homeHeroSection'
//     //         return HomeHeroSection;
            
    
//     //     default:
//     //         break;
//     // }
//     const Components = {
      
//         homeHeroSection: HomeHeroSection,
//         homeServicesSection: HomeServicesSection,
//         homeContactUsSection: HomeContactUsSection,
//         workSection: WorkSection,
//         homeOurProsSection: HomeOurProsSection,
//         solutionSection: SolutionSection,
//         homeAboutUsSection: HomeAboutUsSection,
//         jamstackCTESection: JamstackCTESection,
//         homeBlogSection: HomeBlogSection,
//         // testimonialsSection: TestimonialsSection,
//         reviewsSection: ReviewsSection,
//         titleHoverImageSection: TitleHoverImageSection,
//         homeVideoSection: VideoSection,
//         imageWithTitleSection: ImageWithTitleSection,

//     }
//     const Component = Components[block?._type as keyof typeof Components]
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     return Component ? <Component block={block} {...props} /> : null

// }
const HomeAllSections = ({ block, ...props }) => {

    let Component: React.FC<{ block: HomeHeroSectionFragment }> | React.FC<{ block: HomeServicesSectionFragment }> | React.FC<{ block: HomeContactUsSectionFragment }> | React.FC<{ block: WorkSectionFragment }> | React.FC<{ block: HomeOurProsSectionFragment }> | React.FC<{ block: SolutionSectionFragment }> | React.FC<{ block: HomeAboutUsSectionFragment }> | React.FC<{ block: JamstackCteSectionFragment }> | React.FC<{ block: HomeBlogSectionFragment; extraProps?: BlogInnerFragment[] | undefined }> | React.FC<{ block: TestimonialsSectionFragment }> | React.FC<{ block: ReviewsSectionFragment }> | React.FC<{ block: TitleHoverImageSectionFragment; services_card?: HomeFragment[] | AllPageFragment[] | undefined }> | React.FC<{ block: HomeVideoSectionFragment }> | React.FC<{ block: ImageWithTitleSectionFragment }> | React.JSX.IntrinsicAttributes;
   
    switch (block?._type) {
      case 'homeHeroSection':
        Component = HomeHeroSection;
        break;
      case 'homeServicesSection':
        Component = HomeServicesSection;
        break;
      case 'homeContactUsSection':
        Component = HomeContactUsSection;
        break;
      case 'workSection':
        Component = WorkSection;
        break;
      case 'homeOurProsSection':
        Component = HomeOurProsSection;
        break;
      case 'solutionSection':
        Component = SolutionSection;
        break;
      case 'homeAboutUsSection':
        Component = HomeAboutUsSection;
        break;
      case 'jamstackCTESection':
        Component = JamstackCTESection;
        break;
      case 'homeBlogSection':
        Component = HomeBlogSection;
        break;
      case 'testimonialsSection':
        Component = TestimonialsSection;
        break;
      case 'reviewsSection':
        Component = ReviewsSection;
        break;
      case 'titleHoverImageSection':
        Component = TitleHoverImageSection;
        break;
      case 'homeVideoSection':
        Component = VideoSection;
        break;
      case 'imageWithTitleSection':
        Component = ImageWithTitleSection;
        break;
      default:
        break;
    }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     // @ts-ignore
    return Component ? <Component block={block} {...props} /> : null;
  };
  

export default HomeAllSections;
