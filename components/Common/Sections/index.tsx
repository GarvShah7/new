import { FC, JSX } from "react"
import HomeServicesSection from "../../HomePage/HomeServicesSection"
import JamstackCTESection from "../../HomePage/JamstackCTESection"
import SolutionSection from "../../HomePage/SolutionSection"
import ImageWithTitleSection from "../../ImageWithTitleSection"
import TitleHoverImageSection from "../../TitleHoverImageSection"
import ChooseCHSection from "../ChooseCHSection"
import CompanyInfoSection from "../CompanyInfoSection"
import CompanyVisionSection from "../CompanyVisionSection"
import ContactHeroSection from "../ContactHeroSection"
import ContactFormSection from "../ContactPage/ContactFormSection"
import ContactInformationSection from "../ContactPage/ContactInformationSection"
import ContactMapSection from "../ContactPage/ContactMapSection"
import EstimateProjectformSection from "../EstimateProjectFormSection"
import FAQSection from "../FAQSection"
import FourOFourErrorSection from "../FourOFourErrorSection"
import HeroSection from "../HeroSection"
import HiringModelSection from "../HiringModelSection"
import HourlyDeveloperSection from "../HourlyDeveloperSection"
import ImageArraySection from "../ImageArraySection"
import ImageSideBySideTitleDescArraySection from "../ImageSideBySideTitleDescArraySection"
import ImageTitleDescription from "../ImageTitleDescription"
import NextJSUseCompaniesSection from "../NextJSUSeCompaniesSection"
import OurProcessSection from "../OurProcessSection"
import PortfolioInnerDevelopmentSection from "../PortfolioInnerDevelopmentSection"
import PricingSection from "../PricingSection"
import ReviewsSection from "../ReviewsSection"
import RichTextIconSideImageSection from "../RichTextIconSideImageSection"
import RichTextImageButtonSection from "../RichTextImageButtonSection"
import RichTextSection from "../RichTextSection"
import RichTextWithSideImage from "../RichTextWithSideImageSection"
import ServicesDevelopmentSection from "../ServicesPage/ServicesDevelopmentSection"
import ServicesOurProsSection from "../ServicesPage/ServicesOurProsSection"
import ServicesShortTestimonialSection from "../ServicesPage/ServicesShortTestimonialSection"
import TeamPhotosSection from "../TeamPhotosSection"
import TechStackSection from "../TechStackSection"
import TestimonialsSection from "../TestimonialsSection"
import ThanksPage from "../ThanksPage"
import ThemesSection from "../ThemesSection"
import TitleDescFullImageSection from "../TitleDescFullImageSection"
import TitleDescriptionArrayWithSideTitleArraySection from "../TitleDescriptionArrayWithSideTitleArraySection"
import TitleDescriptionSideBySideBGImageSection from "../TitleDescriptionSideBySideBGImageSection"
import TitleSubtitleImageArraySideRichTextSection from "../TitleSubtitleImageArraySideRichTextSection"
import TitleSubtitleTitleArraySection from "../TitleSubtitleTitleArraySection"
import TitleSubtitleWithImageArraySection from "../TitleSubtitleWithImageArraySection"
import TitleWithFourImage from "../TitleWithFourImage"
import TitleWithSliderImageSection from "../TitleWithSliderImageSection"
import UIUXDevelopmentSection from "../UIUXDevelopmentSection"
import WoocommerceBenefitsSection from "../WooCommereceBenefitSection"
import WorkSection from "../WorkSection"
import { HeroSectionFragment, ImageWithTitleSectionFragment, HomeServicesSectionFragment, TitleSubtitleWithImageArraySectionFragment, ReviewsSectionFragment, RichTextFragment, ImageTitleDescriptionSectionFragment, RichTextIconSideImageSectionFragment, TitleSubtitleImageArraySideRichTextSectionFragment, TechStackSectionFragment, OurProcessSectionFragment, ChooseChSectionFragment, PricingSectionFragment, SolutionSectionFragment, TitleHoverImageSectionFragment, HomeFragment, AllPageFragment, TestimonialsSectionFragment, TitleWithSliderImageSectionFragment, HiringModelSectionFragment, ImageSideBySideTitleDescArraySectionFragment, TitleSubtitleTitleArraySectionFragment, HourlyDeveloperSectionFragment, FaqSectionFragment, ServiceDevelopmentSectionFragment, WorkSectionFragment, ServiceOurProcessSectionFragment, TeamPhotosSectionFragment, CompanyVisionsectionFragment, TitleWithFourImageSectionFragment, ContactInformationSectionFragment, ContactMapSectionFragment, JamstackCteSectionFragment, PortfolioInnerDevelopmentSectionFragment, ThemesSectionFragment, NextJsuSeCompaniesSectionFragment, WoocommerceBenefitSectionFragment, RichTextImageButtonSectionFragment, RichTextWithSideImageFragment, ImageArraySectionFragment, TitleDescriptionSideBySideBgImageSectionFragment, TitleDescriptionArrayWithSideTitleArraySectionFragment, ContactHeroSectionFragment, ContactMessageSectionFragment, EstimateProjectFormSectionFragment, FourOFourErrorSectionFragment, ThankyouFragment, TitledescfullimagesectionFragment, CompanyInfoSectionFragment, UiUxDevelopmentSectionFragment } from "../../../app/api/generated/graphql/graphql"


const Sections = ({ block, ...props }) => {
    let Component: FC<{ block: HeroSectionFragment }> | FC<{ block: ImageWithTitleSectionFragment }> | FC<{ block: HomeServicesSectionFragment }> | FC<{ block: TitleSubtitleWithImageArraySectionFragment }> | FC<{ block: ReviewsSectionFragment }> | FC<{ block: RichTextFragment }> | FC<{ block: ImageTitleDescriptionSectionFragment }> | FC<{ block: RichTextIconSideImageSectionFragment }> | FC<{ block: TitleSubtitleImageArraySideRichTextSectionFragment }> | FC<{ block: TechStackSectionFragment }> | FC<{ block: OurProcessSectionFragment }> | FC<{ block: ChooseChSectionFragment }> | FC<{ block: PricingSectionFragment }> | FC<{ block: SolutionSectionFragment }> | FC<{ block: TitleHoverImageSectionFragment; services_card?: HomeFragment[] | AllPageFragment[] | undefined }> | FC<{ block: TestimonialsSectionFragment }> | FC<{ block: TitleWithSliderImageSectionFragment }> | FC<{ block: HiringModelSectionFragment }> | FC<{ block: ImageSideBySideTitleDescArraySectionFragment }> | FC<{ block: TitleSubtitleTitleArraySectionFragment }> | FC<{ block: HourlyDeveloperSectionFragment }> | FC<{ block: FaqSectionFragment }> | FC<{ block: ServiceDevelopmentSectionFragment }> | FC<{ block: WorkSectionFragment }> | FC<{ block: ServiceOurProcessSectionFragment }> | FC<{ block: TeamPhotosSectionFragment }> | FC<{ block: CompanyVisionsectionFragment }> | FC<{ block: TitleWithFourImageSectionFragment }> | FC<{ block: ContactInformationSectionFragment }> | FC<{ block: ContactMapSectionFragment }> | FC<{ block: JamstackCteSectionFragment }> | FC<{ block: PortfolioInnerDevelopmentSectionFragment }> | FC<{ block: ThemesSectionFragment }> | FC<{ block: NextJsuSeCompaniesSectionFragment }> | FC<{ block: WoocommerceBenefitSectionFragment }> | FC<{ block: RichTextImageButtonSectionFragment }> | FC<{ block: RichTextWithSideImageFragment }> | FC<{ block: ImageArraySectionFragment }> | FC<{ block: TitleDescriptionSideBySideBgImageSectionFragment }> | FC<{ block: TitleDescriptionArrayWithSideTitleArraySectionFragment }> | FC<{ block: ContactHeroSectionFragment }> | FC<{ block: ContactMessageSectionFragment }> | FC<{ block: EstimateProjectFormSectionFragment }> | FC<{ block: FourOFourErrorSectionFragment }> | FC<{ block: ThankyouFragment }> | FC<{ block: TitledescfullimagesectionFragment }> | FC<{ block: CompanyInfoSectionFragment }> | FC<{ block: UiUxDevelopmentSectionFragment }> | JSX.IntrinsicAttributes;
    // const Components = {
        // heroSection: HeroSection,
        // imageWithTitleSection: ImageWithTitleSection,
        // homeServicesSection: HomeServicesSection,
        // titleSubtitleWithImageArraySection: TitleSubtitleWithImageArraySection,
        // reviewsSection: ReviewsSection,
        // richText: RichTextSection,
        // imageTitleDescriptionSection: ImageTitleDescription,
        // richTextIconSideImageSection: RichTextIconSideImageSection,
        // titleSubtitleImageArraySideRichTextSection: TitleSubtitleImageArraySideRichTextSection,
        // techStackSection: TechStackSection,
        // ourProcessSection: OurProcessSection,
        // chooseCHSection: ChooseCHSection,
        // pricingSection: PricingSection,
        // solutionSection: SolutionSection,
        // titleHoverImageSection: TitleHoverImageSection,
        // testimonialsSection: TestimonialsSection,
        // titleWithSliderImageSection: TitleWithSliderImageSection,
        // hiringModelSection: HiringModelSection,
        // imageSideBySideTitleDescArraySection: ImageSideBySideTitleDescArraySection,
        // titleSubtitleTitleArraySection: TitleSubtitleTitleArraySection,
        // hourly_developer_section: HourlyDeveloperSection,
        // FAQSection: FAQSection,
        // serviceDevelopmentSection: ServicesDevelopmentSection,
        // workSection: WorkSection,
        // serviceOurProcessSection: ServicesOurProsSection,
        // teamPhotosSection: TeamPhotosSection,
        // companyVisionsection: CompanyVisionSection,
        // titleWithFourImageSection: TitleWithFourImage,
        // contactInformationSection: ContactInformationSection,
        // contactMapSection: ContactMapSection,
        // jamstackCTESection: JamstackCTESection,
        // portfolioInnerDevelopmentSection: PortfolioInnerDevelopmentSection,
        // themesSection: ThemesSection,
        // nextJSUSeCompaniesSection: NextJSUseCompaniesSection,
        // woocommerceBenefitSection: WoocommerceBenefitsSection,
        // richTextImageButtonSection: RichTextImageButtonSection,
        // richTextWithSideImage: RichTextWithSideImage,
        // imageArraySection: ImageArraySection,
        // titleDescriptionSideBySideBGImageSection: TitleDescriptionSideBySideBGImageSection,
        // titleDescriptionArrayWithSideTitleArraySection: TitleDescriptionArrayWithSideTitleArraySection,
        // contactHeroSection: ContactHeroSection,
        // contactMessageSection: ContactFormSection,
        // estimateProjectFormSection: EstimateProjectformSection,
        // fourOFourErrorSection: FourOFourErrorSection,
        // thankyou: ThanksPage,
        // titledescfullimagesection: TitleDescFullImageSection,
        // companyInfoSection: CompanyInfoSection,
        // uiUxDevelopmentSection: UIUXDevelopmentSection,
// 48
    // }

      
        switch (block?._type) {
          case 'heroSection':
            Component = HeroSection;
            break;
          case 'imageWithTitleSection':
            Component = ImageWithTitleSection;
            break;
          case 'homeServicesSection':
            Component = HomeServicesSection;
            break;
          case 'titleSubtitleWithImageArraySection':
            Component = TitleSubtitleWithImageArraySection;
            break;
          case 'reviewsSection':
            Component = ReviewsSection;
            break;
          case 'richText':
            Component = RichTextSection;
            break;
          case 'imageTitleDescriptionSection':
            Component = ImageTitleDescription;
            break;
          case 'richTextIconSideImageSection':
            Component = RichTextIconSideImageSection;
            break;
          case 'titleSubtitleImageArraySideRichTextSection':
            Component = TitleSubtitleImageArraySideRichTextSection;
            break;
          case 'techStackSection':
            Component = TechStackSection;
            break;
          case 'ourProcessSection':
            Component = OurProcessSection;
            break;
          case 'chooseCHSection':
            Component = ChooseCHSection;
            break;
          case 'pricingSection':
            Component = PricingSection;
            break;
          case 'solutionSection':
            Component = SolutionSection;
            break;
          case 'titleHoverImageSection':
            Component = TitleHoverImageSection;
            break;
          case 'testimonialsSection':
            Component = TestimonialsSection;
            break;
          case 'titleWithSliderImageSection':
            Component = TitleWithSliderImageSection;
            break;
          case 'hiringModelSection':
            Component = HiringModelSection;
            break;
          case 'imageSideBySideTitleDescArraySection':
            Component = ImageSideBySideTitleDescArraySection;
            break;
          case 'titleSubtitleTitleArraySection':
            Component = TitleSubtitleTitleArraySection;
            break;
          case 'hourly_developer_section':
            Component = HourlyDeveloperSection;
            break;
          case 'FAQSection':
            Component = FAQSection;
            break;
          case 'serviceDevelopmentSection':
            Component = ServicesDevelopmentSection;
            break;
          case 'workSection':
            Component = WorkSection;
            break;
          case 'serviceOurProcessSection':
            Component = ServicesOurProsSection;
            break;
          case 'teamPhotosSection':
            Component = TeamPhotosSection;
            break;
          case 'companyVisionsection':
            Component = CompanyVisionSection;
            break;
          case 'titleWithFourImageSection':
            Component = TitleWithFourImage;
            break;
          case 'contactInformationSection':
            Component = ContactInformationSection;
            break;
          case 'contactMapSection':
            Component = ContactMapSection;
            break;
          case 'jamstackCTESection':
            Component = JamstackCTESection;
            break;
          case 'portfolioInnerDevelopmentSection':
            Component = PortfolioInnerDevelopmentSection;
            break;
          case 'themesSection':
            Component = ThemesSection;
            break;
          case 'nextJSUSeCompaniesSection':
            Component = NextJSUseCompaniesSection;
            break;
          case 'woocommerceBenefitSection':
            Component = WoocommerceBenefitsSection;
            break;
          case 'richTextImageButtonSection':
            Component = RichTextImageButtonSection;
            break;
          case 'richTextWithSideImage':
            Component = RichTextWithSideImage;
            break;
          case 'imageArraySection':
            Component = ImageArraySection;
            break;
          case 'titleDescriptionSideBySideBGImageSection':
            Component = TitleDescriptionSideBySideBGImageSection;
            break;
          case 'titleDescriptionArrayWithSideTitleArraySection':
            Component = TitleDescriptionArrayWithSideTitleArraySection;
            break;
          case 'contactHeroSection':
            Component = ContactHeroSection;
            break;
          case 'contactMessageSection':
            Component = ContactFormSection;
            break;
          case 'estimateProjectFormSection':
            Component = EstimateProjectformSection;
            break;
          case 'fourOFourErrorSection':
            Component = FourOFourErrorSection;
            break;
          case 'thankyou':
            Component = ThanksPage;
            break;
          case 'titledescfullimagesection':
            Component = TitleDescFullImageSection;
            break;
          case 'companyInfoSection':
            Component = CompanyInfoSection;
            break;
          case 'uiUxDevelopmentSection':
            Component = UIUXDevelopmentSection;
            break;
        }
    // const Component = Components[block?._type as keyof typeof Components]
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    return Component ? <Component block={block} {...props } /> : null
}

export default Sections;
