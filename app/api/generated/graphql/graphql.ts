// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
};

export type AllPage = Document & {
  __typename?: 'AllPage';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  hire_dedicated_page?: Maybe<Scalars['Boolean']>;
  hire_dedicated_page_types?: Maybe<HireDedicatedPageTypes>;
  logo?: Maybe<CustomImage>;
  sections?: Maybe<Array<Maybe<ChooseChSectionOrCompanyInfoSectionOrCompanyVisionsectionOrContactHeroSectionOrContactInformationSectionOrContactMapSectionOrContactMessageSectionOrEstimateProjectFormSectionOrFaqSectionOrFourOFourErrorSectionOrHeroSectionOrHiringModelSectionOrHomeServicesSectionOrHourlyDeveloperSectionOrImageArraySectionOrImageRichTextCardSectionOrImageSideBySideTitleDescArraySectionOrImageTitleDescriptionSectionOrImageWithTitleSectionOrJamstackCteSectionOrNewsLetterSectionOrNextJsuSeCompaniesSectionOrOurApproachSectionOrOurProcessSectionOrPortfolioInnerDevelopmentSectionOrPricingSectionOrReviewsSectionOrRichTextOrRichTextIconSideImageSectionOrRichTextImageButtonSectionOrRichTextWithSideImageOrServiceDevelopmentSectionOrServiceOurProcessSectionOrServiceShortTestimonialSectionOrSolutionSectionOrTeamPhotosSectionOrTechStackSectionOrTestimonialsSectionOrThankyouOrThemesSectionOrTitleDescriptionArrayWithSideTitleArraySectionOrTitleDescriptionSideBySideBgImageSectionOrTitleHoverImageSectionOrTitleSubtitleImageArraySideRichTextSectionOrTitleSubtitleTitleArraySectionOrTitleSubtitleWithImageArraySectionOrTitleWithFourImageSectionOrTitleWithSliderImageSectionOrTitledescfullimagesectionOrUiUxDevelopmentSectionOrWoocommerceBenefitSectionOrWorkSection>>>;
  seo?: Maybe<Seo>;
  service_page?: Maybe<Scalars['Boolean']>;
  service_types?: Maybe<ServiceType>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
};

export type AllPageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  footer?: InputMaybe<FooterFilter>;
  header?: InputMaybe<HeaderFilter>;
  hire_dedicated_page?: InputMaybe<BooleanFilter>;
  hire_dedicated_page_types?: InputMaybe<HireDedicatedPageTypesFilter>;
  logo?: InputMaybe<CustomImageFilter>;
  seo?: InputMaybe<SeoFilter>;
  service_page?: InputMaybe<BooleanFilter>;
  service_types?: InputMaybe<ServiceTypeFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AllPageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  hire_dedicated_page?: InputMaybe<SortOrder>;
  logo?: InputMaybe<CustomImageSorting>;
  seo?: InputMaybe<SeoSorting>;
  service_page?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type AppIconLinkItem = {
  __typename?: 'AppIconLinkItem';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  appLink?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  title?: Maybe<Scalars['String']>;
};

export type AppIconLinkItemFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  appLink?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AppIconLinkItemSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  appLink?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type AuthorCardSection = {
  __typename?: 'AuthorCardSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  authorCardAppLogo?: Maybe<Array<Maybe<FooterLogo>>>;
  authorName?: Maybe<Scalars['String']>;
  authorPosition?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
  title?: Maybe<Scalars['String']>;
};

export type AuthorCardSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  authorName?: InputMaybe<StringFilter>;
  authorPosition?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AuthorCardSectionOrAuthorQouteOrBlockOrButtonOrCustomImageOrJamstackResourceSectionOrLinkOrRightSymbolTitleArrayOrServicesDetailsOrTitleButtonOrTitleContentOrTitleSubtitle = AuthorCardSection | AuthorQoute | Block | Button | CustomImage | JamstackResourceSection | Link | RightSymbolTitleArray | ServicesDetails | TitleButton | TitleContent | TitleSubtitle;

export type AuthorCardSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  authorName?: InputMaybe<SortOrder>;
  authorPosition?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type AuthorDetails = Document & {
  __typename?: 'AuthorDetails';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<CustomImage>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AuthorDetailsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  image?: InputMaybe<CustomImageFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AuthorDetailsSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  subtitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type AuthorQoute = {
  __typename?: 'AuthorQoute';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AuthorQouteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  authorName?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
};

export type AuthorQouteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  authorName?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type Blog = Document & {
  __typename?: 'Blog';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  hero?: Maybe<BlogHeroSection>;
  reviewsSection?: Maybe<ReviewsSection>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
};

export type BlogFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  footer?: InputMaybe<FooterFilter>;
  header?: InputMaybe<HeaderFilter>;
  hero?: InputMaybe<BlogHeroSectionFilter>;
  reviewsSection?: InputMaybe<ReviewsSectionFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BlogHeroSection = {
  __typename?: 'BlogHeroSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BlogHeroSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BlogHeroSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type BlogInner = Document & {
  __typename?: 'BlogInner';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  authorDetails?: Maybe<AuthorDetails>;
  button?: Maybe<Button>;
  category?: Maybe<Array<Maybe<Category>>>;
  description?: Maybe<RichText>;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  image?: Maybe<CustomImage>;
  publishDate?: Maybe<Scalars['Date']>;
  reviewsSection?: Maybe<ReviewsSection>;
  seo?: Maybe<Seo>;
  sideContentCard?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
};

export type BlogInnerFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  authorDetails?: InputMaybe<AuthorDetailsFilter>;
  button?: InputMaybe<ButtonFilter>;
  description?: InputMaybe<RichTextFilter>;
  footer?: InputMaybe<FooterFilter>;
  header?: InputMaybe<HeaderFilter>;
  image?: InputMaybe<CustomImageFilter>;
  publishDate?: InputMaybe<DateFilter>;
  reviewsSection?: InputMaybe<ReviewsSectionFilter>;
  seo?: InputMaybe<SeoFilter>;
  sideContentCard?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BlogInnerSideContent = Document & {
  __typename?: 'BlogInnerSideContent';
  TitleAppLogo?: Maybe<SideAppLogoSection>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  newsLetter?: Maybe<NewsLetterSection>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
};

export type BlogInnerSideContentFilter = {
  TitleAppLogo?: InputMaybe<SideAppLogoSectionFilter>;
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  newsLetter?: InputMaybe<NewsLetterSectionFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BlogInnerSideContentSorting = {
  TitleAppLogo?: InputMaybe<SideAppLogoSectionSorting>;
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type BlogInnerSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  publishDate?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  sideContentCard?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type BlogSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  hero?: InputMaybe<BlogHeroSectionSorting>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type Button = {
  __typename?: 'Button';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  buttonLabel?: Maybe<Scalars['String']>;
  buttonLink?: Maybe<Scalars['String']>;
  buttonTarget?: Maybe<Scalars['String']>;
  buttonType?: Maybe<Scalars['String']>;
};

export type ButtonFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  buttonLabel?: InputMaybe<StringFilter>;
  buttonLink?: InputMaybe<StringFilter>;
  buttonTarget?: InputMaybe<StringFilter>;
  buttonType?: InputMaybe<StringFilter>;
};

export type ButtonSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  buttonLabel?: InputMaybe<SortOrder>;
  buttonLink?: InputMaybe<SortOrder>;
  buttonTarget?: InputMaybe<SortOrder>;
  buttonType?: InputMaybe<SortOrder>;
};

export type Category = Document & {
  __typename?: 'Category';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  sectionTheme?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
};

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type ChooseChSection = Document & {
  __typename?: 'ChooseCHSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  appIconImage?: Maybe<Array<Maybe<IconTitleArray>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type ChooseChSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type ChooseChSectionOrCompanyInfoSectionOrCompanyVisionsectionOrContactHeroSectionOrContactInformationSectionOrContactMapSectionOrContactMessageSectionOrEstimateProjectFormSectionOrFaqSectionOrFourOFourErrorSectionOrHeroSectionOrHiringModelSectionOrHomeServicesSectionOrHourlyDeveloperSectionOrImageArraySectionOrImageRichTextCardSectionOrImageSideBySideTitleDescArraySectionOrImageTitleDescriptionSectionOrImageWithTitleSectionOrJamstackCteSectionOrNewsLetterSectionOrNextJsuSeCompaniesSectionOrOurApproachSectionOrOurProcessSectionOrPortfolioInnerDevelopmentSectionOrPricingSectionOrReviewsSectionOrRichTextOrRichTextIconSideImageSectionOrRichTextImageButtonSectionOrRichTextWithSideImageOrServiceDevelopmentSectionOrServiceOurProcessSectionOrServiceShortTestimonialSectionOrSolutionSectionOrTeamPhotosSectionOrTechStackSectionOrTestimonialsSectionOrThankyouOrThemesSectionOrTitleDescriptionArrayWithSideTitleArraySectionOrTitleDescriptionSideBySideBgImageSectionOrTitleHoverImageSectionOrTitleSubtitleImageArraySideRichTextSectionOrTitleSubtitleTitleArraySectionOrTitleSubtitleWithImageArraySectionOrTitleWithFourImageSectionOrTitleWithSliderImageSectionOrTitledescfullimagesectionOrUiUxDevelopmentSectionOrWoocommerceBenefitSectionOrWorkSection = ChooseChSection | CompanyInfoSection | CompanyVisionsection | ContactHeroSection | ContactInformationSection | ContactMapSection | ContactMessageSection | EstimateProjectFormSection | FaqSection | FourOFourErrorSection | HeroSection | HiringModelSection | HomeServicesSection | HourlyDeveloperSection | ImageArraySection | ImageRichTextCardSection | ImageSideBySideTitleDescArraySection | ImageTitleDescriptionSection | ImageWithTitleSection | JamstackCteSection | NewsLetterSection | NextJsuSeCompaniesSection | OurApproachSection | OurProcessSection | PortfolioInnerDevelopmentSection | PricingSection | ReviewsSection | RichText | RichTextIconSideImageSection | RichTextImageButtonSection | RichTextWithSideImage | ServiceDevelopmentSection | ServiceOurProcessSection | ServiceShortTestimonialSection | SolutionSection | TeamPhotosSection | TechStackSection | TestimonialsSection | Thankyou | ThemesSection | TitleDescriptionArrayWithSideTitleArraySection | TitleDescriptionSideBySideBgImageSection | TitleHoverImageSection | TitleSubtitleImageArraySideRichTextSection | TitleSubtitleTitleArraySection | TitleSubtitleWithImageArraySection | TitleWithFourImageSection | TitleWithSliderImageSection | Titledescfullimagesection | UiUxDevelopmentSection | WoocommerceBenefitSection | WorkSection;

export type ChooseChSectionOrCompanyInfoSectionOrFaqSectionOrHiringModelSectionOrHomeAboutUsSectionOrHomeBlogSectionOrHomeContactUsSectionOrHomeHeroSectionOrHomeOurProsSectionOrHomeServicesSectionOrHomeVideoSectionOrImageWithTitleSectionOrJamstackCteSectionOrNewsLetterSectionOrOurProcessSectionOrPricingSectionOrReviewsSectionOrSolutionSectionOrTechStackSectionOrTestimonialsSectionOrTitleHoverImageSectionOrTitleWithFourImageSectionOrWorkSection = ChooseChSection | CompanyInfoSection | FaqSection | HiringModelSection | HomeAboutUsSection | HomeBlogSection | HomeContactUsSection | HomeHeroSection | HomeOurProsSection | HomeServicesSection | HomeVideoSection | ImageWithTitleSection | JamstackCteSection | NewsLetterSection | OurProcessSection | PricingSection | ReviewsSection | SolutionSection | TechStackSection | TestimonialsSection | TitleHoverImageSection | TitleWithFourImageSection | WorkSection;

export type ChooseChSectionOrCompanyInfoSectionOrFaqSectionOrHiringModelSectionOrJamstackCteSectionOrNewsLetterSectionOrOurProcessSectionOrPricingSectionOrReviewsSectionOrSolutionSectionOrTechStackSectionOrTestimonialsSectionOrTitleWithFourImageSectionOrWorkSection = ChooseChSection | CompanyInfoSection | FaqSection | HiringModelSection | JamstackCteSection | NewsLetterSection | OurProcessSection | PricingSection | ReviewsSection | SolutionSection | TechStackSection | TestimonialsSection | TitleWithFourImageSection | WorkSection;

export type ChooseChSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type Color = {
  __typename?: 'Color';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alpha?: Maybe<Scalars['Float']>;
  hex?: Maybe<Scalars['String']>;
  hsl?: Maybe<HslaColor>;
  hsv?: Maybe<HsvaColor>;
  rgb?: Maybe<RgbaColor>;
};

export type ColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alpha?: InputMaybe<FloatFilter>;
  hex?: InputMaybe<StringFilter>;
  hsl?: InputMaybe<HslaColorFilter>;
  hsv?: InputMaybe<HsvaColorFilter>;
  rgb?: InputMaybe<RgbaColorFilter>;
};

export type ColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alpha?: InputMaybe<SortOrder>;
  hex?: InputMaybe<SortOrder>;
  hsl?: InputMaybe<HslaColorSorting>;
  hsv?: InputMaybe<HsvaColorSorting>;
  rgb?: InputMaybe<RgbaColorSorting>;
};

export type CompaniesLogoTitleArray = {
  __typename?: 'CompaniesLogoTitleArray';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  title?: Maybe<Scalars['String']>;
};

export type CompaniesLogoTitleArrayFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CompaniesLogoTitleArraySorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type CompanyInfoSection = Document & {
  __typename?: 'CompanyInfoSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  appIconImage?: Maybe<Array<Maybe<IconTitleArray>>>;
  image?: Maybe<Array<Maybe<CustomImage>>>;
  numberTitle?: Maybe<Array<Maybe<NumberTitle>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type CompanyInfoSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type CompanyInfoSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type CompanyVisionsection = {
  __typename?: 'CompanyVisionsection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  companyVisionFeatures?: Maybe<Array<Maybe<ServicesDetails>>>;
  description?: Maybe<RichText>;
  missionVisionCard?: Maybe<Array<Maybe<ImageRichTextCardSection>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CompanyVisionsectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CompanyVisionsectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ComparisionField = {
  __typename?: 'ComparisionField';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  boolean_value?: Maybe<Scalars['Boolean']>;
  button?: Maybe<Button>;
  isDivider?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  slider_value?: Maybe<Scalars['Float']>;
  string?: Maybe<Scalars['String']>;
  string_with_boolean?: Maybe<StringWithBoolean>;
  string_with_icon?: Maybe<StringWithIcon>;
  type?: Maybe<Scalars['String']>;
};

export type ComparisionFieldFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  boolean_value?: InputMaybe<BooleanFilter>;
  button?: InputMaybe<ButtonFilter>;
  isDivider?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  slider_value?: InputMaybe<FloatFilter>;
  string?: InputMaybe<StringFilter>;
  string_with_boolean?: InputMaybe<StringWithBooleanFilter>;
  string_with_icon?: InputMaybe<StringWithIconFilter>;
  type?: InputMaybe<StringFilter>;
};

export type ComparisionFieldSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  boolean_value?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  isDivider?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slider_value?: InputMaybe<SortOrder>;
  string?: InputMaybe<SortOrder>;
  string_with_boolean?: InputMaybe<StringWithBooleanSorting>;
  string_with_icon?: InputMaybe<StringWithIconSorting>;
  type?: InputMaybe<SortOrder>;
};

export type ContactForm = {
  __typename?: 'ContactForm';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContactFormFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  placeholder?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type ContactFormSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  placeholder?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ContactHeroSection = {
  __typename?: 'ContactHeroSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  mainTitle?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContactHeroSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  mainTitle?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ContactHeroSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  mainTitle?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ContactInformationSection = {
  __typename?: 'ContactInformationSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  contactUsCard?: Maybe<Array<Maybe<ImageRichTextCardSection>>>;
  email?: Maybe<Scalars['String']>;
  officeAddress?: Maybe<OfficeAddress>;
  officeTime?: Maybe<OfficeTime>;
  phoneNo?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContactInformationSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  officeAddress?: InputMaybe<OfficeAddressFilter>;
  officeTime?: InputMaybe<OfficeTimeFilter>;
  phoneNo?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ContactInformationSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  officeAddress?: InputMaybe<OfficeAddressSorting>;
  officeTime?: InputMaybe<OfficeTimeSorting>;
  phoneNo?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ContactMapSection = {
  __typename?: 'ContactMapSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  mapImage?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
};

export type ContactMapSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  mapImage?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
};

export type ContactMapSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  mapImage?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
};

export type ContactMessageImage = {
  __typename?: 'ContactMessageImage';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  contactMessageImageTitleSubtitleArray?: Maybe<Array<Maybe<ImagetitleSubtitleArray>>>;
  image?: Maybe<CustomImage>;
};

export type ContactMessageImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
};

export type ContactMessageImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
};

export type ContactMessageSection = {
  __typename?: 'ContactMessageSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  button?: Maybe<Array<Maybe<Button>>>;
  description?: Maybe<RichText>;
  messageImage?: Maybe<ContactMessageImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  sevicesTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContactMessageSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  messageImage?: InputMaybe<ContactMessageImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  sevicesTitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ContactMessageSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  messageImage?: InputMaybe<ContactMessageImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  sevicesTitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ContactUs = Document & {
  __typename?: 'ContactUs';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  company_name?: Maybe<Scalars['String']>;
  email_address?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  service_name?: Maybe<Scalars['String']>;
};

export type ContactUsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  company_name?: InputMaybe<StringFilter>;
  email_address?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  phone_number?: InputMaybe<StringFilter>;
  service_name?: InputMaybe<StringFilter>;
};

export type ContactUsSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  company_name?: InputMaybe<SortOrder>;
  email_address?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone_number?: InputMaybe<SortOrder>;
  service_name?: InputMaybe<SortOrder>;
};

export type CustomImage = {
  __typename?: 'CustomImage';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  caption?: Maybe<Scalars['String']>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
  link?: Maybe<Link>;
};

export type CustomImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  altText?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  caption?: InputMaybe<StringFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
  link?: InputMaybe<LinkFilter>;
};

export type CustomImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  caption?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
  link?: InputMaybe<LinkSorting>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

export type DevelopmentArray = {
  __typename?: 'DevelopmentArray';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  imageButtonTitle?: Maybe<Array<Maybe<ImageButtonTitle>>>;
  title?: Maybe<Scalars['String']>;
};

export type DevelopmentArrayFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type DevelopmentArraySorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type DevelopmentCard = {
  __typename?: 'DevelopmentCard';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  developmentCardRichText?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
};

export type DevelopmentCardFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  developmentCardRichText?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
};

export type DevelopmentCardSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  developmentCardRichText?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type EmailId = Document & {
  __typename?: 'EmailId';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  email_id?: Maybe<Scalars['String']>;
};

export type EmailIdFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  email_id?: InputMaybe<StringFilter>;
};

export type EmailIdSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  email_id?: InputMaybe<SortOrder>;
};

export type EstimateProjectFormSection = {
  __typename?: 'EstimateProjectFormSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  emailPlaceholder?: Maybe<Scalars['String']>;
  hireJamstackDevelopmentButton?: Maybe<Button>;
  howCanWeHelpPlaceholder?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  namePlaceholder?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  selectTypeButton?: Maybe<Array<Maybe<Scalars['String']>>>;
  selectTypeOfProject?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type EstimateProjectFormSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  emailPlaceholder?: InputMaybe<StringFilter>;
  hireJamstackDevelopmentButton?: InputMaybe<ButtonFilter>;
  howCanWeHelpPlaceholder?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  namePlaceholder?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  selectTypeOfProject?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type EstimateProjectFormSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  emailPlaceholder?: InputMaybe<SortOrder>;
  hireJamstackDevelopmentButton?: InputMaybe<ButtonSorting>;
  howCanWeHelpPlaceholder?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  namePlaceholder?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  selectTypeOfProject?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type FaqSection = Document & {
  __typename?: 'FAQSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  sectionTheme?: Maybe<Scalars['String']>;
  sectionTitle?: Maybe<Scalars['String']>;
  sideContentWithQueAns?: Maybe<Array<Maybe<SideContentWithQueAns>>>;
  titleButton?: Maybe<TitleButton>;
  titleButtonWithBG?: Maybe<Scalars['Boolean']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type FaqSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  sectionTitle?: InputMaybe<StringFilter>;
  titleButton?: InputMaybe<TitleButtonFilter>;
  titleButtonWithBG?: InputMaybe<BooleanFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type FaqSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  sectionTitle?: InputMaybe<SortOrder>;
  titleButton?: InputMaybe<TitleButtonSorting>;
  titleButtonWithBG?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']>;
};

export type Footer = Document & {
  __typename?: 'Footer';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  footerLogo?: Maybe<Array<Maybe<FooterLogo>>>;
  footerNavItems?: Maybe<Array<Maybe<NavbarLinks>>>;
  footerTitleLinkList?: Maybe<Array<Maybe<FooterTitleLinkList>>>;
  footerbar?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<CustomImage>>>;
  mainTitle?: Maybe<Scalars['String']>;
  phoneNo?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FooterFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  address?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  footerbar?: InputMaybe<StringFilter>;
  mainTitle?: InputMaybe<StringFilter>;
  phoneNo?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FooterLogo = {
  __typename?: 'FooterLogo';
  ApplogoLink?: Maybe<Scalars['String']>;
  Hoverimage?: Maybe<CustomImage>;
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  target?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FooterLogoFilter = {
  ApplogoLink?: InputMaybe<StringFilter>;
  Hoverimage?: InputMaybe<CustomImageFilter>;
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  target?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FooterLogoSorting = {
  ApplogoLink?: InputMaybe<SortOrder>;
  Hoverimage?: InputMaybe<CustomImageSorting>;
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  target?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type FooterSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  footerbar?: InputMaybe<SortOrder>;
  mainTitle?: InputMaybe<SortOrder>;
  phoneNo?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  subtitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type FooterTitleLinkList = {
  __typename?: 'FooterTitleLinkList';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  linkList?: Maybe<Array<Maybe<NavbarLinks>>>;
  title?: Maybe<Scalars['String']>;
};

export type FooterTitleLinkListFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FooterTitleLinkListSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type FourOFourErrorSection = {
  __typename?: 'FourOFourErrorSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  errorDescription?: Maybe<Scalars['String']>;
  errorTitle?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
};

export type FourOFourErrorSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  errorDescription?: InputMaybe<StringFilter>;
  errorTitle?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
};

export type FourOFourErrorSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  errorDescription?: InputMaybe<SortOrder>;
  errorTitle?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type Header = Document & {
  __typename?: 'Header';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  logo?: Maybe<CustomImage>;
  navItems?: Maybe<Array<Maybe<NavbarLinks>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  toggleNavItems?: Maybe<Array<Maybe<NavbarLinks>>>;
};

export type HeaderFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  logo?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HeaderSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  logo?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type HeroSection = {
  __typename?: 'HeroSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
};

export type HeroSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
};

export type HeroSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
};

export type HireDedicatedPageTypes = Document & {
  __typename?: 'HireDedicatedPageTypes';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  label?: Maybe<Scalars['String']>;
};

export type HireDedicatedPageTypesFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  label?: InputMaybe<StringFilter>;
};

export type HireDedicatedPageTypesSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
};

export type HiringModelDetails = {
  __typename?: 'HiringModelDetails';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
  title?: Maybe<Scalars['String']>;
};

export type HiringModelDetailsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HiringModelDetailsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type HiringModelSection = Document & {
  __typename?: 'HiringModelSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  hiringModelDetails?: Maybe<Array<Maybe<HiringModelDetails>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type HiringModelSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type HiringModelSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type Home = Document & {
  __typename?: 'Home';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  sections?: Maybe<Array<Maybe<ChooseChSectionOrCompanyInfoSectionOrFaqSectionOrHiringModelSectionOrHomeAboutUsSectionOrHomeBlogSectionOrHomeContactUsSectionOrHomeHeroSectionOrHomeOurProsSectionOrHomeServicesSectionOrHomeVideoSectionOrImageWithTitleSectionOrJamstackCteSectionOrNewsLetterSectionOrOurProcessSectionOrPricingSectionOrReviewsSectionOrSolutionSectionOrTechStackSectionOrTestimonialsSectionOrTitleHoverImageSectionOrTitleWithFourImageSectionOrWorkSection>>>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  sub_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HomeAboutUsSection = {
  __typename?: 'HomeAboutUsSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type HomeAboutUsSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type HomeAboutUsSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type HomeBlogSection = {
  __typename?: 'HomeBlogSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  button?: Maybe<Button>;
  mainTitle?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type HomeBlogSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  button?: InputMaybe<ButtonFilter>;
  mainTitle?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type HomeBlogSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  mainTitle?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  subtitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type HomeContactUsSection = {
  __typename?: 'HomeContactUsSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HomeContactUsSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HomeContactUsSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type HomeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  footer?: InputMaybe<FooterFilter>;
  header?: InputMaybe<HeaderFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  sub_title?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HomeHeroSection = {
  __typename?: 'HomeHeroSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  button?: Maybe<Button>;
  description?: Maybe<Scalars['String']>;
  mainTitle?: Maybe<Scalars['String']>;
  mainTitleArray?: Maybe<Array<Maybe<Scalars['String']>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HomeHeroSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  button?: InputMaybe<ButtonFilter>;
  description?: InputMaybe<StringFilter>;
  mainTitle?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  subTitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HomeHeroSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  description?: InputMaybe<SortOrder>;
  mainTitle?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  subTitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type HomeOurProsSection = {
  __typename?: 'HomeOurProsSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  descriptionRaw?: Maybe<Scalars['JSON']>;
  sectionTheme?: Maybe<Scalars['String']>;
  sectionTitle?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HomeOurProsSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  sectionTitle?: InputMaybe<StringFilter>;
  subTitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HomeOurProsSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  sectionTitle?: InputMaybe<SortOrder>;
  subTitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type HomeServicesSection = {
  __typename?: 'HomeServicesSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  serviceDetailsColumn?: Maybe<Scalars['String']>;
  servicesDetails?: Maybe<Array<Maybe<ServicesDetails>>>;
  titleSubtitle?: Maybe<TitleSubtitle>;
  withoutNumber?: Maybe<Scalars['Boolean']>;
};

export type HomeServicesSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  serviceDetailsColumn?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
  withoutNumber?: InputMaybe<BooleanFilter>;
};

export type HomeServicesSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  serviceDetailsColumn?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
  withoutNumber?: InputMaybe<SortOrder>;
};

export type HomeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  sub_title?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type HomeVideoSection = {
  __typename?: 'HomeVideoSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  video?: Maybe<File>;
};

export type HomeVideoSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  video?: InputMaybe<FileFilter>;
};

export type HomeVideoSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  video?: InputMaybe<FileSorting>;
};

export type HourlyDeveloperSection = {
  __typename?: 'HourlyDeveloperSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  button?: Maybe<Button>;
  desc?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  price?: Maybe<Scalars['String']>;
  price_section?: Maybe<TitleDescription>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type HourlyDeveloperSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  button?: InputMaybe<ButtonFilter>;
  desc?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  price?: InputMaybe<StringFilter>;
  price_section?: InputMaybe<TitleDescriptionFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type HourlyDeveloperSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  desc?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  price?: InputMaybe<SortOrder>;
  price_section?: InputMaybe<TitleDescriptionSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type HslaColor = {
  __typename?: 'HslaColor';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  a?: Maybe<Scalars['Float']>;
  h?: Maybe<Scalars['Float']>;
  l?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
};

export type HslaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  h?: InputMaybe<FloatFilter>;
  l?: InputMaybe<FloatFilter>;
  s?: InputMaybe<FloatFilter>;
};

export type HslaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  h?: InputMaybe<SortOrder>;
  l?: InputMaybe<SortOrder>;
  s?: InputMaybe<SortOrder>;
};

export type HsvaColor = {
  __typename?: 'HsvaColor';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  a?: Maybe<Scalars['Float']>;
  h?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
  v?: Maybe<Scalars['Float']>;
};

export type HsvaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  h?: InputMaybe<FloatFilter>;
  s?: InputMaybe<FloatFilter>;
  v?: InputMaybe<FloatFilter>;
};

export type HsvaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  h?: InputMaybe<SortOrder>;
  s?: InputMaybe<SortOrder>;
  v?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type IconTitleArray = {
  __typename?: 'IconTitleArray';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  title?: Maybe<Scalars['String']>;
};

export type IconTitleArrayFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type IconTitleArraySorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageArraySection = {
  __typename?: 'ImageArraySection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<CustomImage>>>;
  isBigger?: Maybe<Scalars['Boolean']>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ImageArraySectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  isBigger?: InputMaybe<BooleanFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageArraySectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  isBigger?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ImageBackground = {
  __typename?: 'ImageBackground';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
};

export type ImageBackgroundFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  backgroundColor?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
};

export type ImageBackgroundSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  backgroundColor?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
};

export type ImageButtonTitle = {
  __typename?: 'ImageButtonTitle';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  button?: Maybe<Button>;
  image?: Maybe<CustomImage>;
  title?: Maybe<Scalars['String']>;
};

export type ImageButtonTitleFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  button?: InputMaybe<ButtonFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageButtonTitleSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageRichTextCardSection = {
  __typename?: 'ImageRichTextCardSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
};

export type ImageRichTextCardSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
};

export type ImageRichTextCardSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
};

export type ImageSideBySideTitleDescArraySection = {
  __typename?: 'ImageSideBySideTitleDescArraySection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleDescriptionArray?: Maybe<Array<Maybe<TitleDescription>>>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type ImageSideBySideTitleDescArraySectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type ImageSideBySideTitleDescArraySectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type ImageTitle = {
  __typename?: 'ImageTitle';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  title?: Maybe<Scalars['String']>;
};

export type ImageTitleDescriptionDetails = {
  __typename?: 'ImageTitleDescriptionDetails';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  descriptionDetailsRichText?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
  sideTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ImageTitleDescriptionDetailsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  descriptionDetailsRichText?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sideTitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageTitleDescriptionDetailsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  descriptionDetailsRichText?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  sideTitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ImageTitleDescriptionSection = {
  __typename?: 'ImageTitleDescriptionSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
  borderOption?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['String']>;
  details?: Maybe<Array<Maybe<ImageTitleDescriptionDetails>>>;
  imageOption?: Maybe<Scalars['String']>;
  ourApproach?: Maybe<Scalars['Boolean']>;
  sectionTheme?: Maybe<Scalars['String']>;
  sliderOption?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
  widthOption?: Maybe<Scalars['String']>;
};

export type ImageTitleDescriptionSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  align?: InputMaybe<StringFilter>;
  borderOption?: InputMaybe<StringFilter>;
  columns?: InputMaybe<StringFilter>;
  imageOption?: InputMaybe<StringFilter>;
  ourApproach?: InputMaybe<BooleanFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  sliderOption?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
  widthOption?: InputMaybe<StringFilter>;
};

export type ImageTitleDescriptionSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  align?: InputMaybe<SortOrder>;
  borderOption?: InputMaybe<SortOrder>;
  columns?: InputMaybe<SortOrder>;
  imageOption?: InputMaybe<SortOrder>;
  ourApproach?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  sliderOption?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
  widthOption?: InputMaybe<SortOrder>;
};

export type ImageTitleFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageTitleSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type ImageWithTitleArray = {
  __typename?: 'ImageWithTitleArray';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  title?: Maybe<Scalars['String']>;
};

export type ImageWithTitleArrayFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageWithTitleArraySorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type ImageWithTitleSection = {
  __typename?: 'ImageWithTitleSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  imageWithTitleArray?: Maybe<Array<Maybe<ImageWithTitleArray>>>;
  iszigzagslider?: Maybe<Scalars['Boolean']>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ImageWithTitleSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  iszigzagslider?: InputMaybe<BooleanFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageWithTitleSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  iszigzagslider?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ImagetitleSubtitleArray = {
  __typename?: 'ImagetitleSubtitleArray';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  subtitleArray?: Maybe<Scalars['String']>;
  titleArray?: Maybe<Scalars['String']>;
};

export type ImagetitleSubtitleArrayFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  subtitleArray?: InputMaybe<StringFilter>;
  titleArray?: InputMaybe<StringFilter>;
};

export type ImagetitleSubtitleArraySorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  subtitleArray?: InputMaybe<SortOrder>;
  titleArray?: InputMaybe<SortOrder>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']>;
};

export type JamstackCteSection = Document & {
  __typename?: 'JamstackCTESection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  button?: Maybe<Button>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  jamStackserviceList?: Maybe<Array<Maybe<JamstackCteServiceList>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type JamstackCteSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  button?: InputMaybe<ButtonFilter>;
  description?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type JamstackCteSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  description?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type JamstackCteServiceList = {
  __typename?: 'JamstackCTEServiceList';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  title?: Maybe<Scalars['String']>;
};

export type JamstackCteServiceListFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type JamstackCteServiceListSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type JamstackResourceSection = {
  __typename?: 'JamstackResourceSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  button?: Maybe<Button>;
  resourceDetailCard?: Maybe<Array<Maybe<ResourceDetailCard>>>;
  title?: Maybe<Scalars['String']>;
};

export type JamstackResourceSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  button?: InputMaybe<ButtonFilter>;
  title?: InputMaybe<StringFilter>;
};

export type JamstackResourceSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Link = {
  __typename?: 'Link';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type LinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  href?: InputMaybe<StringFilter>;
  linkTarget?: InputMaybe<StringFilter>;
  linkType?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  href?: InputMaybe<SortOrder>;
  linkTarget?: InputMaybe<SortOrder>;
  linkType?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type MainTitleWithTitleDesc = {
  __typename?: 'MainTitleWithTitleDesc';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleDescArray?: Maybe<Array<Maybe<ImageTitleDescriptionSection>>>;
};

export type MainTitleWithTitleDescFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type MainTitleWithTitleDescSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type MetaAttribute = {
  __typename?: 'MetaAttribute';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  attribute_key?: Maybe<Scalars['String']>;
  attribute_type?: Maybe<Scalars['String']>;
  attribute_value_image?: Maybe<CustomImage>;
  attribute_value_string?: Maybe<Scalars['String']>;
};

export type MetaAttributeFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  attribute_key?: InputMaybe<StringFilter>;
  attribute_type?: InputMaybe<StringFilter>;
  attribute_value_image?: InputMaybe<CustomImageFilter>;
  attribute_value_string?: InputMaybe<StringFilter>;
};

export type MetaAttributeSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  attribute_key?: InputMaybe<SortOrder>;
  attribute_type?: InputMaybe<SortOrder>;
  attribute_value_image?: InputMaybe<CustomImageSorting>;
  attribute_value_string?: InputMaybe<SortOrder>;
};

export type MetaTag = {
  __typename?: 'MetaTag';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  meta_attributes?: Maybe<Array<Maybe<MetaAttribute>>>;
};

export type MetaTagFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type MetaTagSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type NavbarLinks = {
  __typename?: 'NavbarLinks';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  navLabel?: Maybe<Scalars['String']>;
  navLink?: Maybe<Scalars['String']>;
};

export type NavbarLinksFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  navLabel?: InputMaybe<StringFilter>;
  navLink?: InputMaybe<StringFilter>;
};

export type NavbarLinksSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  navLabel?: InputMaybe<SortOrder>;
  navLink?: InputMaybe<SortOrder>;
};

export type NewsLetterSection = Document & {
  __typename?: 'NewsLetterSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type NewsLetterSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type NewsLetterSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type NextJsuSeCompaniesSection = {
  __typename?: 'NextJSUSeCompaniesSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  companiesLogoTitleArray?: Maybe<Array<Maybe<CompaniesLogoTitleArray>>>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type NextJsuSeCompaniesSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type NextJsuSeCompaniesSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type NumberTitle = {
  __typename?: 'NumberTitle';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  addOn?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type NumberTitleFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  addOn?: InputMaybe<BooleanFilter>;
  number?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type NumberTitleSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  addOn?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type OfficeAddress = {
  __typename?: 'OfficeAddress';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  directions?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type OfficeAddressFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  directions?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
};

export type OfficeAddressSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  directions?: InputMaybe<LinkSorting>;
  title?: InputMaybe<SortOrder>;
};

export type OfficeTime = {
  __typename?: 'OfficeTime';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  title?: Maybe<Scalars['String']>;
};

export type OfficeTimeFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  title?: InputMaybe<StringFilter>;
};

export type OfficeTimeSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  title?: InputMaybe<SortOrder>;
};

export type OurApproachSection = {
  __typename?: 'OurApproachSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  mainTitleWithTitleDescArray?: Maybe<Array<Maybe<MainTitleWithTitleDesc>>>;
  title?: Maybe<Scalars['String']>;
};

export type OurApproachSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type OurApproachSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type OurProcessSection = Document & {
  __typename?: 'OurProcessSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  ourProcessAppIconImage?: Maybe<Array<Maybe<IconTitleArray>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type OurProcessSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type OurProcessSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type Package = Document & {
  __typename?: 'Package';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  label?: Maybe<Scalars['String']>;
  package_details?: Maybe<Array<Maybe<ComparisionField>>>;
  package_duration?: Maybe<Scalars['String']>;
  /** Use {price} for inheriting package price. For example, ${price}/month will show $10/month if package price is set to 10. */
  package_price?: Maybe<Scalars['String']>;
  /** Used only for transactions. Will not be used for frontend. */
  package_price_value?: Maybe<Scalars['String']>;
  package_summary?: Maybe<Array<Maybe<Scalars['String']>>>;
  package_title?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Boolean']>;
};

export type PackageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  label?: InputMaybe<StringFilter>;
  package_duration?: InputMaybe<StringFilter>;
  package_price?: InputMaybe<StringFilter>;
  package_price_value?: InputMaybe<StringFilter>;
  package_title?: InputMaybe<StringFilter>;
  popularity?: InputMaybe<BooleanFilter>;
};

export type PackageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  package_duration?: InputMaybe<SortOrder>;
  package_price?: InputMaybe<SortOrder>;
  package_price_value?: InputMaybe<SortOrder>;
  package_title?: InputMaybe<SortOrder>;
  popularity?: InputMaybe<SortOrder>;
};

export type Plan = Document & {
  __typename?: 'Plan';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  label?: Maybe<Scalars['String']>;
  packages?: Maybe<Array<Maybe<Package>>>;
  plan_name?: Maybe<Scalars['String']>;
  plan_services?: Maybe<Array<Maybe<Scalars['String']>>>;
  plan_services_template?: Maybe<PlanServicesTemplate>;
};

export type PlanFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  label?: InputMaybe<StringFilter>;
  plan_name?: InputMaybe<StringFilter>;
  plan_services_template?: InputMaybe<PlanServicesTemplateFilter>;
};

export type PlanServicesTemplate = Document & {
  __typename?: 'PlanServicesTemplate';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  plan_services?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Only used in CMS. */
  title?: Maybe<Scalars['String']>;
};

export type PlanServicesTemplateFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PlanServicesTemplateSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PlanSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  plan_name?: InputMaybe<SortOrder>;
};

export type PortfolioInnerDevelopmentSection = {
  __typename?: 'PortfolioInnerDevelopmentSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  developmentArray?: Maybe<Array<Maybe<DevelopmentArray>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PortfolioInnerDevelopmentSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PortfolioInnerDevelopmentSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Pricing = {
  __typename?: 'Pricing';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  button?: Maybe<Button>;
  plan_navigation?: Maybe<Scalars['String']>;
  plans?: Maybe<Array<Maybe<Plan>>>;
};

export type PricingFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  button?: InputMaybe<ButtonFilter>;
  plan_navigation?: InputMaybe<StringFilter>;
};

export type PricingSection = Document & {
  __typename?: 'PricingSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  mainTitle?: Maybe<Scalars['String']>;
  pricingSection?: Maybe<Pricing>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type PricingSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  mainTitle?: InputMaybe<StringFilter>;
  pricingSection?: InputMaybe<PricingFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type PricingSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  mainTitle?: InputMaybe<SortOrder>;
  pricingSection?: InputMaybe<PricingSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type PricingSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  plan_navigation?: InputMaybe<SortOrder>;
};

export type QuestionAndAnswer = {
  __typename?: 'QuestionAndAnswer';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  title?: Maybe<Scalars['String']>;
};

export type QuestionAndAnswerFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  title?: InputMaybe<StringFilter>;
};

export type QuestionAndAnswerSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  title?: InputMaybe<SortOrder>;
};

export type ResourceDetailCard = {
  __typename?: 'ResourceDetailCard';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  title?: Maybe<Scalars['String']>;
};

export type ResourceDetailCardFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ResourceDetailCardSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type ReviewsSection = Document & {
  __typename?: 'ReviewsSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  button?: Maybe<Button>;
  description?: Maybe<RichText>;
  sectionTheme?: Maybe<Scalars['String']>;
  textWithImage?: Maybe<RichText>;
  title?: Maybe<Scalars['String']>;
};

export type ReviewsSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  button?: InputMaybe<ButtonFilter>;
  description?: InputMaybe<RichTextFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  textWithImage?: InputMaybe<RichTextFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ReviewsSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  description?: InputMaybe<RichTextSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  textWithImage?: InputMaybe<RichTextSorting>;
  title?: InputMaybe<SortOrder>;
};

export type RgbaColor = {
  __typename?: 'RgbaColor';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  a?: Maybe<Scalars['Float']>;
  b?: Maybe<Scalars['Float']>;
  g?: Maybe<Scalars['Float']>;
  r?: Maybe<Scalars['Float']>;
};

export type RgbaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  b?: InputMaybe<FloatFilter>;
  g?: InputMaybe<FloatFilter>;
  r?: InputMaybe<FloatFilter>;
};

export type RgbaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  b?: InputMaybe<SortOrder>;
  g?: InputMaybe<SortOrder>;
  r?: InputMaybe<SortOrder>;
};

export type RichText = {
  __typename?: 'RichText';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  customClassName?: Maybe<Scalars['String']>;
  customeRichTextRaw?: Maybe<Scalars['JSON']>;
};

export type RichTextFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  customClassName?: InputMaybe<StringFilter>;
};

export type RichTextIconSideImageSection = {
  __typename?: 'RichTextIconSideImageSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  developmentIconTitle?: Maybe<Array<Maybe<IconTitleArray>>>;
  iconTitleDirection?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
  titleSubtitleOption?: Maybe<Scalars['Boolean']>;
};

export type RichTextIconSideImageSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  iconTitleDirection?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
  titleSubtitleOption?: InputMaybe<BooleanFilter>;
};

export type RichTextIconSideImageSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  iconTitleDirection?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
  titleSubtitleOption?: InputMaybe<SortOrder>;
};

export type RichTextImageButtonSection = {
  __typename?: 'RichTextImageButtonSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  button?: Maybe<Button>;
  description?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type RichTextImageButtonSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  button?: InputMaybe<ButtonFilter>;
  description?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type RichTextImageButtonSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RichTextSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  customClassName?: InputMaybe<SortOrder>;
};

export type RichTextWithSideImage = {
  __typename?: 'RichTextWithSideImage';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  useRichText?: Maybe<RichText>;
};

export type RichTextWithSideImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  useRichText?: InputMaybe<RichTextFilter>;
};

export type RichTextWithSideImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  useRichText?: InputMaybe<RichTextSorting>;
};

export type RightSymbolTitleArray = {
  __typename?: 'RightSymbolTitleArray';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  jamstackCTEServiceList?: Maybe<Array<Maybe<JamstackCteServiceList>>>;
};

export type RightSymbolTitleArrayFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type RightSymbolTitleArraySorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  AllPage?: Maybe<AllPage>;
  AuthorDetails?: Maybe<AuthorDetails>;
  Blog?: Maybe<Blog>;
  BlogInner?: Maybe<BlogInner>;
  BlogInnerSideContent?: Maybe<BlogInnerSideContent>;
  Category?: Maybe<Category>;
  ChooseCHSection?: Maybe<ChooseChSection>;
  CompanyInfoSection?: Maybe<CompanyInfoSection>;
  ContactUs?: Maybe<ContactUs>;
  Document?: Maybe<Document>;
  EmailId?: Maybe<EmailId>;
  FAQSection?: Maybe<FaqSection>;
  Footer?: Maybe<Footer>;
  Header?: Maybe<Header>;
  HireDedicatedPageTypes?: Maybe<HireDedicatedPageTypes>;
  HiringModelSection?: Maybe<HiringModelSection>;
  Home?: Maybe<Home>;
  JamstackCTESection?: Maybe<JamstackCteSection>;
  NewsLetterSection?: Maybe<NewsLetterSection>;
  OurProcessSection?: Maybe<OurProcessSection>;
  Package?: Maybe<Package>;
  Plan?: Maybe<Plan>;
  PlanServicesTemplate?: Maybe<PlanServicesTemplate>;
  PricingSection?: Maybe<PricingSection>;
  ReviewsSection?: Maybe<ReviewsSection>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  ServiceType?: Maybe<ServiceType>;
  SolutionSection?: Maybe<SolutionSection>;
  TechStackSection?: Maybe<TechStackSection>;
  TestimonialsSection?: Maybe<TestimonialsSection>;
  TitleWithFourImageSection?: Maybe<TitleWithFourImageSection>;
  allAllPage: Array<AllPage>;
  allAuthorDetails: Array<AuthorDetails>;
  allBlog: Array<Blog>;
  allBlogInner: Array<BlogInner>;
  allBlogInnerSideContent: Array<BlogInnerSideContent>;
  allCategory: Array<Category>;
  allChooseCHSection: Array<ChooseChSection>;
  allCompanyInfoSection: Array<CompanyInfoSection>;
  allContactUs: Array<ContactUs>;
  allDocument: Array<Document>;
  allEmailId: Array<EmailId>;
  allFAQSection: Array<FaqSection>;
  allFooter: Array<Footer>;
  allHeader: Array<Header>;
  allHireDedicatedPageTypes: Array<HireDedicatedPageTypes>;
  allHiringModelSection: Array<HiringModelSection>;
  allHome: Array<Home>;
  allJamstackCTESection: Array<JamstackCteSection>;
  allNewsLetterSection: Array<NewsLetterSection>;
  allOurProcessSection: Array<OurProcessSection>;
  allPackage: Array<Package>;
  allPlan: Array<Plan>;
  allPlanServicesTemplate: Array<PlanServicesTemplate>;
  allPricingSection: Array<PricingSection>;
  allReviewsSection: Array<ReviewsSection>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allServiceType: Array<ServiceType>;
  allSolutionSection: Array<SolutionSection>;
  allTechStackSection: Array<TechStackSection>;
  allTestimonialsSection: Array<TestimonialsSection>;
  allTitleWithFourImageSection: Array<TitleWithFourImageSection>;
};


export type RootQueryAllPageArgs = {
  id: Scalars['ID'];
};


export type RootQueryAuthorDetailsArgs = {
  id: Scalars['ID'];
};


export type RootQueryBlogArgs = {
  id: Scalars['ID'];
};


export type RootQueryBlogInnerArgs = {
  id: Scalars['ID'];
};


export type RootQueryBlogInnerSideContentArgs = {
  id: Scalars['ID'];
};


export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
};


export type RootQueryChooseChSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryCompanyInfoSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryContactUsArgs = {
  id: Scalars['ID'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type RootQueryEmailIdArgs = {
  id: Scalars['ID'];
};


export type RootQueryFaqSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryFooterArgs = {
  id: Scalars['ID'];
};


export type RootQueryHeaderArgs = {
  id: Scalars['ID'];
};


export type RootQueryHireDedicatedPageTypesArgs = {
  id: Scalars['ID'];
};


export type RootQueryHiringModelSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryHomeArgs = {
  id: Scalars['ID'];
};


export type RootQueryJamstackCteSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryNewsLetterSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryOurProcessSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryPackageArgs = {
  id: Scalars['ID'];
};


export type RootQueryPlanArgs = {
  id: Scalars['ID'];
};


export type RootQueryPlanServicesTemplateArgs = {
  id: Scalars['ID'];
};


export type RootQueryPricingSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryReviewsSectionArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type RootQueryServiceTypeArgs = {
  id: Scalars['ID'];
};


export type RootQuerySolutionSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryTechStackSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryTestimonialsSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryTitleWithFourImageSectionArgs = {
  id: Scalars['ID'];
};


export type RootQueryAllAllPageArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AllPageSorting>>;
  where?: InputMaybe<AllPageFilter>;
};


export type RootQueryAllAuthorDetailsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AuthorDetailsSorting>>;
  where?: InputMaybe<AuthorDetailsFilter>;
};


export type RootQueryAllBlogArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<BlogSorting>>;
  where?: InputMaybe<BlogFilter>;
};


export type RootQueryAllBlogInnerArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<BlogInnerSorting>>;
  where?: InputMaybe<BlogInnerFilter>;
};


export type RootQueryAllBlogInnerSideContentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<BlogInnerSideContentSorting>>;
  where?: InputMaybe<BlogInnerSideContentFilter>;
};


export type RootQueryAllCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CategorySorting>>;
  where?: InputMaybe<CategoryFilter>;
};


export type RootQueryAllChooseChSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ChooseChSectionSorting>>;
  where?: InputMaybe<ChooseChSectionFilter>;
};


export type RootQueryAllCompanyInfoSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CompanyInfoSectionSorting>>;
  where?: InputMaybe<CompanyInfoSectionFilter>;
};


export type RootQueryAllContactUsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ContactUsSorting>>;
  where?: InputMaybe<ContactUsFilter>;
};


export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};


export type RootQueryAllEmailIdArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EmailIdSorting>>;
  where?: InputMaybe<EmailIdFilter>;
};


export type RootQueryAllFaqSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FaqSectionSorting>>;
  where?: InputMaybe<FaqSectionFilter>;
};


export type RootQueryAllFooterArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FooterSorting>>;
  where?: InputMaybe<FooterFilter>;
};


export type RootQueryAllHeaderArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<HeaderSorting>>;
  where?: InputMaybe<HeaderFilter>;
};


export type RootQueryAllHireDedicatedPageTypesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<HireDedicatedPageTypesSorting>>;
  where?: InputMaybe<HireDedicatedPageTypesFilter>;
};


export type RootQueryAllHiringModelSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<HiringModelSectionSorting>>;
  where?: InputMaybe<HiringModelSectionFilter>;
};


export type RootQueryAllHomeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<HomeSorting>>;
  where?: InputMaybe<HomeFilter>;
};


export type RootQueryAllJamstackCteSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<JamstackCteSectionSorting>>;
  where?: InputMaybe<JamstackCteSectionFilter>;
};


export type RootQueryAllNewsLetterSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<NewsLetterSectionSorting>>;
  where?: InputMaybe<NewsLetterSectionFilter>;
};


export type RootQueryAllOurProcessSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OurProcessSectionSorting>>;
  where?: InputMaybe<OurProcessSectionFilter>;
};


export type RootQueryAllPackageArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PackageSorting>>;
  where?: InputMaybe<PackageFilter>;
};


export type RootQueryAllPlanArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PlanSorting>>;
  where?: InputMaybe<PlanFilter>;
};


export type RootQueryAllPlanServicesTemplateArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PlanServicesTemplateSorting>>;
  where?: InputMaybe<PlanServicesTemplateFilter>;
};


export type RootQueryAllPricingSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PricingSectionSorting>>;
  where?: InputMaybe<PricingSectionFilter>;
};


export type RootQueryAllReviewsSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ReviewsSectionSorting>>;
  where?: InputMaybe<ReviewsSectionFilter>;
};


export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};


export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};


export type RootQueryAllServiceTypeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ServiceTypeSorting>>;
  where?: InputMaybe<ServiceTypeFilter>;
};


export type RootQueryAllSolutionSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SolutionSectionSorting>>;
  where?: InputMaybe<SolutionSectionFilter>;
};


export type RootQueryAllTechStackSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TechStackSectionSorting>>;
  where?: InputMaybe<TechStackSectionFilter>;
};


export type RootQueryAllTestimonialsSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TestimonialsSectionSorting>>;
  where?: InputMaybe<TestimonialsSectionFilter>;
};


export type RootQueryAllTitleWithFourImageSectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TitleWithFourImageSectionSorting>>;
  where?: InputMaybe<TitleWithFourImageSectionFilter>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars['String']>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']>;
};

export type Seo = {
  __typename?: 'Seo';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  meta_tags?: Maybe<Array<Maybe<MetaTag>>>;
  meta_title?: Maybe<Scalars['String']>;
  /** Asks search engines not to crawl links on this page */
  noFollow?: Maybe<Scalars['Boolean']>;
  /** Tells a search engine that even though it can crawl the page, it cannot add the page into its search index */
  noIndex?: Maybe<Scalars['Boolean']>;
};

export type SeoFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  meta_title?: InputMaybe<StringFilter>;
  noFollow?: InputMaybe<BooleanFilter>;
  noIndex?: InputMaybe<BooleanFilter>;
};

export type SeoSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  meta_title?: InputMaybe<SortOrder>;
  noFollow?: InputMaybe<SortOrder>;
  noIndex?: InputMaybe<SortOrder>;
};

export type ServiceDevelopmentSection = {
  __typename?: 'ServiceDevelopmentSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  developmentCard?: Maybe<Array<Maybe<DevelopmentCard>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ServiceDevelopmentSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ServiceDevelopmentSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ServiceOurProcessSection = {
  __typename?: 'ServiceOurProcessSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
  mainTitle?: Maybe<Scalars['String']>;
  pointerImage?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ServiceOurProcessSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
  mainTitle?: InputMaybe<StringFilter>;
  pointerImage?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ServiceOurProcessSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  mainTitle?: InputMaybe<SortOrder>;
  pointerImage?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ServiceShortTestimonialCard = {
  __typename?: 'ServiceShortTestimonialCard';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
  mainTitle?: Maybe<Scalars['String']>;
  profileDescription?: Maybe<RichText>;
  profileImage?: Maybe<CustomImage>;
  profileName?: Maybe<Scalars['String']>;
};

export type ServiceShortTestimonialCardFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
  mainTitle?: InputMaybe<StringFilter>;
  profileDescription?: InputMaybe<RichTextFilter>;
  profileImage?: InputMaybe<CustomImageFilter>;
  profileName?: InputMaybe<StringFilter>;
};

export type ServiceShortTestimonialCardSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  mainTitle?: InputMaybe<SortOrder>;
  profileDescription?: InputMaybe<RichTextSorting>;
  profileImage?: InputMaybe<CustomImageSorting>;
  profileName?: InputMaybe<SortOrder>;
};

export type ServiceShortTestimonialSection = {
  __typename?: 'ServiceShortTestimonialSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  serviceShortTestimonialCard?: Maybe<Array<Maybe<ServiceShortTestimonialCard>>>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type ServiceShortTestimonialSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type ServiceShortTestimonialSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type ServiceType = Document & {
  __typename?: 'ServiceType';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  label?: Maybe<Scalars['String']>;
};

export type ServiceTypeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  label?: InputMaybe<StringFilter>;
};

export type ServiceTypeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
};

export type ServicesDetails = {
  __typename?: 'ServicesDetails';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  heading?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ServicesDetailsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  heading?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ServicesDetailsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  heading?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SideAppLogoSection = {
  __typename?: 'SideAppLogoSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  appLogo?: Maybe<Array<Maybe<FooterLogo>>>;
  title?: Maybe<Scalars['String']>;
};

export type SideAppLogoSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SideAppLogoSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SideContentWithQueAns = {
  __typename?: 'SideContentWithQueAns';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  questionAndAnswer?: Maybe<Array<Maybe<QuestionAndAnswer>>>;
  title?: Maybe<Scalars['String']>;
};

export type SideContentWithQueAnsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SideContentWithQueAnsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
};

export type SolutionDetails = {
  __typename?: 'SolutionDetails';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<CustomImage>>>;
  title?: Maybe<Scalars['String']>;
};

export type SolutionDetailsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SolutionDetailsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SolutionSection = Document & {
  __typename?: 'SolutionSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  sectionTheme?: Maybe<Scalars['String']>;
  solutionDetails?: Maybe<Array<Maybe<SolutionDetails>>>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type SolutionSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type SolutionSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type SortOrder =
  /** Sorts on the value in ascending order. */
  | 'ASC'
  /** Sorts on the value in descending order. */
  | 'DESC';

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<Scalars['String']>>;
};

export type StringWithBoolean = {
  __typename?: 'StringWithBoolean';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  boolean?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type StringWithBooleanFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  boolean?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
};

export type StringWithBooleanSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  boolean?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type StringWithIcon = {
  __typename?: 'StringWithIcon';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  title?: Maybe<Scalars['String']>;
};

export type StringWithIconFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type StringWithIconSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type TabItem = {
  __typename?: 'TabItem';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  appIconLinkItem?: Maybe<Array<Maybe<AppIconLinkItem>>>;
  title?: Maybe<Scalars['String']>;
};

export type TabItemFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TabItemSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TeamPhotosSection = {
  __typename?: 'TeamPhotosSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type TeamPhotosSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type TeamPhotosSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type TechStackSection = Document & {
  __typename?: 'TechStackSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  sectionTheme?: Maybe<Scalars['String']>;
  tabItem?: Maybe<Array<Maybe<TabItem>>>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type TechStackSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type TechStackSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type TestimonialsCard = {
  __typename?: 'TestimonialsCard';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<CustomImage>>>;
  profileDetail?: Maybe<Scalars['String']>;
  profileName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TestimonialsCardFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  profileDetail?: InputMaybe<StringFilter>;
  profileName?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TestimonialsCardSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  profileDetail?: InputMaybe<SortOrder>;
  profileName?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TestimonialsSection = Document & {
  __typename?: 'TestimonialsSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  sectionTheme?: Maybe<Scalars['String']>;
  testimonialsCard?: Maybe<Array<Maybe<TestimonialsCard>>>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type TestimonialsSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type TestimonialsSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type Thankyou = {
  __typename?: 'Thankyou';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
};

export type ThankyouFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
};

export type ThankyouSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
};

export type ThemesSection = {
  __typename?: 'ThemesSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<CustomImage>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type ThemesSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type ThemesSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type TitleButton = {
  __typename?: 'TitleButton';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  button?: Maybe<Button>;
  title?: Maybe<Scalars['String']>;
};

export type TitleButtonFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  button?: InputMaybe<ButtonFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TitleButtonSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  button?: InputMaybe<ButtonSorting>;
  title?: InputMaybe<SortOrder>;
};

export type TitleContent = {
  __typename?: 'TitleContent';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  content?: Maybe<RichText>;
  title?: Maybe<Scalars['String']>;
};

export type TitleContentFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  content?: InputMaybe<RichTextFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TitleContentSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  content?: InputMaybe<RichTextSorting>;
  title?: InputMaybe<SortOrder>;
};

export type TitleDescription = {
  __typename?: 'TitleDescription';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TitleDescriptionArrayWithSideTitleArraySection = {
  __typename?: 'TitleDescriptionArrayWithSideTitleArraySection';
  TitleDescription?: Maybe<Array<Maybe<ImageTitleDescriptionDetails>>>;
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  sideTitleArray?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type TitleDescriptionArrayWithSideTitleArraySectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type TitleDescriptionArrayWithSideTitleArraySectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type TitleDescriptionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TitleDescriptionSideBySideBgImageSection = {
  __typename?: 'TitleDescriptionSideBySideBGImageSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  bgImageOption?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TitleDescriptionSideBySideBgImageSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bgImageOption?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TitleDescriptionSideBySideBgImageSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bgImageOption?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TitleDescriptionSideImageArraySection = {
  __typename?: 'TitleDescriptionSideImageArraySection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleDescriptionSideImageArray?: Maybe<Array<Maybe<RichTextWithSideImage>>>;
};

export type TitleDescriptionSideImageArraySectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
};

export type TitleDescriptionSideImageArraySectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
};

export type TitleDescriptionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TitleHoverImageSection = {
  __typename?: 'TitleHoverImageSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type TitleHoverImageSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type TitleHoverImageSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type TitleSubtitle = {
  __typename?: 'TitleSubtitle';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  subtitle?: Maybe<RichText>;
  title?: Maybe<Scalars['String']>;
};

export type TitleSubtitleFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<RichTextFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TitleSubtitleImageArraySideRichTextSection = {
  __typename?: 'TitleSubtitleImageArraySideRichTextSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  image?: Maybe<Array<Maybe<CustomImage>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type TitleSubtitleImageArraySideRichTextSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type TitleSubtitleImageArraySideRichTextSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type TitleSubtitleSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  subtitle?: InputMaybe<RichTextSorting>;
  title?: InputMaybe<SortOrder>;
};

export type TitleSubtitleTitleArraySection = {
  __typename?: 'TitleSubtitleTitleArraySection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type TitleSubtitleTitleArraySectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type TitleSubtitleTitleArraySectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type TitleSubtitleWithImageArraySection = {
  __typename?: 'TitleSubtitleWithImageArraySection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<CustomImage>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type TitleSubtitleWithImageArraySectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type TitleSubtitleWithImageArraySectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type TitleWithFourImageSection = Document & {
  __typename?: 'TitleWithFourImageSection';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Array<Maybe<CustomImage>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TitleWithFourImageSectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TitleWithFourImageSectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TitleWithSliderImageSection = {
  __typename?: 'TitleWithSliderImageSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  ifCenterImage?: Maybe<Scalars['Boolean']>;
  imageTitle?: Maybe<Array<Maybe<ImageTitle>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type TitleWithSliderImageSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  ifCenterImage?: InputMaybe<BooleanFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type TitleWithSliderImageSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  ifCenterImage?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type Titledescfullimagesection = {
  __typename?: 'Titledescfullimagesection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type TitledescfullimagesectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type TitledescfullimagesectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type Titleimagearraysection = {
  __typename?: 'Titleimagearraysection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  imageArray?: Maybe<Array<Maybe<CustomImage>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TitleimagearraysectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
};

export type TitleimagearraysectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
};

export type UiUxDevelopmentSection = {
  __typename?: 'UiUxDevelopmentSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  appIconImage?: Maybe<Array<Maybe<IconTitleArray>>>;
  description?: Maybe<RichText>;
  image?: Maybe<Array<Maybe<CustomImage>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type UiUxDevelopmentSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type UiUxDevelopmentSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<RichTextSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type WoocommerceBenefitSection = {
  __typename?: 'WoocommerceBenefitSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<Array<Maybe<RichText>>>;
  image?: Maybe<CustomImage>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type WoocommerceBenefitSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<CustomImageFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type WoocommerceBenefitSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<CustomImageSorting>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type WorkSection = {
  __typename?: 'WorkSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<ImageBackground>>>;
  sectionTheme?: Maybe<Scalars['String']>;
  titleSubtitle?: Maybe<TitleSubtitle>;
};

export type WorkSectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  sectionTheme?: InputMaybe<StringFilter>;
  titleSubtitle?: InputMaybe<TitleSubtitleFilter>;
};

export type WorkSectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  sectionTheme?: InputMaybe<SortOrder>;
  titleSubtitle?: InputMaybe<TitleSubtitleSorting>;
};

export type AllPageFragment = { __typename?: 'AllPage', _id?: string | null, _type?: string | null, _key?: string | null, _createdAt?: any | null, service_page?: boolean | null, hire_dedicated_page?: boolean | null, title?: string | null, service_types?: { __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, hire_dedicated_page_types?: { __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, header?: { __typename?: 'Header', _id?: string | null, title?: string | null, sectionTheme?: string | null, toggleNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, navItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null, sections?: Array<{ __typename: 'ChooseCHSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, appIconImage?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'CompanyInfoSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, numberTitle?: Array<{ __typename?: 'NumberTitle', _key?: string | null, _type?: string | null, number?: number | null, title?: string | null, addOn?: boolean | null } | null> | null, imageArray?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, appIconImage?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'CompanyVisionsection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, missionVisionCard?: Array<{ __typename?: 'ImageRichTextCardSection', _key?: string | null, _type?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null, companyVisionFeatures?: Array<{ __typename?: 'ServicesDetails', _key?: string | null, _type?: string | null, heading?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'ContactHeroSection', _key?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'ContactInformationSection', _key?: string | null, _type?: string | null, title?: string | null, email?: string | null, phoneNo?: string | null, sectionTheme?: string | null, officeAddress?: { __typename?: 'OfficeAddress', _key?: string | null, _type?: string | null, addressTitle?: string | null, addressDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, directions?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, officeTime?: { __typename?: 'OfficeTime', _key?: string | null, _type?: string | null, timeTitle?: string | null, timeDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, contactUsCard?: Array<{ __typename?: 'ImageRichTextCardSection', _key?: string | null, _type?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'ContactMapSection', _key?: string | null, _type?: string | null, mapImage?: string | null, sectionTheme?: string | null } | { __typename: 'ContactMessageSection', _key?: string | null, _type?: string | null, title?: string | null, sevicesTitle?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, servicesButtonArray?: Array<{ __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null> | null, messageImage?: { __typename?: 'ContactMessageImage', _key?: string | null, _type?: string | null, contactMessageMainImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, contactMessageImageTitleSubtitleArray?: Array<{ __typename?: 'ImagetitleSubtitleArray', _key?: string | null, _type?: string | null, titleArray?: string | null, subtitleArray?: string | null, arrowImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null } | { __typename: 'EstimateProjectFormSection', _key?: string | null, _type?: string | null, namePlaceholder?: string | null, emailPlaceholder?: string | null, selectTypeOfProject?: string | null, selectTypeButton?: Array<string | null> | null, sectionTheme?: string | null, textPlaceholder?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'FAQSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTitle?: string | null, titleButtonWithBG?: boolean | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, sideContentWithQueAns?: Array<{ __typename?: 'SideContentWithQueAns', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, questionAndAnswer?: Array<{ __typename?: 'QuestionAndAnswer', _key?: string | null, _type?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | null> | null, titleButton?: { __typename?: 'TitleButton', _key?: string | null, _type?: string | null, title?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | null } | { __typename: 'FourOFourErrorSection', _key?: string | null, _type?: string | null, errorTitle?: string | null, errorDescription?: string | null, sectionTheme?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'HeroSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'HiringModelSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, hiringModelDetails?: Array<{ __typename?: 'HiringModelDetails', _key?: string | null, _type?: string | null, modelDetailsTitle?: string | null, modelDetailsDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'HomeServicesSection', _key?: string | null, _type?: string | null, withoutNumber?: boolean | null, serviceDetailsColumn?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, servicesDetails?: Array<{ __typename?: 'ServicesDetails', _key?: string | null, _type?: string | null, heading?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'HourlyDeveloperSection', _key?: string | null, _type?: string | null, price?: string | null, desc?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, price_section?: { __typename?: 'TitleDescription', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | { __typename: 'ImageArraySection', _key?: string | null, _type?: string | null, title?: string | null, isBigger?: boolean | null, sectionTheme?: string | null, imageArray?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | { __typename: 'ImageRichTextCardSection' } | { __typename: 'ImageSideBySideTitleDescArraySection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, titleDescriptionArray?: Array<{ __typename?: 'TitleDescription', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'ImageTitleDescriptionSection', _key?: string | null, _type?: string | null, sliderOption?: string | null, sectionTheme?: string | null, widthOption?: string | null, borderOption?: string | null, imageOption?: string | null, columns?: string | null, align?: string | null, ourApproach?: boolean | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, details?: Array<{ __typename?: 'ImageTitleDescriptionDetails', _key?: string | null, _type?: string | null, title?: string | null, sideTitle?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, descriptionDetailsRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'ImageWithTitleSection', _key?: string | null, _type?: string | null, title?: string | null, iszigzagslider?: boolean | null, sectionTheme?: string | null, imageWithTitleArray?: Array<{ __typename?: 'ImageWithTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'JamstackCTESection' } | { __typename: 'NewsLetterSection' } | { __typename: 'NextJSUSeCompaniesSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, companiesLogoTitleArray?: Array<{ __typename?: 'CompaniesLogoTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'OurApproachSection' } | { __typename: 'OurProcessSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, ourProcessAppIconImage?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'PortfolioInnerDevelopmentSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, titleImageButton?: Array<{ __typename?: 'DevelopmentArray', _key?: string | null, _type?: string | null, title?: string | null, imageButtonTitle?: Array<{ __typename?: 'ImageButtonTitle', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | null> | null } | null> | null } | { __typename: 'PricingSection', _id?: string | null, _type?: string | null, _key?: string | null, mainTitle?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, pricingSection?: { __typename?: 'Pricing', _key?: string | null, _type?: string | null, planNavigation?: string | null, plans?: Array<{ __typename?: 'Plan', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null, plan_name?: string | null, plan_services?: Array<string | null> | null, plan_services_template?: { __typename?: 'PlanServicesTemplate', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, plan_services?: Array<string | null> | null } | null, packages?: Array<{ __typename?: 'Package', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null, package_title?: string | null, package_price_value?: string | null, package_price?: string | null, package_duration?: string | null, package_summary?: Array<string | null> | null, popularity?: boolean | null, package_details?: Array<{ __typename?: 'ComparisionField', _key?: string | null, _type?: string | null, name?: string | null, type?: string | null, isDivider?: boolean | null, string?: string | null, boolean_value?: boolean | null, slider_value?: number | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, string_with_boolean?: { __typename?: 'StringWithBoolean', _key?: string | null, _type?: string | null, title?: string | null, boolean?: boolean | null } | null, string_with_icon?: { __typename?: 'StringWithIcon', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null } | null> | null } | null> | null } | null> | null, planDiscussButton?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | null } | { __typename: 'ReviewsSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, textWithImage?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, descriptionRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | { __typename: 'RichTextIconSideImageSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitleOption?: boolean | null, iconTitleDirection?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, developmentIconTitle?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'RichTextImageButtonSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | { __typename: 'RichTextWithSideImage', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, useRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'ServiceDevelopmentSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, developmentCard?: Array<{ __typename?: 'DevelopmentCard', _key?: string | null, _type?: string | null, developmentCardRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'ServiceOurProcessSection', _key?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, pointerImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'ServiceShortTestimonialSection' } | { __typename: 'SolutionSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, solutionDetails?: Array<{ __typename?: 'SolutionDetails', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | null> | null } | { __typename: 'TeamPhotosSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'TechStackSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, tabItem?: Array<{ __typename?: 'TabItem', _key?: string | null, _type?: string | null, title?: string | null, appIconLinkItem?: Array<{ __typename?: 'AppIconLinkItem', _key?: string | null, _type?: string | null, title?: string | null, appLink?: string | null, appImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null } | { __typename: 'TestimonialsSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, testimonialsCard?: Array<{ __typename?: 'TestimonialsCard', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, profileName?: string | null, profileDetail?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | null> | null } | { __typename: 'Thankyou' } | { __typename: 'ThemesSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, themesImage?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | { __typename: 'TitleDescriptionArrayWithSideTitleArraySection', _key?: string | null, _type?: string | null, title?: string | null, sideTitleArray?: Array<string | null> | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, TitleDescription?: Array<{ __typename?: 'ImageTitleDescriptionDetails', _key?: string | null, _type?: string | null, title?: string | null, sideTitle?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, descriptionDetailsRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'TitleDescriptionSideBySideBGImageSection', _key?: string | null, _type?: string | null, title?: string | null, bgImageOption?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'TitleHoverImageSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null } | { __typename: 'TitleSubtitleImageArraySideRichTextSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, companiesLogoImage?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, sideRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'TitleSubtitleTitleArraySection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleArray?: Array<string | null> | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null } | { __typename: 'TitleSubtitleWithImageArraySection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, imageArray?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | { __typename: 'TitleWithFourImageSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, fourImage?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | { __typename: 'TitleWithSliderImageSection', _key?: string | null, _type?: string | null, ifCenterImage?: boolean | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, imageTitle?: Array<{ __typename?: 'ImageTitle', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'Titledescfullimagesection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'UiUxDevelopmentSection' } | { __typename: 'WoocommerceBenefitSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, benefitImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, woocommercebenefitRichText?: Array<{ __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null> | null } | { __typename: 'WorkSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, workImage?: Array<{ __typename?: 'ImageBackground', _key?: string | null, _type?: string | null, backgroundColor?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null, footer?: { __typename?: 'Footer', _id?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, phoneNo?: string | null, email?: string | null, address?: string | null, footerbar?: string | null, sectionTheme?: string | null, footerNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, footerLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, footerTitleLinkList?: Array<{ __typename?: 'FooterTitleLinkList', _key?: string | null, _type?: string | null, title?: string | null, linkList?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null> | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null, seo?: { __typename?: 'Seo', _key?: string | null, _type?: string | null, meta_title?: string | null, noFollow?: boolean | null, noIndex?: boolean | null, meta_tags?: Array<{ __typename?: 'MetaTag', _key?: string | null, _type?: string | null, meta_attributes?: Array<{ __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null } | null };

export type AppIconLinkItemFragment = { __typename?: 'AppIconLinkItem', _key?: string | null, _type?: string | null, title?: string | null, appLink?: string | null, appImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type AuthorCardSectionFragment = { __typename?: 'AuthorCardSection', _key?: string | null, _type?: string | null, title?: string | null, authorPosition?: string | null, authorName?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, authorCardAppLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type AuthorDetailsFragment = { __typename?: 'AuthorDetails', _id?: string | null, _type?: string | null, _key?: string | null, authorTitle?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type AuthorQouteFragment = { __typename?: 'AuthorQoute', _key?: string | null, _type?: string | null, description?: string | null, authorName?: string | null };

export type BlogFragment = { __typename?: 'Blog', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, header?: { __typename?: 'Header', _id?: string | null, title?: string | null, sectionTheme?: string | null, toggleNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, navItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null, hero?: { __typename?: 'BlogHeroSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, reviewsSection?: { __typename?: 'ReviewsSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, textWithImage?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, descriptionRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, footer?: { __typename?: 'Footer', _id?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, phoneNo?: string | null, email?: string | null, address?: string | null, footerbar?: string | null, sectionTheme?: string | null, footerNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, footerLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, footerTitleLinkList?: Array<{ __typename?: 'FooterTitleLinkList', _key?: string | null, _type?: string | null, title?: string | null, linkList?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null> | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null, seo?: { __typename?: 'Seo', _key?: string | null, _type?: string | null, meta_title?: string | null, noFollow?: boolean | null, noIndex?: boolean | null, meta_tags?: Array<{ __typename?: 'MetaTag', _key?: string | null, _type?: string | null, meta_attributes?: Array<{ __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null } | null };

export type BlogHeroSectionFragment = { __typename?: 'BlogHeroSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type BlogInnerFragment = { __typename?: 'BlogInner', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, publishDate?: any | null, sideContentCard?: string | null, header?: { __typename?: 'Header', _id?: string | null, title?: string | null, sectionTheme?: string | null, toggleNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, navItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null, featuredImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, content?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, reviewsSection?: { __typename?: 'ReviewsSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, textWithImage?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, descriptionRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, category?: Array<{ __typename?: 'Category', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null } | null> | null, authorDetails?: { __typename?: 'AuthorDetails', _id?: string | null, _type?: string | null, _key?: string | null, authorTitle?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null, footer?: { __typename?: 'Footer', _id?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, phoneNo?: string | null, email?: string | null, address?: string | null, footerbar?: string | null, sectionTheme?: string | null, footerNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, footerLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, footerTitleLinkList?: Array<{ __typename?: 'FooterTitleLinkList', _key?: string | null, _type?: string | null, title?: string | null, linkList?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null> | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null, seo?: { __typename?: 'Seo', _key?: string | null, _type?: string | null, meta_title?: string | null, noFollow?: boolean | null, noIndex?: boolean | null, meta_tags?: Array<{ __typename?: 'MetaTag', _key?: string | null, _type?: string | null, meta_attributes?: Array<{ __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null } | null };

export type BlogInnerSideContentFragment = { __typename?: 'BlogInnerSideContent', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, TitleAppLogo?: { __typename?: 'SideAppLogoSection', _key?: string | null, _type?: string | null, title?: string | null, appLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null, newsLetter?: { __typename?: 'NewsLetterSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, description?: string | null, sectionTheme?: string | null } | null, slug?: { __typename?: 'Slug', _key?: string | null } | null };

export type BlogPostCardFragment = { __typename?: 'BlogInner', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, publishDate?: any | null, featuredImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, authorDetails?: { __typename?: 'AuthorDetails', _id?: string | null, _type?: string | null, _key?: string | null, authorTitle?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null };

export type ButtonFragment = { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null };

export type CategoryFragment = { __typename?: 'Category', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null };

export type ChooseChSectionFragment = { __typename?: 'ChooseCHSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, appIconImage?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type CompaniesLogoTitleArrayFragment = { __typename?: 'CompaniesLogoTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type CompanyInfoSectionFragment = { __typename?: 'CompanyInfoSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, numberTitle?: Array<{ __typename?: 'NumberTitle', _key?: string | null, _type?: string | null, number?: number | null, title?: string | null, addOn?: boolean | null } | null> | null, imageArray?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, appIconImage?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type CompanyVisionsectionFragment = { __typename?: 'CompanyVisionsection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, missionVisionCard?: Array<{ __typename?: 'ImageRichTextCardSection', _key?: string | null, _type?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null, companyVisionFeatures?: Array<{ __typename?: 'ServicesDetails', _key?: string | null, _type?: string | null, heading?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null };

export type ComparisionFieldFragment = { __typename?: 'ComparisionField', _key?: string | null, _type?: string | null, name?: string | null, type?: string | null, isDivider?: boolean | null, string?: string | null, boolean_value?: boolean | null, slider_value?: number | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, string_with_boolean?: { __typename?: 'StringWithBoolean', _key?: string | null, _type?: string | null, title?: string | null, boolean?: boolean | null } | null, string_with_icon?: { __typename?: 'StringWithIcon', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null };

export type ContactHeroSectionFragment = { __typename?: 'ContactHeroSection', _key?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type ContactInformationSectionFragment = { __typename?: 'ContactInformationSection', _key?: string | null, _type?: string | null, title?: string | null, email?: string | null, phoneNo?: string | null, sectionTheme?: string | null, officeAddress?: { __typename?: 'OfficeAddress', _key?: string | null, _type?: string | null, addressTitle?: string | null, addressDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, directions?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, officeTime?: { __typename?: 'OfficeTime', _key?: string | null, _type?: string | null, timeTitle?: string | null, timeDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, contactUsCard?: Array<{ __typename?: 'ImageRichTextCardSection', _key?: string | null, _type?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null };

export type ContactMapSectionFragment = { __typename?: 'ContactMapSection', _key?: string | null, _type?: string | null, mapImage?: string | null, sectionTheme?: string | null };

export type ContactMessageImageFragment = { __typename?: 'ContactMessageImage', _key?: string | null, _type?: string | null, contactMessageMainImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, contactMessageImageTitleSubtitleArray?: Array<{ __typename?: 'ImagetitleSubtitleArray', _key?: string | null, _type?: string | null, titleArray?: string | null, subtitleArray?: string | null, arrowImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type ContactMessageSectionFragment = { __typename?: 'ContactMessageSection', _key?: string | null, _type?: string | null, title?: string | null, sevicesTitle?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, servicesButtonArray?: Array<{ __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null> | null, messageImage?: { __typename?: 'ContactMessageImage', _key?: string | null, _type?: string | null, contactMessageMainImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, contactMessageImageTitleSubtitleArray?: Array<{ __typename?: 'ImagetitleSubtitleArray', _key?: string | null, _type?: string | null, titleArray?: string | null, subtitleArray?: string | null, arrowImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null };

export type DevelopmentCardFragment = { __typename?: 'DevelopmentCard', _key?: string | null, _type?: string | null, developmentCardRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type EstimateProjectFormSectionFragment = { __typename?: 'EstimateProjectFormSection', _key?: string | null, _type?: string | null, namePlaceholder?: string | null, emailPlaceholder?: string | null, selectTypeOfProject?: string | null, selectTypeButton?: Array<string | null> | null, sectionTheme?: string | null, textPlaceholder?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type FaqSectionFragment = { __typename?: 'FAQSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTitle?: string | null, titleButtonWithBG?: boolean | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, sideContentWithQueAns?: Array<{ __typename?: 'SideContentWithQueAns', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, questionAndAnswer?: Array<{ __typename?: 'QuestionAndAnswer', _key?: string | null, _type?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | null> | null, titleButton?: { __typename?: 'TitleButton', _key?: string | null, _type?: string | null, title?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | null };

export type FooterFragment = { __typename?: 'Footer', _id?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, phoneNo?: string | null, email?: string | null, address?: string | null, footerbar?: string | null, sectionTheme?: string | null, footerNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, footerLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, footerTitleLinkList?: Array<{ __typename?: 'FooterTitleLinkList', _key?: string | null, _type?: string | null, title?: string | null, linkList?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null> | null };

export type FooterLogoFragment = { __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type FooterTitleLinkListFragment = { __typename?: 'FooterTitleLinkList', _key?: string | null, _type?: string | null, title?: string | null, linkList?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null };

export type FourOFourErrorSectionFragment = { __typename?: 'FourOFourErrorSection', _key?: string | null, _type?: string | null, errorTitle?: string | null, errorDescription?: string | null, sectionTheme?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type HeaderFragment = { __typename?: 'Header', _id?: string | null, title?: string | null, sectionTheme?: string | null, toggleNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, navItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null };

export type HeroSectionFragment = { __typename?: 'HeroSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type HireDedicatedPageTypesFragment = { __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null };

export type HiringModelDetailsFragment = { __typename?: 'HiringModelDetails', _key?: string | null, _type?: string | null, modelDetailsTitle?: string | null, modelDetailsDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type HiringModelSectionFragment = { __typename?: 'HiringModelSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, hiringModelDetails?: Array<{ __typename?: 'HiringModelDetails', _key?: string | null, _type?: string | null, modelDetailsTitle?: string | null, modelDetailsDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type HomeFragment = { __typename?: 'Home', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sub_title?: string | null, header?: { __typename?: 'Header', _id?: string | null, title?: string | null, sectionTheme?: string | null, toggleNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, navItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null, footer?: { __typename?: 'Footer', _id?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, phoneNo?: string | null, email?: string | null, address?: string | null, footerbar?: string | null, sectionTheme?: string | null, footerNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, footerLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, footerTitleLinkList?: Array<{ __typename?: 'FooterTitleLinkList', _key?: string | null, _type?: string | null, title?: string | null, linkList?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null> | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null, seo?: { __typename?: 'Seo', _key?: string | null, _type?: string | null, meta_title?: string | null, noFollow?: boolean | null, noIndex?: boolean | null, meta_tags?: Array<{ __typename?: 'MetaTag', _key?: string | null, _type?: string | null, meta_attributes?: Array<{ __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null } | null, sections?: Array<{ __typename: 'ChooseCHSection' } | { __typename: 'CompanyInfoSection' } | { __typename: 'FAQSection' } | { __typename: 'HiringModelSection' } | { __typename: 'HomeAboutUsSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, aboutDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'HomeBlogSection', _key?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | { __typename: 'HomeContactUsSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, contactDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'HomeHeroSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, mainTitle?: string | null, mainTitleArray?: Array<string | null> | null, subTitle?: string | null, title?: string | null, description?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | { __typename: 'HomeOurProsSection', _key?: string | null, _type?: string | null, sectionTitle?: string | null, title?: string | null, subTitle?: string | null, sectionTheme?: string | null, descriptionRaw?: any | null } | { __typename: 'HomeServicesSection', _key?: string | null, _type?: string | null, withoutNumber?: boolean | null, serviceDetailsColumn?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, servicesDetails?: Array<{ __typename?: 'ServicesDetails', _key?: string | null, _type?: string | null, heading?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'HomeVideoSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, video?: { __typename?: 'File', _key?: string | null, _type?: string | null, asset?: { __typename?: 'SanityFileAsset', path?: string | null, url?: string | null } | null } | null } | { __typename: 'ImageWithTitleSection', _key?: string | null, _type?: string | null, title?: string | null, iszigzagslider?: boolean | null, sectionTheme?: string | null, imageWithTitleArray?: Array<{ __typename?: 'ImageWithTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'JamstackCTESection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, description?: string | null, jamStackserviceList?: Array<{ __typename?: 'JamstackCTEServiceList', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'NewsLetterSection' } | { __typename: 'OurProcessSection' } | { __typename: 'PricingSection' } | { __typename: 'ReviewsSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, textWithImage?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, descriptionRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'SolutionSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, solutionDetails?: Array<{ __typename?: 'SolutionDetails', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | null> | null } | { __typename: 'TechStackSection' } | { __typename: 'TestimonialsSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, testimonialsCard?: Array<{ __typename?: 'TestimonialsCard', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, profileName?: string | null, profileDetail?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | null> | null } | { __typename: 'TitleHoverImageSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null } | { __typename: 'TitleWithFourImageSection' } | { __typename: 'WorkSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, workImage?: Array<{ __typename?: 'ImageBackground', _key?: string | null, _type?: string | null, backgroundColor?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null };

export type HomeAboutUsSectionFragment = { __typename?: 'HomeAboutUsSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, aboutDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type HomeBlogInnerFragment = { __typename?: 'BlogInner', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, publishDate?: any | null, featuredImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, authorDetails?: { __typename?: 'AuthorDetails', _id?: string | null, _type?: string | null, _key?: string | null, authorTitle?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null };

export type HomeBlogSectionFragment = { __typename?: 'HomeBlogSection', _key?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null };

export type HomeContactUsSectionFragment = { __typename?: 'HomeContactUsSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, contactDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type HomeHeroSectionFragment = { __typename?: 'HomeHeroSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, mainTitle?: string | null, mainTitleArray?: Array<string | null> | null, subTitle?: string | null, title?: string | null, description?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null };

export type HomeNavServicesFragment = { __typename?: 'AllPage', _id?: string | null, _type?: string | null, _key?: string | null, _createdAt?: any | null, service_page?: boolean | null, hire_dedicated_page?: boolean | null, title?: string | null, service_types?: { __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, hire_dedicated_page_types?: { __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null };

export type HomeOurProsSectionFragment = { __typename?: 'HomeOurProsSection', _key?: string | null, _type?: string | null, sectionTitle?: string | null, title?: string | null, subTitle?: string | null, sectionTheme?: string | null, descriptionRaw?: any | null };

export type HomeServicesSectionFragment = { __typename?: 'HomeServicesSection', _key?: string | null, _type?: string | null, withoutNumber?: boolean | null, serviceDetailsColumn?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, servicesDetails?: Array<{ __typename?: 'ServicesDetails', _key?: string | null, _type?: string | null, heading?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null };

export type HomeVideoSectionFragment = { __typename?: 'HomeVideoSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, video?: { __typename?: 'File', _key?: string | null, _type?: string | null, asset?: { __typename?: 'SanityFileAsset', path?: string | null, url?: string | null } | null } | null };

export type HourlyDeveloperSectionFragment = { __typename?: 'HourlyDeveloperSection', _key?: string | null, _type?: string | null, price?: string | null, desc?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, price_section?: { __typename?: 'TitleDescription', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null };

export type IconTitleArrayFragment = { __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type ImageFragment = { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null };

export type ImageArraySectionFragment = { __typename?: 'ImageArraySection', _key?: string | null, _type?: string | null, title?: string | null, isBigger?: boolean | null, sectionTheme?: string | null, imageArray?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null };

export type ImageBackgroundFragment = { __typename?: 'ImageBackground', _key?: string | null, _type?: string | null, backgroundColor?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type ImageButtonTitleFragment = { __typename?: 'ImageButtonTitle', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null };

export type ImageRichTextCardSectionFragment = { __typename?: 'ImageRichTextCardSection', _key?: string | null, _type?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type ImageSideBySideTitleDescArraySectionFragment = { __typename?: 'ImageSideBySideTitleDescArraySection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, titleDescriptionArray?: Array<{ __typename?: 'TitleDescription', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null };

export type ImageTitleFragment = { __typename?: 'ImageTitle', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type ImageTitleDescriptionDetailsFragment = { __typename?: 'ImageTitleDescriptionDetails', _key?: string | null, _type?: string | null, title?: string | null, sideTitle?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, descriptionDetailsRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type ImageTitleDescriptionSectionFragment = { __typename?: 'ImageTitleDescriptionSection', _key?: string | null, _type?: string | null, sliderOption?: string | null, sectionTheme?: string | null, widthOption?: string | null, borderOption?: string | null, imageOption?: string | null, columns?: string | null, align?: string | null, ourApproach?: boolean | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, details?: Array<{ __typename?: 'ImageTitleDescriptionDetails', _key?: string | null, _type?: string | null, title?: string | null, sideTitle?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, descriptionDetailsRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null };

export type ImageWithTitleArrayFragment = { __typename?: 'ImageWithTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type ImageWithTitleSectionFragment = { __typename?: 'ImageWithTitleSection', _key?: string | null, _type?: string | null, title?: string | null, iszigzagslider?: boolean | null, sectionTheme?: string | null, imageWithTitleArray?: Array<{ __typename?: 'ImageWithTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type ImagetitleSubtitleArrayFragment = { __typename?: 'ImagetitleSubtitleArray', _key?: string | null, _type?: string | null, titleArray?: string | null, subtitleArray?: string | null, arrowImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type JamstackCteSectionFragment = { __typename?: 'JamstackCTESection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, description?: string | null, jamStackserviceList?: Array<{ __typename?: 'JamstackCTEServiceList', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type JamstackCteServiceListFragment = { __typename?: 'JamstackCTEServiceList', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type JamstackResourceSectionFragment = { __typename?: 'JamstackResourceSection', _key?: string | null, _type?: string | null, title?: string | null, resourceDetailCard?: Array<{ __typename?: 'ResourceDetailCard', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null };

export type LinkFragment = { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null };

export type MetaAttributeFragment = { __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type MetaTagFragment = { __typename?: 'MetaTag', _key?: string | null, _type?: string | null, meta_attributes?: Array<{ __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type NavbarLinksFragment = { __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null };

export type NewsLetterSectionFragment = { __typename?: 'NewsLetterSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, description?: string | null, sectionTheme?: string | null };

export type NextJsuSeCompaniesSectionFragment = { __typename?: 'NextJSUSeCompaniesSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, companiesLogoTitleArray?: Array<{ __typename?: 'CompaniesLogoTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type NumberTitleFragment = { __typename?: 'NumberTitle', _key?: string | null, _type?: string | null, number?: number | null, title?: string | null, addOn?: boolean | null };

export type OfficeAddressFragment = { __typename?: 'OfficeAddress', _key?: string | null, _type?: string | null, addressTitle?: string | null, addressDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, directions?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null };

export type OfficeTimeFragment = { __typename?: 'OfficeTime', _key?: string | null, _type?: string | null, timeTitle?: string | null, timeDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type OurProcessSectionFragment = { __typename?: 'OurProcessSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, ourProcessAppIconImage?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type PackageFragment = { __typename?: 'Package', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null, package_title?: string | null, package_price_value?: string | null, package_price?: string | null, package_duration?: string | null, package_summary?: Array<string | null> | null, popularity?: boolean | null, package_details?: Array<{ __typename?: 'ComparisionField', _key?: string | null, _type?: string | null, name?: string | null, type?: string | null, isDivider?: boolean | null, string?: string | null, boolean_value?: boolean | null, slider_value?: number | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, string_with_boolean?: { __typename?: 'StringWithBoolean', _key?: string | null, _type?: string | null, title?: string | null, boolean?: boolean | null } | null, string_with_icon?: { __typename?: 'StringWithIcon', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null } | null> | null };

export type PlanFragment = { __typename?: 'Plan', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null, plan_name?: string | null, plan_services?: Array<string | null> | null, plan_services_template?: { __typename?: 'PlanServicesTemplate', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, plan_services?: Array<string | null> | null } | null, packages?: Array<{ __typename?: 'Package', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null, package_title?: string | null, package_price_value?: string | null, package_price?: string | null, package_duration?: string | null, package_summary?: Array<string | null> | null, popularity?: boolean | null, package_details?: Array<{ __typename?: 'ComparisionField', _key?: string | null, _type?: string | null, name?: string | null, type?: string | null, isDivider?: boolean | null, string?: string | null, boolean_value?: boolean | null, slider_value?: number | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, string_with_boolean?: { __typename?: 'StringWithBoolean', _key?: string | null, _type?: string | null, title?: string | null, boolean?: boolean | null } | null, string_with_icon?: { __typename?: 'StringWithIcon', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null } | null> | null } | null> | null };

export type PlanServicesTemplateFragment = { __typename?: 'PlanServicesTemplate', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, plan_services?: Array<string | null> | null };

export type PortfolioInnerDevelopmentSectionFragment = { __typename?: 'PortfolioInnerDevelopmentSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, titleImageButton?: Array<{ __typename?: 'DevelopmentArray', _key?: string | null, _type?: string | null, title?: string | null, imageButtonTitle?: Array<{ __typename?: 'ImageButtonTitle', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | null> | null } | null> | null };

export type PricingFragment = { __typename?: 'Pricing', _key?: string | null, _type?: string | null, planNavigation?: string | null, plans?: Array<{ __typename?: 'Plan', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null, plan_name?: string | null, plan_services?: Array<string | null> | null, plan_services_template?: { __typename?: 'PlanServicesTemplate', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, plan_services?: Array<string | null> | null } | null, packages?: Array<{ __typename?: 'Package', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null, package_title?: string | null, package_price_value?: string | null, package_price?: string | null, package_duration?: string | null, package_summary?: Array<string | null> | null, popularity?: boolean | null, package_details?: Array<{ __typename?: 'ComparisionField', _key?: string | null, _type?: string | null, name?: string | null, type?: string | null, isDivider?: boolean | null, string?: string | null, boolean_value?: boolean | null, slider_value?: number | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, string_with_boolean?: { __typename?: 'StringWithBoolean', _key?: string | null, _type?: string | null, title?: string | null, boolean?: boolean | null } | null, string_with_icon?: { __typename?: 'StringWithIcon', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null } | null> | null } | null> | null } | null> | null, planDiscussButton?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null };

export type PricingSectionFragment = { __typename?: 'PricingSection', _id?: string | null, _type?: string | null, _key?: string | null, mainTitle?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, pricingSection?: { __typename?: 'Pricing', _key?: string | null, _type?: string | null, planNavigation?: string | null, plans?: Array<{ __typename?: 'Plan', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null, plan_name?: string | null, plan_services?: Array<string | null> | null, plan_services_template?: { __typename?: 'PlanServicesTemplate', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, plan_services?: Array<string | null> | null } | null, packages?: Array<{ __typename?: 'Package', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null, package_title?: string | null, package_price_value?: string | null, package_price?: string | null, package_duration?: string | null, package_summary?: Array<string | null> | null, popularity?: boolean | null, package_details?: Array<{ __typename?: 'ComparisionField', _key?: string | null, _type?: string | null, name?: string | null, type?: string | null, isDivider?: boolean | null, string?: string | null, boolean_value?: boolean | null, slider_value?: number | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, string_with_boolean?: { __typename?: 'StringWithBoolean', _key?: string | null, _type?: string | null, title?: string | null, boolean?: boolean | null } | null, string_with_icon?: { __typename?: 'StringWithIcon', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null } | null> | null } | null> | null } | null> | null, planDiscussButton?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | null };

export type QuestionAndAnswerFragment = { __typename?: 'QuestionAndAnswer', _key?: string | null, _type?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type ResourceDetailCardFragment = { __typename?: 'ResourceDetailCard', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type ReviewsSectionFragment = { __typename?: 'ReviewsSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, textWithImage?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, descriptionRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type RichTextFragment = { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null };

export type RichTextIconSideImageSectionFragment = { __typename?: 'RichTextIconSideImageSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitleOption?: boolean | null, iconTitleDirection?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, developmentIconTitle?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type RichTextImageButtonSectionFragment = { __typename?: 'RichTextImageButtonSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null };

export type RichTextWithSideImageFragment = { __typename?: 'RichTextWithSideImage', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, useRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type RightSymbolTitleArrayFragment = { __typename?: 'RightSymbolTitleArray', _key?: string | null, _type?: string | null, jamstackCTEServiceList?: Array<{ __typename?: 'JamstackCTEServiceList', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type SanityImageAssetFragment = { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null };

export type SeoFragment = { __typename?: 'Seo', _key?: string | null, _type?: string | null, meta_title?: string | null, noFollow?: boolean | null, noIndex?: boolean | null, meta_tags?: Array<{ __typename?: 'MetaTag', _key?: string | null, _type?: string | null, meta_attributes?: Array<{ __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null };

export type ServiceDevelopmentSectionFragment = { __typename?: 'ServiceDevelopmentSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, developmentCard?: Array<{ __typename?: 'DevelopmentCard', _key?: string | null, _type?: string | null, developmentCardRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type ServiceOurProcessSectionFragment = { __typename?: 'ServiceOurProcessSection', _key?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, pointerImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type ServiceTypeFragment = { __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null };

export type ServicesDetailsFragment = { __typename?: 'ServicesDetails', _key?: string | null, _type?: string | null, heading?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type SideAppLogoSectionFragment = { __typename?: 'SideAppLogoSection', _key?: string | null, _type?: string | null, title?: string | null, appLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type SideContentWithQueAnsFragment = { __typename?: 'SideContentWithQueAns', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, questionAndAnswer?: Array<{ __typename?: 'QuestionAndAnswer', _key?: string | null, _type?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null };

export type SlugFragment = { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null };

export type SolutionDetailsFragment = { __typename?: 'SolutionDetails', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null };

export type SolutionSectionFragment = { __typename?: 'SolutionSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, solutionDetails?: Array<{ __typename?: 'SolutionDetails', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | null> | null };

export type StringWithBooleanFragment = { __typename?: 'StringWithBoolean', _key?: string | null, _type?: string | null, title?: string | null, boolean?: boolean | null };

export type StringWithIconFragment = { __typename?: 'StringWithIcon', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type TabItemFragment = { __typename?: 'TabItem', _key?: string | null, _type?: string | null, title?: string | null, appIconLinkItem?: Array<{ __typename?: 'AppIconLinkItem', _key?: string | null, _type?: string | null, title?: string | null, appLink?: string | null, appImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type TeamPhotosSectionFragment = { __typename?: 'TeamPhotosSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type TechStackSectionFragment = { __typename?: 'TechStackSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, tabItem?: Array<{ __typename?: 'TabItem', _key?: string | null, _type?: string | null, title?: string | null, appIconLinkItem?: Array<{ __typename?: 'AppIconLinkItem', _key?: string | null, _type?: string | null, title?: string | null, appLink?: string | null, appImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null };

export type TestimonialsCardFragment = { __typename?: 'TestimonialsCard', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, profileName?: string | null, profileDetail?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null };

export type TestimonialsSectionFragment = { __typename?: 'TestimonialsSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, testimonialsCard?: Array<{ __typename?: 'TestimonialsCard', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, profileName?: string | null, profileDetail?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | null> | null };

export type ThankyouFragment = { __typename?: 'Thankyou', _key?: string | null, _type?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type ThemesSectionFragment = { __typename?: 'ThemesSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, themesImage?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null };

export type TitleButtonFragment = { __typename?: 'TitleButton', _key?: string | null, _type?: string | null, title?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null };

export type TitleContentFragment = { __typename?: 'TitleContent', _key?: string | null, _type?: string | null, title?: string | null, content?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type TitleDescriptionFragment = { __typename?: 'TitleDescription', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type TitleDescriptionArrayWithSideTitleArraySectionFragment = { __typename?: 'TitleDescriptionArrayWithSideTitleArraySection', _key?: string | null, _type?: string | null, title?: string | null, sideTitleArray?: Array<string | null> | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, TitleDescription?: Array<{ __typename?: 'ImageTitleDescriptionDetails', _key?: string | null, _type?: string | null, title?: string | null, sideTitle?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, descriptionDetailsRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null };

export type TitleDescriptionSideBySideBgImageSectionFragment = { __typename?: 'TitleDescriptionSideBySideBGImageSection', _key?: string | null, _type?: string | null, title?: string | null, bgImageOption?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type TitleHoverImageSectionFragment = { __typename?: 'TitleHoverImageSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null };

export type TitleImageButtonFragment = { __typename?: 'DevelopmentArray', _key?: string | null, _type?: string | null, title?: string | null, imageButtonTitle?: Array<{ __typename?: 'ImageButtonTitle', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | null> | null };

export type TitleSubtitleFragment = { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type TitleSubtitleImageArraySideRichTextSectionFragment = { __typename?: 'TitleSubtitleImageArraySideRichTextSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, companiesLogoImage?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, sideRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null };

export type TitleSubtitleTitleArraySectionFragment = { __typename?: 'TitleSubtitleTitleArraySection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleArray?: Array<string | null> | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null };

export type TitleSubtitleWithImageArraySectionFragment = { __typename?: 'TitleSubtitleWithImageArraySection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, imageArray?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null };

export type TitleWithFourImageSectionFragment = { __typename?: 'TitleWithFourImageSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, fourImage?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null };

export type TitleWithSliderImageSectionFragment = { __typename?: 'TitleWithSliderImageSection', _key?: string | null, _type?: string | null, ifCenterImage?: boolean | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, imageTitle?: Array<{ __typename?: 'ImageTitle', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type TitledescfullimagesectionFragment = { __typename?: 'Titledescfullimagesection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null };

export type UiUxDevelopmentSectionFragment = { __typename?: 'UiUxDevelopmentSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, uiUxImage?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, appIconImage?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type WoocommerceBenefitSectionFragment = { __typename?: 'WoocommerceBenefitSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, benefitImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, woocommercebenefitRichText?: Array<{ __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null> | null };

export type WorkSectionFragment = { __typename?: 'WorkSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, workImage?: Array<{ __typename?: 'ImageBackground', _key?: string | null, _type?: string | null, backgroundColor?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null };

export type GetAllPageQueryVariables = Exact<{
  filter?: InputMaybe<AllPageFilter>;
}>;


export type GetAllPageQuery = { __typename?: 'RootQuery', allAllPage: Array<{ __typename?: 'AllPage', _id?: string | null, _type?: string | null, _key?: string | null, _createdAt?: any | null, service_page?: boolean | null, hire_dedicated_page?: boolean | null, title?: string | null, service_types?: { __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, hire_dedicated_page_types?: { __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, header?: { __typename?: 'Header', _id?: string | null, title?: string | null, sectionTheme?: string | null, toggleNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, navItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null, sections?: Array<{ __typename: 'ChooseCHSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, appIconImage?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'CompanyInfoSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, numberTitle?: Array<{ __typename?: 'NumberTitle', _key?: string | null, _type?: string | null, number?: number | null, title?: string | null, addOn?: boolean | null } | null> | null, imageArray?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, appIconImage?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'CompanyVisionsection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, missionVisionCard?: Array<{ __typename?: 'ImageRichTextCardSection', _key?: string | null, _type?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null, companyVisionFeatures?: Array<{ __typename?: 'ServicesDetails', _key?: string | null, _type?: string | null, heading?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'ContactHeroSection', _key?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'ContactInformationSection', _key?: string | null, _type?: string | null, title?: string | null, email?: string | null, phoneNo?: string | null, sectionTheme?: string | null, officeAddress?: { __typename?: 'OfficeAddress', _key?: string | null, _type?: string | null, addressTitle?: string | null, addressDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, directions?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, officeTime?: { __typename?: 'OfficeTime', _key?: string | null, _type?: string | null, timeTitle?: string | null, timeDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, contactUsCard?: Array<{ __typename?: 'ImageRichTextCardSection', _key?: string | null, _type?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'ContactMapSection', _key?: string | null, _type?: string | null, mapImage?: string | null, sectionTheme?: string | null } | { __typename: 'ContactMessageSection', _key?: string | null, _type?: string | null, title?: string | null, sevicesTitle?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, servicesButtonArray?: Array<{ __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null> | null, messageImage?: { __typename?: 'ContactMessageImage', _key?: string | null, _type?: string | null, contactMessageMainImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, contactMessageImageTitleSubtitleArray?: Array<{ __typename?: 'ImagetitleSubtitleArray', _key?: string | null, _type?: string | null, titleArray?: string | null, subtitleArray?: string | null, arrowImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null } | { __typename: 'EstimateProjectFormSection', _key?: string | null, _type?: string | null, namePlaceholder?: string | null, emailPlaceholder?: string | null, selectTypeOfProject?: string | null, selectTypeButton?: Array<string | null> | null, sectionTheme?: string | null, textPlaceholder?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'FAQSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTitle?: string | null, titleButtonWithBG?: boolean | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, sideContentWithQueAns?: Array<{ __typename?: 'SideContentWithQueAns', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, questionAndAnswer?: Array<{ __typename?: 'QuestionAndAnswer', _key?: string | null, _type?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | null> | null, titleButton?: { __typename?: 'TitleButton', _key?: string | null, _type?: string | null, title?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | null } | { __typename: 'FourOFourErrorSection', _key?: string | null, _type?: string | null, errorTitle?: string | null, errorDescription?: string | null, sectionTheme?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'HeroSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'HiringModelSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, hiringModelDetails?: Array<{ __typename?: 'HiringModelDetails', _key?: string | null, _type?: string | null, modelDetailsTitle?: string | null, modelDetailsDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'HomeServicesSection', _key?: string | null, _type?: string | null, withoutNumber?: boolean | null, serviceDetailsColumn?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, servicesDetails?: Array<{ __typename?: 'ServicesDetails', _key?: string | null, _type?: string | null, heading?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'HourlyDeveloperSection', _key?: string | null, _type?: string | null, price?: string | null, desc?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, price_section?: { __typename?: 'TitleDescription', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | { __typename: 'ImageArraySection', _key?: string | null, _type?: string | null, title?: string | null, isBigger?: boolean | null, sectionTheme?: string | null, imageArray?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | { __typename: 'ImageRichTextCardSection' } | { __typename: 'ImageSideBySideTitleDescArraySection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, titleDescriptionArray?: Array<{ __typename?: 'TitleDescription', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'ImageTitleDescriptionSection', _key?: string | null, _type?: string | null, sliderOption?: string | null, sectionTheme?: string | null, widthOption?: string | null, borderOption?: string | null, imageOption?: string | null, columns?: string | null, align?: string | null, ourApproach?: boolean | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, details?: Array<{ __typename?: 'ImageTitleDescriptionDetails', _key?: string | null, _type?: string | null, title?: string | null, sideTitle?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, descriptionDetailsRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'ImageWithTitleSection', _key?: string | null, _type?: string | null, title?: string | null, iszigzagslider?: boolean | null, sectionTheme?: string | null, imageWithTitleArray?: Array<{ __typename?: 'ImageWithTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'JamstackCTESection' } | { __typename: 'NewsLetterSection' } | { __typename: 'NextJSUSeCompaniesSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, companiesLogoTitleArray?: Array<{ __typename?: 'CompaniesLogoTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'OurApproachSection' } | { __typename: 'OurProcessSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, ourProcessAppIconImage?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'PortfolioInnerDevelopmentSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, titleImageButton?: Array<{ __typename?: 'DevelopmentArray', _key?: string | null, _type?: string | null, title?: string | null, imageButtonTitle?: Array<{ __typename?: 'ImageButtonTitle', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | null> | null } | null> | null } | { __typename: 'PricingSection', _id?: string | null, _type?: string | null, _key?: string | null, mainTitle?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, pricingSection?: { __typename?: 'Pricing', _key?: string | null, _type?: string | null, planNavigation?: string | null, plans?: Array<{ __typename?: 'Plan', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null, plan_name?: string | null, plan_services?: Array<string | null> | null, plan_services_template?: { __typename?: 'PlanServicesTemplate', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, plan_services?: Array<string | null> | null } | null, packages?: Array<{ __typename?: 'Package', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null, package_title?: string | null, package_price_value?: string | null, package_price?: string | null, package_duration?: string | null, package_summary?: Array<string | null> | null, popularity?: boolean | null, package_details?: Array<{ __typename?: 'ComparisionField', _key?: string | null, _type?: string | null, name?: string | null, type?: string | null, isDivider?: boolean | null, string?: string | null, boolean_value?: boolean | null, slider_value?: number | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, string_with_boolean?: { __typename?: 'StringWithBoolean', _key?: string | null, _type?: string | null, title?: string | null, boolean?: boolean | null } | null, string_with_icon?: { __typename?: 'StringWithIcon', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null } | null> | null } | null> | null } | null> | null, planDiscussButton?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | null } | { __typename: 'ReviewsSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, textWithImage?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, descriptionRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | { __typename: 'RichTextIconSideImageSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitleOption?: boolean | null, iconTitleDirection?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, developmentIconTitle?: Array<{ __typename?: 'IconTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'RichTextImageButtonSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | { __typename: 'RichTextWithSideImage', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, useRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'ServiceDevelopmentSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, developmentCard?: Array<{ __typename?: 'DevelopmentCard', _key?: string | null, _type?: string | null, developmentCardRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'ServiceOurProcessSection', _key?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, pointerImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'ServiceShortTestimonialSection' } | { __typename: 'SolutionSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, solutionDetails?: Array<{ __typename?: 'SolutionDetails', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | null> | null } | { __typename: 'TeamPhotosSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'TechStackSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, tabItem?: Array<{ __typename?: 'TabItem', _key?: string | null, _type?: string | null, title?: string | null, appIconLinkItem?: Array<{ __typename?: 'AppIconLinkItem', _key?: string | null, _type?: string | null, title?: string | null, appLink?: string | null, appImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null } | { __typename: 'TestimonialsSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, testimonialsCard?: Array<{ __typename?: 'TestimonialsCard', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, profileName?: string | null, profileDetail?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | null> | null } | { __typename: 'Thankyou' } | { __typename: 'ThemesSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, themesImage?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | { __typename: 'TitleDescriptionArrayWithSideTitleArraySection', _key?: string | null, _type?: string | null, title?: string | null, sideTitleArray?: Array<string | null> | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, TitleDescription?: Array<{ __typename?: 'ImageTitleDescriptionDetails', _key?: string | null, _type?: string | null, title?: string | null, sideTitle?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, descriptionDetailsRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'TitleDescriptionSideBySideBGImageSection', _key?: string | null, _type?: string | null, title?: string | null, bgImageOption?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'TitleHoverImageSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null } | { __typename: 'TitleSubtitleImageArraySideRichTextSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, companiesLogoImage?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, sideRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'TitleSubtitleTitleArraySection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleArray?: Array<string | null> | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null } | { __typename: 'TitleSubtitleWithImageArraySection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, imageArray?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | { __typename: 'TitleWithFourImageSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, fourImage?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | { __typename: 'TitleWithSliderImageSection', _key?: string | null, _type?: string | null, ifCenterImage?: boolean | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, imageTitle?: Array<{ __typename?: 'ImageTitle', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'Titledescfullimagesection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'UiUxDevelopmentSection' } | { __typename: 'WoocommerceBenefitSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, benefitImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, woocommercebenefitRichText?: Array<{ __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null> | null } | { __typename: 'WorkSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, workImage?: Array<{ __typename?: 'ImageBackground', _key?: string | null, _type?: string | null, backgroundColor?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null, footer?: { __typename?: 'Footer', _id?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, phoneNo?: string | null, email?: string | null, address?: string | null, footerbar?: string | null, sectionTheme?: string | null, footerNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, footerLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, footerTitleLinkList?: Array<{ __typename?: 'FooterTitleLinkList', _key?: string | null, _type?: string | null, title?: string | null, linkList?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null> | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null, seo?: { __typename?: 'Seo', _key?: string | null, _type?: string | null, meta_title?: string | null, noFollow?: boolean | null, noIndex?: boolean | null, meta_tags?: Array<{ __typename?: 'MetaTag', _key?: string | null, _type?: string | null, meta_attributes?: Array<{ __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null } | null }>, allServiceType: Array<{ __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null }>, allHireDedicatedPageTypes: Array<{ __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null }> };

export type GetAllPagePathQueryVariables = Exact<{
  filter?: InputMaybe<AllPageFilter>;
}>;


export type GetAllPagePathQuery = { __typename?: 'RootQuery', GetAllPagePath: Array<{ __typename?: 'AllPage', slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type GetBlogInnerPageQueryVariables = Exact<{
  filter?: InputMaybe<BlogInnerFilter>;
  limitFilter?: InputMaybe<Scalars['Int']>;
  blogFilter?: InputMaybe<BlogInnerFilter>;
  sortFilter?: InputMaybe<Array<BlogInnerSorting> | BlogInnerSorting>;
  allPageFilter?: InputMaybe<AllPageFilter>;
  blogSideContent?: InputMaybe<BlogInnerSideContentFilter>;
}>;


export type GetBlogInnerPageQuery = { __typename?: 'RootQuery', allBlogInner: Array<{ __typename?: 'BlogInner', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, publishDate?: any | null, sideContentCard?: string | null, header?: { __typename?: 'Header', _id?: string | null, title?: string | null, sectionTheme?: string | null, toggleNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, navItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null, featuredImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, content?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, reviewsSection?: { __typename?: 'ReviewsSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, textWithImage?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, descriptionRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, category?: Array<{ __typename?: 'Category', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null } | null> | null, authorDetails?: { __typename?: 'AuthorDetails', _id?: string | null, _type?: string | null, _key?: string | null, authorTitle?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null, footer?: { __typename?: 'Footer', _id?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, phoneNo?: string | null, email?: string | null, address?: string | null, footerbar?: string | null, sectionTheme?: string | null, footerNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, footerLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, footerTitleLinkList?: Array<{ __typename?: 'FooterTitleLinkList', _key?: string | null, _type?: string | null, title?: string | null, linkList?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null> | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null, seo?: { __typename?: 'Seo', _key?: string | null, _type?: string | null, meta_title?: string | null, noFollow?: boolean | null, noIndex?: boolean | null, meta_tags?: Array<{ __typename?: 'MetaTag', _key?: string | null, _type?: string | null, meta_attributes?: Array<{ __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null } | null }>, limitedBlogs: Array<{ __typename?: 'BlogInner', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, publishDate?: any | null, sideContentCard?: string | null, header?: { __typename?: 'Header', _id?: string | null, title?: string | null, sectionTheme?: string | null, toggleNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, navItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null, featuredImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, content?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, reviewsSection?: { __typename?: 'ReviewsSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, textWithImage?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, descriptionRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, category?: Array<{ __typename?: 'Category', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null } | null> | null, authorDetails?: { __typename?: 'AuthorDetails', _id?: string | null, _type?: string | null, _key?: string | null, authorTitle?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null, footer?: { __typename?: 'Footer', _id?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, phoneNo?: string | null, email?: string | null, address?: string | null, footerbar?: string | null, sectionTheme?: string | null, footerNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, footerLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, footerTitleLinkList?: Array<{ __typename?: 'FooterTitleLinkList', _key?: string | null, _type?: string | null, title?: string | null, linkList?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null> | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null, seo?: { __typename?: 'Seo', _key?: string | null, _type?: string | null, meta_title?: string | null, noFollow?: boolean | null, noIndex?: boolean | null, meta_tags?: Array<{ __typename?: 'MetaTag', _key?: string | null, _type?: string | null, meta_attributes?: Array<{ __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null } | null }>, allBlogInnerSideContent: Array<{ __typename?: 'BlogInnerSideContent', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, TitleAppLogo?: { __typename?: 'SideAppLogoSection', _key?: string | null, _type?: string | null, title?: string | null, appLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null, newsLetter?: { __typename?: 'NewsLetterSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, description?: string | null, sectionTheme?: string | null } | null, slug?: { __typename?: 'Slug', _key?: string | null } | null }>, allServiceType: Array<{ __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null }>, allHireDedicatedPageTypes: Array<{ __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null }>, allAllPage: Array<{ __typename?: 'AllPage', _id?: string | null, _type?: string | null, _key?: string | null, _createdAt?: any | null, service_page?: boolean | null, hire_dedicated_page?: boolean | null, title?: string | null, service_types?: { __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, hire_dedicated_page_types?: { __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null }> };

export type GetAllBlogInnerPagePathQueryVariables = Exact<{
  filter?: InputMaybe<BlogInnerFilter>;
}>;


export type GetAllBlogInnerPagePathQuery = { __typename?: 'RootQuery', GetAllBlogInnerPagePath: Array<{ __typename?: 'BlogInner', slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type GetBlogPageQueryVariables = Exact<{
  filter?: InputMaybe<BlogFilter>;
  blogFilter?: InputMaybe<BlogInnerFilter>;
  allPageFilter?: InputMaybe<AllPageFilter>;
  sortFilter?: InputMaybe<Array<BlogInnerSorting> | BlogInnerSorting>;
}>;


export type GetBlogPageQuery = { __typename?: 'RootQuery', allBlog: Array<{ __typename?: 'Blog', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, header?: { __typename?: 'Header', _id?: string | null, title?: string | null, sectionTheme?: string | null, toggleNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, navItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null, hero?: { __typename?: 'BlogHeroSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, reviewsSection?: { __typename?: 'ReviewsSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, textWithImage?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, descriptionRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, footer?: { __typename?: 'Footer', _id?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, phoneNo?: string | null, email?: string | null, address?: string | null, footerbar?: string | null, sectionTheme?: string | null, footerNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, footerLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, footerTitleLinkList?: Array<{ __typename?: 'FooterTitleLinkList', _key?: string | null, _type?: string | null, title?: string | null, linkList?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null> | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null, seo?: { __typename?: 'Seo', _key?: string | null, _type?: string | null, meta_title?: string | null, noFollow?: boolean | null, noIndex?: boolean | null, meta_tags?: Array<{ __typename?: 'MetaTag', _key?: string | null, _type?: string | null, meta_attributes?: Array<{ __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null } | null }>, allBlogInner: Array<{ __typename?: 'BlogInner', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, publishDate?: any | null, featuredImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, authorDetails?: { __typename?: 'AuthorDetails', _id?: string | null, _type?: string | null, _key?: string | null, authorTitle?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null }>, allServiceType: Array<{ __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null }>, allHireDedicatedPageTypes: Array<{ __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null }>, allAllPage: Array<{ __typename?: 'AllPage', _id?: string | null, _type?: string | null, _key?: string | null, _createdAt?: any | null, service_page?: boolean | null, hire_dedicated_page?: boolean | null, title?: string | null, service_types?: { __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, hire_dedicated_page_types?: { __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null }>, allCategory: Array<{ __typename?: 'Category', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null }> };

export type GetallCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetallCategoryQuery = { __typename?: 'RootQuery', allCategory: Array<{ __typename?: 'Category', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null }> };

export type GetHireDedicatedTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHireDedicatedTypeQuery = { __typename?: 'RootQuery', allHireDedicatedPageTypes: Array<{ __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null }> };

export type GetHomePageQueryVariables = Exact<{
  filter?: InputMaybe<HomeFilter>;
  allPageFilter?: InputMaybe<AllPageFilter>;
  blogFilter?: InputMaybe<BlogInnerFilter>;
  limitFilter?: InputMaybe<Scalars['Int']>;
  sortFilter?: InputMaybe<Array<BlogInnerSorting> | BlogInnerSorting>;
}>;


export type GetHomePageQuery = { __typename?: 'RootQuery', allHome: Array<{ __typename?: 'Home', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sub_title?: string | null, header?: { __typename?: 'Header', _id?: string | null, title?: string | null, sectionTheme?: string | null, toggleNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, navItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null, footer?: { __typename?: 'Footer', _id?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, phoneNo?: string | null, email?: string | null, address?: string | null, footerbar?: string | null, sectionTheme?: string | null, footerNavItems?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null, footerLogo?: Array<{ __typename?: 'FooterLogo', _key?: string | null, _type?: string | null, title?: string | null, ApplogoLink?: string | null, target?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, Hoverimage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, footerTitleLinkList?: Array<{ __typename?: 'FooterTitleLinkList', _key?: string | null, _type?: string | null, title?: string | null, linkList?: Array<{ __typename?: 'NavbarLinks', _key?: string | null, _type?: string | null, navLink?: string | null, navLabel?: string | null } | null> | null } | null> | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null, seo?: { __typename?: 'Seo', _key?: string | null, _type?: string | null, meta_title?: string | null, noFollow?: boolean | null, noIndex?: boolean | null, meta_tags?: Array<{ __typename?: 'MetaTag', _key?: string | null, _type?: string | null, meta_attributes?: Array<{ __typename?: 'MetaAttribute', _key?: string | null, _type?: string | null, attribute_key?: string | null, attribute_type?: string | null, attribute_value_string?: string | null, attribute_value_image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null } | null, sections?: Array<{ __typename: 'ChooseCHSection' } | { __typename: 'CompanyInfoSection' } | { __typename: 'FAQSection' } | { __typename: 'HiringModelSection' } | { __typename: 'HomeAboutUsSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, aboutDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'HomeBlogSection', _key?: string | null, _type?: string | null, title?: string | null, mainTitle?: string | null, subtitle?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | { __typename: 'HomeContactUsSection', _key?: string | null, _type?: string | null, title?: string | null, sectionTheme?: string | null, contactDescription?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'HomeHeroSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, mainTitle?: string | null, mainTitleArray?: Array<string | null> | null, subTitle?: string | null, title?: string | null, description?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null } | { __typename: 'HomeOurProsSection', _key?: string | null, _type?: string | null, sectionTitle?: string | null, title?: string | null, subTitle?: string | null, sectionTheme?: string | null, descriptionRaw?: any | null } | { __typename: 'HomeServicesSection', _key?: string | null, _type?: string | null, withoutNumber?: boolean | null, serviceDetailsColumn?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, servicesDetails?: Array<{ __typename?: 'ServicesDetails', _key?: string | null, _type?: string | null, heading?: string | null, title?: string | null, description?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null> | null } | { __typename: 'HomeVideoSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, video?: { __typename?: 'File', _key?: string | null, _type?: string | null, asset?: { __typename?: 'SanityFileAsset', path?: string | null, url?: string | null } | null } | null } | { __typename: 'ImageWithTitleSection', _key?: string | null, _type?: string | null, title?: string | null, iszigzagslider?: boolean | null, sectionTheme?: string | null, imageWithTitleArray?: Array<{ __typename?: 'ImageWithTitleArray', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | { __typename: 'JamstackCTESection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, description?: string | null, jamStackserviceList?: Array<{ __typename?: 'JamstackCTEServiceList', _key?: string | null, _type?: string | null, title?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | { __typename: 'NewsLetterSection' } | { __typename: 'OurProcessSection' } | { __typename: 'PricingSection' } | { __typename: 'ReviewsSection', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, sectionTheme?: string | null, button?: { __typename?: 'Button', _key?: string | null, _type?: string | null, buttonLabel?: string | null, buttonLink?: string | null, buttonTarget?: string | null, buttonType?: string | null } | null, textWithImage?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null, descriptionRichText?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | { __typename: 'SolutionSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, solutionDetails?: Array<{ __typename?: 'SolutionDetails', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | null> | null } | { __typename: 'TechStackSection' } | { __typename: 'TestimonialsSection', _id?: string | null, _type?: string | null, _key?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, testimonialsCard?: Array<{ __typename?: 'TestimonialsCard', _key?: string | null, _type?: string | null, title?: string | null, description?: string | null, profileName?: string | null, profileDetail?: string | null, image?: Array<{ __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null> | null } | null> | null } | { __typename: 'TitleHoverImageSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null } | { __typename: 'TitleWithFourImageSection' } | { __typename: 'WorkSection', _key?: string | null, _type?: string | null, sectionTheme?: string | null, titleSubtitle?: { __typename?: 'TitleSubtitle', _key?: string | null, _type?: string | null, title?: string | null, subtitle?: { __typename?: 'RichText', _key?: string | null, _type?: string | null, customeRichTextRaw?: any | null, customClassName?: string | null } | null } | null, workImage?: Array<{ __typename?: 'ImageBackground', _key?: string | null, _type?: string | null, backgroundColor?: string | null, image?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null> | null } | null> | null }>, allBlogInner: Array<{ __typename?: 'BlogInner', _id?: string | null, _type?: string | null, _key?: string | null, title?: string | null, publishDate?: any | null, featuredImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, authorDetails?: { __typename?: 'AuthorDetails', _id?: string | null, _type?: string | null, _key?: string | null, authorTitle?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null }>, allServiceType: Array<{ __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null }>, allHireDedicatedPageTypes: Array<{ __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null }>, allAllPage: Array<{ __typename?: 'AllPage', _id?: string | null, _type?: string | null, _key?: string | null, _createdAt?: any | null, service_page?: boolean | null, hire_dedicated_page?: boolean | null, title?: string | null, service_types?: { __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, hire_dedicated_page_types?: { __typename?: 'HireDedicatedPageTypes', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null } | null, logo?: { __typename?: 'CustomImage', _key?: string | null, _type?: string | null, caption?: string | null, altText?: string | null, asset?: { __typename?: 'SanityImageAsset', path?: string | null, url?: string | null, metadata?: { __typename?: 'SanityImageMetadata', dimensions?: { __typename?: 'SanityImageDimensions', height?: number | null, width?: number | null } | null } | null } | null, link?: { __typename?: 'Link', _key?: string | null, _type?: string | null, title?: string | null, href?: string | null, linkTarget?: string | null, linkType?: string | null } | null } | null, slug?: { __typename?: 'Slug', _key?: string | null, _type?: string | null, current?: string | null } | null }> };

export type GetallServiceTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetallServiceTypesQuery = { __typename?: 'RootQuery', allServiceType: Array<{ __typename?: 'ServiceType', _id?: string | null, _type?: string | null, _key?: string | null, label?: string | null }> };

export const ServiceTypeFragmentDoc = gql`
    fragment ServiceType on ServiceType {
  _id
  _type
  _key
  label
}
    `;
export const HireDedicatedPageTypesFragmentDoc = gql`
    fragment HireDedicatedPageTypes on HireDedicatedPageTypes {
  _id
  _type
  _key
  label
}
    `;
export const SanityImageAssetFragmentDoc = gql`
    fragment SanityImageAsset on SanityImageAsset {
  path
  url
  metadata {
    dimensions {
      height
      width
    }
  }
}
    `;
export const LinkFragmentDoc = gql`
    fragment Link on Link {
  _key
  _type
  title
  href
  linkTarget
  linkType
}
    `;
export const ImageFragmentDoc = gql`
    fragment Image on CustomImage {
  _key
  _type
  asset {
    ...SanityImageAsset
  }
  caption
  altText
  link {
    ...Link
  }
}
    ${SanityImageAssetFragmentDoc}
${LinkFragmentDoc}`;
export const NavbarLinksFragmentDoc = gql`
    fragment NavbarLinks on NavbarLinks {
  _key
  _type
  navLink
  navLabel
}
    `;
export const HeaderFragmentDoc = gql`
    fragment Header on Header {
  _id
  title
  toggleNavItems {
    ...NavbarLinks
  }
  logo {
    ...Image
  }
  sectionTheme
  navItems {
    ...NavbarLinks
  }
}
    ${NavbarLinksFragmentDoc}
${ImageFragmentDoc}`;
export const RichTextFragmentDoc = gql`
    fragment RichText on RichText {
  _key
  _type
  customeRichTextRaw
  customClassName
}
    `;
export const HeroSectionFragmentDoc = gql`
    fragment HeroSection on HeroSection {
  _key
  _type
  description {
    ...RichText
  }
  image {
    ...Image
  }
  sectionTheme
}
    ${RichTextFragmentDoc}
${ImageFragmentDoc}`;
export const ImageWithTitleArrayFragmentDoc = gql`
    fragment ImageWithTitleArray on ImageWithTitleArray {
  _key
  _type
  image {
    ...Image
  }
  title
}
    ${ImageFragmentDoc}`;
export const ImageWithTitleSectionFragmentDoc = gql`
    fragment ImageWithTitleSection on ImageWithTitleSection {
  _key
  _type
  title
  imageWithTitleArray {
    ...ImageWithTitleArray
  }
  iszigzagslider
  sectionTheme
}
    ${ImageWithTitleArrayFragmentDoc}`;
export const TitleSubtitleFragmentDoc = gql`
    fragment TitleSubtitle on TitleSubtitle {
  _key
  _type
  title
  subtitle {
    ...RichText
  }
}
    ${RichTextFragmentDoc}`;
export const ServicesDetailsFragmentDoc = gql`
    fragment ServicesDetails on ServicesDetails {
  _key
  _type
  heading
  title
  description {
    ...RichText
  }
}
    ${RichTextFragmentDoc}`;
export const HomeServicesSectionFragmentDoc = gql`
    fragment HomeServicesSection on HomeServicesSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  servicesDetails {
    ...ServicesDetails
  }
  withoutNumber
  serviceDetailsColumn
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ServicesDetailsFragmentDoc}`;
export const TitleSubtitleWithImageArraySectionFragmentDoc = gql`
    fragment TitleSubtitleWithImageArraySection on TitleSubtitleWithImageArraySection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  imageArray: image {
    ...Image
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ImageFragmentDoc}`;
export const ButtonFragmentDoc = gql`
    fragment Button on Button {
  _key
  _type
  buttonLabel
  buttonLink
  buttonTarget
  buttonType
}
    `;
export const ReviewsSectionFragmentDoc = gql`
    fragment ReviewsSection on ReviewsSection {
  _id
  _type
  _key
  title
  button {
    ...Button
  }
  sectionTheme
  textWithImage {
    ...RichText
  }
  descriptionRichText: description {
    ...RichText
  }
}
    ${ButtonFragmentDoc}
${RichTextFragmentDoc}`;
export const ImageTitleDescriptionDetailsFragmentDoc = gql`
    fragment ImageTitleDescriptionDetails on ImageTitleDescriptionDetails {
  _key
  _type
  image {
    ...Image
  }
  title
  sideTitle
  descriptionDetailsRichText {
    ...RichText
  }
}
    ${ImageFragmentDoc}
${RichTextFragmentDoc}`;
export const ImageTitleDescriptionSectionFragmentDoc = gql`
    fragment ImageTitleDescriptionSection on ImageTitleDescriptionSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  details {
    ...ImageTitleDescriptionDetails
  }
  sliderOption
  sectionTheme
  widthOption
  borderOption
  imageOption
  columns
  align
  ourApproach
}
    ${TitleSubtitleFragmentDoc}
${ImageTitleDescriptionDetailsFragmentDoc}`;
export const IconTitleArrayFragmentDoc = gql`
    fragment IconTitleArray on IconTitleArray {
  _key
  _type
  image {
    ...Image
  }
  title
}
    ${ImageFragmentDoc}`;
export const RichTextIconSideImageSectionFragmentDoc = gql`
    fragment RichTextIconSideImageSection on RichTextIconSideImageSection {
  _key
  _type
  sectionTheme
  titleSubtitleOption
  titleSubtitle {
    ...TitleSubtitle
  }
  description {
    ...RichText
  }
  developmentIconTitle {
    ...IconTitleArray
  }
  iconTitleDirection
  image {
    ...Image
  }
}
    ${TitleSubtitleFragmentDoc}
${RichTextFragmentDoc}
${IconTitleArrayFragmentDoc}
${ImageFragmentDoc}`;
export const TitleSubtitleImageArraySideRichTextSectionFragmentDoc = gql`
    fragment TitleSubtitleImageArraySideRichTextSection on TitleSubtitleImageArraySideRichTextSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  companiesLogoImage: image {
    ...Image
  }
  sideRichText: description {
    ...RichText
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ImageFragmentDoc}
${RichTextFragmentDoc}`;
export const AppIconLinkItemFragmentDoc = gql`
    fragment AppIconLinkItem on AppIconLinkItem {
  _key
  _type
  appImage: image {
    ...Image
  }
  title
  appLink
}
    ${ImageFragmentDoc}`;
export const TabItemFragmentDoc = gql`
    fragment TabItem on TabItem {
  _key
  _type
  title
  appIconLinkItem {
    ...AppIconLinkItem
  }
}
    ${AppIconLinkItemFragmentDoc}`;
export const TechStackSectionFragmentDoc = gql`
    fragment TechStackSection on TechStackSection {
  _id
  _type
  _key
  titleSubtitle {
    ...TitleSubtitle
  }
  tabItem {
    ...TabItem
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${TabItemFragmentDoc}`;
export const OurProcessSectionFragmentDoc = gql`
    fragment OurProcessSection on OurProcessSection {
  _id
  _type
  _key
  titleSubtitle {
    ...TitleSubtitle
  }
  ourProcessAppIconImage {
    ...IconTitleArray
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${IconTitleArrayFragmentDoc}`;
export const ChooseChSectionFragmentDoc = gql`
    fragment ChooseCHSection on ChooseCHSection {
  _id
  _type
  _key
  titleSubtitle {
    ...TitleSubtitle
  }
  appIconImage {
    ...IconTitleArray
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${IconTitleArrayFragmentDoc}`;
export const PlanServicesTemplateFragmentDoc = gql`
    fragment PlanServicesTemplate on PlanServicesTemplate {
  _id
  _type
  _key
  title
  plan_services
}
    `;
export const StringWithBooleanFragmentDoc = gql`
    fragment StringWithBoolean on StringWithBoolean {
  _key
  _type
  title
  boolean
}
    `;
export const StringWithIconFragmentDoc = gql`
    fragment StringWithIcon on StringWithIcon {
  _key
  _type
  title
  image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const ComparisionFieldFragmentDoc = gql`
    fragment ComparisionField on ComparisionField {
  _key
  _type
  name
  type
  isDivider
  string
  button {
    ...Button
  }
  string_with_boolean {
    ...StringWithBoolean
  }
  boolean_value
  slider_value
  string_with_icon {
    ...StringWithIcon
  }
}
    ${ButtonFragmentDoc}
${StringWithBooleanFragmentDoc}
${StringWithIconFragmentDoc}`;
export const PackageFragmentDoc = gql`
    fragment Package on Package {
  _id
  _type
  _key
  label
  package_title
  package_price_value
  package_price
  package_duration
  package_details {
    ...ComparisionField
  }
  package_summary
  popularity
}
    ${ComparisionFieldFragmentDoc}`;
export const PlanFragmentDoc = gql`
    fragment Plan on Plan {
  _id
  _type
  _key
  label
  plan_name
  plan_services
  plan_services_template {
    ...PlanServicesTemplate
  }
  packages {
    ...Package
  }
}
    ${PlanServicesTemplateFragmentDoc}
${PackageFragmentDoc}`;
export const PricingFragmentDoc = gql`
    fragment Pricing on Pricing {
  _key
  _type
  plans {
    ...Plan
  }
  planNavigation: plan_navigation
  planDiscussButton: button {
    ...Button
  }
}
    ${PlanFragmentDoc}
${ButtonFragmentDoc}`;
export const PricingSectionFragmentDoc = gql`
    fragment PricingSection on PricingSection {
  _id
  _type
  _key
  titleSubtitle {
    ...TitleSubtitle
  }
  mainTitle
  pricingSection {
    ...Pricing
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${PricingFragmentDoc}`;
export const SolutionDetailsFragmentDoc = gql`
    fragment SolutionDetails on SolutionDetails {
  _key
  _type
  title
  description
  image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const SolutionSectionFragmentDoc = gql`
    fragment SolutionSection on SolutionSection {
  _id
  _type
  _key
  titleSubtitle {
    ...TitleSubtitle
  }
  solutionDetails {
    ...SolutionDetails
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${SolutionDetailsFragmentDoc}`;
export const HiringModelDetailsFragmentDoc = gql`
    fragment HiringModelDetails on HiringModelDetails {
  _key
  _type
  modelDetailsTitle: title
  modelDetailsDescription: description {
    ...RichText
  }
  image {
    ...Image
  }
}
    ${RichTextFragmentDoc}
${ImageFragmentDoc}`;
export const HiringModelSectionFragmentDoc = gql`
    fragment HiringModelSection on HiringModelSection {
  _id
  _type
  _key
  titleSubtitle {
    ...TitleSubtitle
  }
  hiringModelDetails {
    ...HiringModelDetails
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${HiringModelDetailsFragmentDoc}`;
export const TitleHoverImageSectionFragmentDoc = gql`
    fragment TitleHoverImageSection on TitleHoverImageSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}`;
export const TestimonialsCardFragmentDoc = gql`
    fragment TestimonialsCard on TestimonialsCard {
  _key
  _type
  title
  description
  profileName
  profileDetail
  image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const TestimonialsSectionFragmentDoc = gql`
    fragment TestimonialsSection on TestimonialsSection {
  _id
  _type
  _key
  titleSubtitle {
    ...TitleSubtitle
  }
  testimonialsCard {
    ...TestimonialsCard
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${TestimonialsCardFragmentDoc}`;
export const ImageTitleFragmentDoc = gql`
    fragment ImageTitle on ImageTitle {
  _key
  _type
  title
  image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const TitleWithSliderImageSectionFragmentDoc = gql`
    fragment TitleWithSliderImageSection on TitleWithSliderImageSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  imageTitle {
    ...ImageTitle
  }
  ifCenterImage
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ImageTitleFragmentDoc}`;
export const TitleDescriptionFragmentDoc = gql`
    fragment TitleDescription on TitleDescription {
  _key
  _type
  title
  description {
    ...RichText
  }
  sectionTheme
}
    ${RichTextFragmentDoc}`;
export const ImageSideBySideTitleDescArraySectionFragmentDoc = gql`
    fragment ImageSideBySideTitleDescArraySection on ImageSideBySideTitleDescArraySection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  image {
    ...Image
  }
  titleDescriptionArray {
    ...TitleDescription
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ImageFragmentDoc}
${TitleDescriptionFragmentDoc}`;
export const TitleSubtitleTitleArraySectionFragmentDoc = gql`
    fragment TitleSubtitleTitleArraySection on TitleSubtitleTitleArraySection {
  _key
  _type
  titleArray: title
  titleSubtitle {
    ...TitleSubtitle
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}`;
export const HourlyDeveloperSectionFragmentDoc = gql`
    fragment HourlyDeveloperSection on HourlyDeveloperSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  image {
    ...Image
  }
  price_section {
    ...TitleDescription
  }
  price
  desc
  button {
    ...Button
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ImageFragmentDoc}
${TitleDescriptionFragmentDoc}
${ButtonFragmentDoc}`;
export const NumberTitleFragmentDoc = gql`
    fragment NumberTitle on NumberTitle {
  _key
  _type
  number
  title
  addOn
}
    `;
export const CompanyInfoSectionFragmentDoc = gql`
    fragment CompanyInfoSection on CompanyInfoSection {
  _id
  _type
  _key
  titleSubtitle {
    ...TitleSubtitle
  }
  numberTitle {
    ...NumberTitle
  }
  imageArray: image {
    ...Image
  }
  appIconImage {
    ...IconTitleArray
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${NumberTitleFragmentDoc}
${ImageFragmentDoc}
${IconTitleArrayFragmentDoc}`;
export const QuestionAndAnswerFragmentDoc = gql`
    fragment QuestionAndAnswer on QuestionAndAnswer {
  _key
  _type
  title
  description {
    ...RichText
  }
}
    ${RichTextFragmentDoc}`;
export const SideContentWithQueAnsFragmentDoc = gql`
    fragment SideContentWithQueAns on SideContentWithQueAns {
  _key
  _type
  title
  image {
    ...Image
  }
  questionAndAnswer {
    ...QuestionAndAnswer
  }
}
    ${ImageFragmentDoc}
${QuestionAndAnswerFragmentDoc}`;
export const TitleButtonFragmentDoc = gql`
    fragment TitleButton on TitleButton {
  _key
  _type
  title
  button {
    ...Button
  }
}
    ${ButtonFragmentDoc}`;
export const FaqSectionFragmentDoc = gql`
    fragment FAQSection on FAQSection {
  _id
  _type
  _key
  titleSubtitle {
    ...TitleSubtitle
  }
  sectionTitle
  sideContentWithQueAns {
    ...SideContentWithQueAns
  }
  titleButton {
    ...TitleButton
  }
  titleButtonWithBG
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${SideContentWithQueAnsFragmentDoc}
${TitleButtonFragmentDoc}`;
export const TitleDescriptionArrayWithSideTitleArraySectionFragmentDoc = gql`
    fragment TitleDescriptionArrayWithSideTitleArraySection on TitleDescriptionArrayWithSideTitleArraySection {
  _key
  _type
  title
  titleSubtitle {
    ...TitleSubtitle
  }
  TitleDescription {
    ...ImageTitleDescriptionDetails
  }
  sideTitleArray
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ImageTitleDescriptionDetailsFragmentDoc}`;
export const ImageRichTextCardSectionFragmentDoc = gql`
    fragment ImageRichTextCardSection on ImageRichTextCardSection {
  _key
  _type
  image {
    ...Image
  }
  description {
    ...RichText
  }
}
    ${ImageFragmentDoc}
${RichTextFragmentDoc}`;
export const CompanyVisionsectionFragmentDoc = gql`
    fragment CompanyVisionsection on CompanyVisionsection {
  _key
  _type
  title
  description {
    ...RichText
  }
  missionVisionCard {
    ...ImageRichTextCardSection
  }
  companyVisionFeatures {
    ...ServicesDetails
  }
  sectionTheme
}
    ${RichTextFragmentDoc}
${ImageRichTextCardSectionFragmentDoc}
${ServicesDetailsFragmentDoc}`;
export const DevelopmentCardFragmentDoc = gql`
    fragment DevelopmentCard on DevelopmentCard {
  _key
  _type
  developmentCardRichText {
    ...RichText
  }
  image {
    ...Image
  }
}
    ${RichTextFragmentDoc}
${ImageFragmentDoc}`;
export const ServiceDevelopmentSectionFragmentDoc = gql`
    fragment ServiceDevelopmentSection on ServiceDevelopmentSection {
  _key
  _type
  title
  developmentCard {
    ...DevelopmentCard
  }
  description {
    ...RichText
  }
  sectionTheme
}
    ${DevelopmentCardFragmentDoc}
${RichTextFragmentDoc}`;
export const ImageBackgroundFragmentDoc = gql`
    fragment ImageBackground on ImageBackground {
  _key
  _type
  image {
    ...Image
  }
  backgroundColor
}
    ${ImageFragmentDoc}`;
export const WorkSectionFragmentDoc = gql`
    fragment WorkSection on WorkSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  sectionTheme
  workImage: image {
    ...ImageBackground
  }
}
    ${TitleSubtitleFragmentDoc}
${ImageBackgroundFragmentDoc}`;
export const ServiceOurProcessSectionFragmentDoc = gql`
    fragment ServiceOurProcessSection on ServiceOurProcessSection {
  _key
  _type
  title
  mainTitle
  description {
    ...RichText
  }
  image {
    ...Image
  }
  pointerImage {
    ...Image
  }
  sectionTheme
}
    ${RichTextFragmentDoc}
${ImageFragmentDoc}`;
export const TeamPhotosSectionFragmentDoc = gql`
    fragment TeamPhotosSection on TeamPhotosSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  image {
    ...Image
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ImageFragmentDoc}`;
export const TitleWithFourImageSectionFragmentDoc = gql`
    fragment TitleWithFourImageSection on TitleWithFourImageSection {
  _id
  _type
  _key
  title
  fourImage: image {
    ...Image
  }
  sectionTheme
}
    ${ImageFragmentDoc}`;
export const OfficeAddressFragmentDoc = gql`
    fragment OfficeAddress on OfficeAddress {
  _key
  _type
  addressTitle: title
  addressDescription: description {
    ...RichText
  }
  directions {
    ...Link
  }
}
    ${RichTextFragmentDoc}
${LinkFragmentDoc}`;
export const OfficeTimeFragmentDoc = gql`
    fragment OfficeTime on OfficeTime {
  _key
  _type
  timeTitle: title
  timeDescription: description {
    ...RichText
  }
}
    ${RichTextFragmentDoc}`;
export const ContactInformationSectionFragmentDoc = gql`
    fragment ContactInformationSection on ContactInformationSection {
  _key
  _type
  title
  email
  phoneNo
  officeAddress {
    ...OfficeAddress
  }
  officeTime {
    ...OfficeTime
  }
  contactUsCard {
    ...ImageRichTextCardSection
  }
  sectionTheme
}
    ${OfficeAddressFragmentDoc}
${OfficeTimeFragmentDoc}
${ImageRichTextCardSectionFragmentDoc}`;
export const ContactMapSectionFragmentDoc = gql`
    fragment ContactMapSection on ContactMapSection {
  _key
  _type
  mapImage
  sectionTheme
}
    `;
export const ImagetitleSubtitleArrayFragmentDoc = gql`
    fragment ImagetitleSubtitleArray on ImagetitleSubtitleArray {
  _key
  _type
  titleArray
  subtitleArray
  arrowImage: image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const ContactMessageImageFragmentDoc = gql`
    fragment ContactMessageImage on ContactMessageImage {
  _key
  _type
  contactMessageMainImage: image {
    ...Image
  }
  contactMessageImageTitleSubtitleArray {
    ...ImagetitleSubtitleArray
  }
}
    ${ImageFragmentDoc}
${ImagetitleSubtitleArrayFragmentDoc}`;
export const ContactMessageSectionFragmentDoc = gql`
    fragment ContactMessageSection on ContactMessageSection {
  _key
  _type
  title
  description {
    ...RichText
  }
  sevicesTitle
  servicesButtonArray: button {
    ...Button
  }
  messageImage {
    ...ContactMessageImage
  }
  sectionTheme
}
    ${RichTextFragmentDoc}
${ButtonFragmentDoc}
${ContactMessageImageFragmentDoc}`;
export const ImageButtonTitleFragmentDoc = gql`
    fragment ImageButtonTitle on ImageButtonTitle {
  _key
  _type
  image {
    ...Image
  }
  button {
    ...Button
  }
  title
}
    ${ImageFragmentDoc}
${ButtonFragmentDoc}`;
export const TitleImageButtonFragmentDoc = gql`
    fragment TitleImageButton on DevelopmentArray {
  _key
  _type
  title
  imageButtonTitle {
    ...ImageButtonTitle
  }
}
    ${ImageButtonTitleFragmentDoc}`;
export const PortfolioInnerDevelopmentSectionFragmentDoc = gql`
    fragment PortfolioInnerDevelopmentSection on PortfolioInnerDevelopmentSection {
  _key
  _type
  title
  titleImageButton: developmentArray {
    ...TitleImageButton
  }
  sectionTheme
}
    ${TitleImageButtonFragmentDoc}`;
export const ThemesSectionFragmentDoc = gql`
    fragment ThemesSection on ThemesSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  themesImage: image {
    ...Image
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ImageFragmentDoc}`;
export const CompaniesLogoTitleArrayFragmentDoc = gql`
    fragment CompaniesLogoTitleArray on CompaniesLogoTitleArray {
  _key
  _type
  title
  image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const NextJsuSeCompaniesSectionFragmentDoc = gql`
    fragment NextJSUSeCompaniesSection on NextJSUSeCompaniesSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  image {
    ...Image
  }
  companiesLogoTitleArray {
    ...CompaniesLogoTitleArray
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ImageFragmentDoc}
${CompaniesLogoTitleArrayFragmentDoc}`;
export const WoocommerceBenefitSectionFragmentDoc = gql`
    fragment WoocommerceBenefitSection on WoocommerceBenefitSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  benefitImage: image {
    ...Image
  }
  woocommercebenefitRichText: description {
    ...RichText
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ImageFragmentDoc}
${RichTextFragmentDoc}`;
export const RichTextImageButtonSectionFragmentDoc = gql`
    fragment RichTextImageButtonSection on RichTextImageButtonSection {
  _key
  _type
  title
  description {
    ...RichText
  }
  image {
    ...Image
  }
  button {
    ...Button
  }
  sectionTheme
}
    ${RichTextFragmentDoc}
${ImageFragmentDoc}
${ButtonFragmentDoc}`;
export const RichTextWithSideImageFragmentDoc = gql`
    fragment RichTextWithSideImage on RichTextWithSideImage {
  _key
  _type
  title
  useRichText {
    ...RichText
  }
  image {
    ...Image
  }
  description {
    ...RichText
  }
  sectionTheme
}
    ${RichTextFragmentDoc}
${ImageFragmentDoc}`;
export const TitleDescriptionSideBySideBgImageSectionFragmentDoc = gql`
    fragment TitleDescriptionSideBySideBGImageSection on TitleDescriptionSideBySideBGImageSection {
  _key
  _type
  title
  description {
    ...RichText
  }
  image {
    ...Image
  }
  bgImageOption
  sectionTheme
}
    ${RichTextFragmentDoc}
${ImageFragmentDoc}`;
export const EstimateProjectFormSectionFragmentDoc = gql`
    fragment EstimateProjectFormSection on EstimateProjectFormSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  namePlaceholder
  emailPlaceholder
  selectTypeOfProject
  selectTypeButton
  textPlaceholder: howCanWeHelpPlaceholder
  button: hireJamstackDevelopmentButton {
    ...Button
  }
  image {
    ...Image
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ButtonFragmentDoc}
${ImageFragmentDoc}`;
export const FourOFourErrorSectionFragmentDoc = gql`
    fragment FourOFourErrorSection on FourOFourErrorSection {
  _key
  _type
  image {
    ...Image
  }
  errorTitle
  errorDescription
  sectionTheme
}
    ${ImageFragmentDoc}`;
export const TitledescfullimagesectionFragmentDoc = gql`
    fragment Titledescfullimagesection on Titledescfullimagesection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  image {
    ...Image
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ImageFragmentDoc}`;
export const ContactHeroSectionFragmentDoc = gql`
    fragment ContactHeroSection on ContactHeroSection {
  _key
  _type
  title
  mainTitle
  description {
    ...RichText
  }
  sectionTheme
}
    ${RichTextFragmentDoc}`;
export const ImageArraySectionFragmentDoc = gql`
    fragment ImageArraySection on ImageArraySection {
  _key
  _type
  title
  imageArray: image {
    ...Image
  }
  isBigger
  sectionTheme
}
    ${ImageFragmentDoc}`;
export const FooterLogoFragmentDoc = gql`
    fragment FooterLogo on FooterLogo {
  _key
  _type
  title
  image {
    ...Image
  }
  Hoverimage {
    ...Image
  }
  ApplogoLink
  target
}
    ${ImageFragmentDoc}`;
export const FooterTitleLinkListFragmentDoc = gql`
    fragment FooterTitleLinkList on FooterTitleLinkList {
  _key
  _type
  title
  linkList {
    ...NavbarLinks
  }
}
    ${NavbarLinksFragmentDoc}`;
export const FooterFragmentDoc = gql`
    fragment Footer on Footer {
  _id
  _type
  title
  mainTitle
  subtitle
  phoneNo
  email
  address
  footerNavItems {
    ...NavbarLinks
  }
  image {
    ...Image
  }
  footerLogo {
    ...FooterLogo
  }
  footerbar
  footerTitleLinkList {
    ...FooterTitleLinkList
  }
  sectionTheme
}
    ${NavbarLinksFragmentDoc}
${ImageFragmentDoc}
${FooterLogoFragmentDoc}
${FooterTitleLinkListFragmentDoc}`;
export const SlugFragmentDoc = gql`
    fragment Slug on Slug {
  _key
  _type
  current
}
    `;
export const MetaAttributeFragmentDoc = gql`
    fragment MetaAttribute on MetaAttribute {
  _key
  _type
  attribute_key
  attribute_type
  attribute_value_image {
    ...Image
  }
  attribute_value_string
}
    ${ImageFragmentDoc}`;
export const MetaTagFragmentDoc = gql`
    fragment MetaTag on MetaTag {
  _key
  _type
  meta_attributes {
    ...MetaAttribute
  }
}
    ${MetaAttributeFragmentDoc}`;
export const SeoFragmentDoc = gql`
    fragment Seo on Seo {
  _key
  _type
  meta_title
  meta_tags {
    ...MetaTag
  }
  noFollow
  noIndex
}
    ${MetaTagFragmentDoc}`;
export const AllPageFragmentDoc = gql`
    fragment AllPage on AllPage {
  _id
  _type
  _key
  _createdAt
  service_page
  hire_dedicated_page
  title
  service_types {
    ...ServiceType
  }
  hire_dedicated_page_types {
    ...HireDedicatedPageTypes
  }
  logo {
    ...Image
  }
  header {
    ...Header
  }
  sections {
    __typename
    ...HeroSection
    ...ImageWithTitleSection
    ...HomeServicesSection
    ...TitleSubtitleWithImageArraySection
    ...ReviewsSection
    ...RichText
    ...ImageTitleDescriptionSection
    ...RichTextIconSideImageSection
    ...TitleSubtitleImageArraySideRichTextSection
    ...TechStackSection
    ...OurProcessSection
    ...ChooseCHSection
    ...PricingSection
    ...SolutionSection
    ...HiringModelSection
    ...TitleHoverImageSection
    ...TestimonialsSection
    ...TitleWithSliderImageSection
    ...ImageSideBySideTitleDescArraySection
    ...TitleSubtitleTitleArraySection
    ...HourlyDeveloperSection
    ...CompanyInfoSection
    ...FAQSection
    ...TitleDescriptionArrayWithSideTitleArraySection
    ...CompanyVisionsection
    ...ServiceDevelopmentSection
    ...WorkSection
    ...ServiceOurProcessSection
    ...TeamPhotosSection
    ...TitleWithFourImageSection
    ...ContactInformationSection
    ...ContactMapSection
    ...ContactMessageSection
    ...PortfolioInnerDevelopmentSection
    ...ThemesSection
    ...NextJSUSeCompaniesSection
    ...WoocommerceBenefitSection
    ...RichTextImageButtonSection
    ...RichTextWithSideImage
    ...TitleDescriptionSideBySideBGImageSection
    ...EstimateProjectFormSection
    ...FourOFourErrorSection
    ...Titledescfullimagesection
    ...CompanyInfoSection
    ...ContactHeroSection
    ...ImageArraySection
  }
  footer {
    ...Footer
  }
  slug {
    ...Slug
  }
  seo {
    ...Seo
  }
}
    ${ServiceTypeFragmentDoc}
${HireDedicatedPageTypesFragmentDoc}
${ImageFragmentDoc}
${HeaderFragmentDoc}
${HeroSectionFragmentDoc}
${ImageWithTitleSectionFragmentDoc}
${HomeServicesSectionFragmentDoc}
${TitleSubtitleWithImageArraySectionFragmentDoc}
${ReviewsSectionFragmentDoc}
${RichTextFragmentDoc}
${ImageTitleDescriptionSectionFragmentDoc}
${RichTextIconSideImageSectionFragmentDoc}
${TitleSubtitleImageArraySideRichTextSectionFragmentDoc}
${TechStackSectionFragmentDoc}
${OurProcessSectionFragmentDoc}
${ChooseChSectionFragmentDoc}
${PricingSectionFragmentDoc}
${SolutionSectionFragmentDoc}
${HiringModelSectionFragmentDoc}
${TitleHoverImageSectionFragmentDoc}
${TestimonialsSectionFragmentDoc}
${TitleWithSliderImageSectionFragmentDoc}
${ImageSideBySideTitleDescArraySectionFragmentDoc}
${TitleSubtitleTitleArraySectionFragmentDoc}
${HourlyDeveloperSectionFragmentDoc}
${CompanyInfoSectionFragmentDoc}
${FaqSectionFragmentDoc}
${TitleDescriptionArrayWithSideTitleArraySectionFragmentDoc}
${CompanyVisionsectionFragmentDoc}
${ServiceDevelopmentSectionFragmentDoc}
${WorkSectionFragmentDoc}
${ServiceOurProcessSectionFragmentDoc}
${TeamPhotosSectionFragmentDoc}
${TitleWithFourImageSectionFragmentDoc}
${ContactInformationSectionFragmentDoc}
${ContactMapSectionFragmentDoc}
${ContactMessageSectionFragmentDoc}
${PortfolioInnerDevelopmentSectionFragmentDoc}
${ThemesSectionFragmentDoc}
${NextJsuSeCompaniesSectionFragmentDoc}
${WoocommerceBenefitSectionFragmentDoc}
${RichTextImageButtonSectionFragmentDoc}
${RichTextWithSideImageFragmentDoc}
${TitleDescriptionSideBySideBgImageSectionFragmentDoc}
${EstimateProjectFormSectionFragmentDoc}
${FourOFourErrorSectionFragmentDoc}
${TitledescfullimagesectionFragmentDoc}
${ContactHeroSectionFragmentDoc}
${ImageArraySectionFragmentDoc}
${FooterFragmentDoc}
${SlugFragmentDoc}
${SeoFragmentDoc}`;
export const AuthorCardSectionFragmentDoc = gql`
    fragment AuthorCardSection on AuthorCardSection {
  _key
  _type
  title
  image {
    ...Image
  }
  authorPosition
  description {
    ...RichText
  }
  authorCardAppLogo {
    ...FooterLogo
  }
  authorName
}
    ${ImageFragmentDoc}
${RichTextFragmentDoc}
${FooterLogoFragmentDoc}`;
export const AuthorQouteFragmentDoc = gql`
    fragment AuthorQoute on AuthorQoute {
  _key
  _type
  description
  authorName
}
    `;
export const BlogHeroSectionFragmentDoc = gql`
    fragment BlogHeroSection on BlogHeroSection {
  _key
  _type
  title
  description {
    ...RichText
  }
  sectionTheme
}
    ${RichTextFragmentDoc}`;
export const BlogFragmentDoc = gql`
    fragment Blog on Blog {
  _id
  _type
  _key
  title
  header {
    ...Header
  }
  hero {
    ...BlogHeroSection
  }
  reviewsSection {
    ...ReviewsSection
  }
  footer {
    ...Footer
  }
  slug {
    ...Slug
  }
  seo {
    ...Seo
  }
}
    ${HeaderFragmentDoc}
${BlogHeroSectionFragmentDoc}
${ReviewsSectionFragmentDoc}
${FooterFragmentDoc}
${SlugFragmentDoc}
${SeoFragmentDoc}`;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  _id
  _type
  _key
  title
  slug {
    ...Slug
  }
  sectionTheme
}
    ${SlugFragmentDoc}`;
export const AuthorDetailsFragmentDoc = gql`
    fragment AuthorDetails on AuthorDetails {
  _id
  _type
  _key
  authorTitle: title
  authorPosition: subtitle
  authorImage: image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const BlogInnerFragmentDoc = gql`
    fragment BlogInner on BlogInner {
  _id
  _type
  _key
  title
  header {
    ...Header
  }
  publishDate
  featuredImage: image {
    ...Image
  }
  button {
    ...Button
  }
  content: description {
    ...RichText
  }
  reviewsSection {
    ...ReviewsSection
  }
  category {
    ...Category
  }
  authorDetails {
    ...AuthorDetails
  }
  sideContentCard
  footer {
    ...Footer
  }
  slug {
    ...Slug
  }
  seo {
    ...Seo
  }
}
    ${HeaderFragmentDoc}
${ImageFragmentDoc}
${ButtonFragmentDoc}
${RichTextFragmentDoc}
${ReviewsSectionFragmentDoc}
${CategoryFragmentDoc}
${AuthorDetailsFragmentDoc}
${FooterFragmentDoc}
${SlugFragmentDoc}
${SeoFragmentDoc}`;
export const SideAppLogoSectionFragmentDoc = gql`
    fragment SideAppLogoSection on SideAppLogoSection {
  _key
  _type
  title
  appLogo {
    ...FooterLogo
  }
}
    ${FooterLogoFragmentDoc}`;
export const NewsLetterSectionFragmentDoc = gql`
    fragment NewsLetterSection on NewsLetterSection {
  _id
  _type
  _key
  title
  description
  sectionTheme
}
    `;
export const BlogInnerSideContentFragmentDoc = gql`
    fragment BlogInnerSideContent on BlogInnerSideContent {
  _id
  _type
  _key
  TitleAppLogo {
    ...SideAppLogoSection
  }
  title
  newsLetter {
    ...NewsLetterSection
  }
  slug {
    _key
  }
}
    ${SideAppLogoSectionFragmentDoc}
${NewsLetterSectionFragmentDoc}`;
export const BlogPostCardFragmentDoc = gql`
    fragment BlogPostCard on BlogInner {
  _id
  _type
  _key
  title
  publishDate
  featuredImage: image {
    ...Image
  }
  authorDetails {
    ...AuthorDetails
  }
  slug {
    ...Slug
  }
}
    ${ImageFragmentDoc}
${AuthorDetailsFragmentDoc}
${SlugFragmentDoc}`;
export const HomeHeroSectionFragmentDoc = gql`
    fragment HomeHeroSection on HomeHeroSection {
  _key
  _type
  sectionTheme
  mainTitle
  mainTitleArray
  subTitle
  title
  description
  button {
    ...Button
  }
  sectionTheme
}
    ${ButtonFragmentDoc}`;
export const HomeVideoSectionFragmentDoc = gql`
    fragment HomeVideoSection on HomeVideoSection {
  _key
  _type
  image {
    ...Image
  }
  sectionTheme
  video {
    _key
    _type
    asset {
      path
      url
    }
  }
}
    ${ImageFragmentDoc}`;
export const HomeContactUsSectionFragmentDoc = gql`
    fragment HomeContactUsSection on HomeContactUsSection {
  _key
  _type
  title
  sectionTheme
  contactDescription: description {
    ...RichText
  }
  image {
    ...Image
  }
}
    ${RichTextFragmentDoc}
${ImageFragmentDoc}`;
export const HomeAboutUsSectionFragmentDoc = gql`
    fragment HomeAboutUsSection on HomeAboutUsSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  sectionTheme
  aboutDescription: description {
    ...RichText
  }
  image {
    ...Image
  }
}
    ${TitleSubtitleFragmentDoc}
${RichTextFragmentDoc}
${ImageFragmentDoc}`;
export const HomeOurProsSectionFragmentDoc = gql`
    fragment HomeOurProsSection on HomeOurProsSection {
  _key
  _type
  sectionTitle
  title
  subTitle
  sectionTheme
  descriptionRaw
}
    `;
export const HomeBlogSectionFragmentDoc = gql`
    fragment HomeBlogSection on HomeBlogSection {
  _key
  _type
  title
  mainTitle
  subtitle
  titleSubtitle {
    ...TitleSubtitle
  }
  button {
    ...Button
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${ButtonFragmentDoc}`;
export const JamstackCteServiceListFragmentDoc = gql`
    fragment JamstackCTEServiceList on JamstackCTEServiceList {
  _key
  _type
  image {
    ...Image
  }
  title
}
    ${ImageFragmentDoc}`;
export const JamstackCteSectionFragmentDoc = gql`
    fragment JamstackCTESection on JamstackCTESection {
  _id
  _type
  _key
  title
  jamStackserviceList {
    ...JamstackCTEServiceList
  }
  button {
    ...Button
  }
  sectionTheme
  description
  image {
    ...Image
  }
}
    ${JamstackCteServiceListFragmentDoc}
${ButtonFragmentDoc}
${ImageFragmentDoc}`;
export const HomeFragmentDoc = gql`
    fragment Home on Home {
  _id
  _type
  _key
  title
  sub_title
  header {
    ...Header
  }
  footer {
    ...Footer
  }
  slug {
    ...Slug
  }
  seo {
    ...Seo
  }
  sections {
    __typename
    ...HomeHeroSection
    ...HomeVideoSection
    ...HomeServicesSection
    ...HomeContactUsSection
    ...HomeAboutUsSection
    ...HomeOurProsSection
    ...HomeBlogSection
    ...TitleHoverImageSection
    ...ImageWithTitleSection
    ...WorkSection
    ...SolutionSection
    ...JamstackCTESection
    ...TestimonialsSection
    ...ReviewsSection
  }
}
    ${HeaderFragmentDoc}
${FooterFragmentDoc}
${SlugFragmentDoc}
${SeoFragmentDoc}
${HomeHeroSectionFragmentDoc}
${HomeVideoSectionFragmentDoc}
${HomeServicesSectionFragmentDoc}
${HomeContactUsSectionFragmentDoc}
${HomeAboutUsSectionFragmentDoc}
${HomeOurProsSectionFragmentDoc}
${HomeBlogSectionFragmentDoc}
${TitleHoverImageSectionFragmentDoc}
${ImageWithTitleSectionFragmentDoc}
${WorkSectionFragmentDoc}
${SolutionSectionFragmentDoc}
${JamstackCteSectionFragmentDoc}
${TestimonialsSectionFragmentDoc}
${ReviewsSectionFragmentDoc}`;
export const HomeBlogInnerFragmentDoc = gql`
    fragment HomeBlogInner on BlogInner {
  _id
  _type
  _key
  title
  publishDate
  featuredImage: image {
    ...Image
  }
  authorDetails {
    ...AuthorDetails
  }
  slug {
    ...Slug
  }
}
    ${ImageFragmentDoc}
${AuthorDetailsFragmentDoc}
${SlugFragmentDoc}`;
export const HomeNavServicesFragmentDoc = gql`
    fragment HomeNavServices on AllPage {
  _id
  _type
  _key
  _createdAt
  service_page
  hire_dedicated_page
  title
  service_types {
    ...ServiceType
  }
  hire_dedicated_page_types {
    ...HireDedicatedPageTypes
  }
  logo {
    ...Image
  }
  slug {
    ...Slug
  }
}
    ${ServiceTypeFragmentDoc}
${HireDedicatedPageTypesFragmentDoc}
${ImageFragmentDoc}
${SlugFragmentDoc}`;
export const ResourceDetailCardFragmentDoc = gql`
    fragment ResourceDetailCard on ResourceDetailCard {
  _key
  _type
  title
  image {
    ...Image
  }
  description
}
    ${ImageFragmentDoc}`;
export const JamstackResourceSectionFragmentDoc = gql`
    fragment JamstackResourceSection on JamstackResourceSection {
  _key
  _type
  title
  resourceDetailCard {
    ...ResourceDetailCard
  }
  button {
    ...Button
  }
}
    ${ResourceDetailCardFragmentDoc}
${ButtonFragmentDoc}`;
export const RightSymbolTitleArrayFragmentDoc = gql`
    fragment RightSymbolTitleArray on RightSymbolTitleArray {
  _key
  _type
  jamstackCTEServiceList {
    ...JamstackCTEServiceList
  }
}
    ${JamstackCteServiceListFragmentDoc}`;
export const ThankyouFragmentDoc = gql`
    fragment Thankyou on Thankyou {
  _key
  _type
  image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const TitleContentFragmentDoc = gql`
    fragment TitleContent on TitleContent {
  _key
  _type
  title
  content {
    ...RichText
  }
}
    ${RichTextFragmentDoc}`;
export const UiUxDevelopmentSectionFragmentDoc = gql`
    fragment UiUxDevelopmentSection on UiUxDevelopmentSection {
  _key
  _type
  titleSubtitle {
    ...TitleSubtitle
  }
  description {
    ...RichText
  }
  uiUxImage: image {
    ...Image
  }
  appIconImage {
    ...IconTitleArray
  }
  sectionTheme
}
    ${TitleSubtitleFragmentDoc}
${RichTextFragmentDoc}
${ImageFragmentDoc}
${IconTitleArrayFragmentDoc}`;
export const GetAllPageDocument = gql`
    query getAllPage($filter: AllPageFilter) {
  allAllPage(where: $filter) {
    ...AllPage
  }
  allServiceType {
    ...ServiceType
  }
  allHireDedicatedPageTypes {
    ...HireDedicatedPageTypes
  }
}
    ${AllPageFragmentDoc}
${ServiceTypeFragmentDoc}
${HireDedicatedPageTypesFragmentDoc}`;
export const GetAllPagePathDocument = gql`
    query getAllPagePath($filter: AllPageFilter) {
  GetAllPagePath: allAllPage(where: $filter) {
    slug {
      current
    }
  }
}
    `;
export const GetBlogInnerPageDocument = gql`
    query getBlogInnerPage($filter: BlogInnerFilter, $limitFilter: Int, $blogFilter: BlogInnerFilter, $sortFilter: [BlogInnerSorting!], $allPageFilter: AllPageFilter, $blogSideContent: BlogInnerSideContentFilter) {
  allBlogInner(where: $filter) {
    ...BlogInner
  }
  limitedBlogs: allBlogInner(
    where: $blogFilter
    sort: $sortFilter
    limit: $limitFilter
  ) {
    ...BlogInner
  }
  allBlogInnerSideContent(where: $blogSideContent) {
    ...BlogInnerSideContent
  }
  allServiceType {
    ...ServiceType
  }
  allHireDedicatedPageTypes {
    ...HireDedicatedPageTypes
  }
  allAllPage(where: $allPageFilter) {
    ...HomeNavServices
  }
}
    ${BlogInnerFragmentDoc}
${BlogInnerSideContentFragmentDoc}
${ServiceTypeFragmentDoc}
${HireDedicatedPageTypesFragmentDoc}
${HomeNavServicesFragmentDoc}`;
export const GetAllBlogInnerPagePathDocument = gql`
    query getAllBlogInnerPagePath($filter: BlogInnerFilter) {
  GetAllBlogInnerPagePath: allBlogInner(where: $filter) {
    slug {
      current
    }
  }
}
    `;
export const GetBlogPageDocument = gql`
    query getBlogPage($filter: BlogFilter, $blogFilter: BlogInnerFilter, $allPageFilter: AllPageFilter, $sortFilter: [BlogInnerSorting!]) {
  allBlog(where: $filter) {
    ...Blog
  }
  allBlogInner(where: $blogFilter, sort: $sortFilter) {
    ...BlogPostCard
  }
  allServiceType {
    ...ServiceType
  }
  allHireDedicatedPageTypes {
    ...HireDedicatedPageTypes
  }
  allAllPage(where: $allPageFilter) {
    ...HomeNavServices
  }
  allCategory {
    ...Category
  }
}
    ${BlogFragmentDoc}
${BlogPostCardFragmentDoc}
${ServiceTypeFragmentDoc}
${HireDedicatedPageTypesFragmentDoc}
${HomeNavServicesFragmentDoc}
${CategoryFragmentDoc}`;
export const GetallCategoryDocument = gql`
    query getallCategory {
  allCategory {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;
export const GetHireDedicatedTypeDocument = gql`
    query getHireDedicatedType {
  allHireDedicatedPageTypes {
    ...HireDedicatedPageTypes
  }
}
    ${HireDedicatedPageTypesFragmentDoc}`;
export const GetHomePageDocument = gql`
    query getHomePage($filter: HomeFilter, $allPageFilter: AllPageFilter, $blogFilter: BlogInnerFilter, $limitFilter: Int, $sortFilter: [BlogInnerSorting!]) {
  allHome(where: $filter) {
    ...Home
  }
  allBlogInner(where: $blogFilter, sort: $sortFilter, limit: $limitFilter) {
    ...HomeBlogInner
  }
  allServiceType {
    ...ServiceType
  }
  allHireDedicatedPageTypes {
    ...HireDedicatedPageTypes
  }
  allAllPage(where: $allPageFilter) {
    ...HomeNavServices
  }
}
    ${HomeFragmentDoc}
${HomeBlogInnerFragmentDoc}
${ServiceTypeFragmentDoc}
${HireDedicatedPageTypesFragmentDoc}
${HomeNavServicesFragmentDoc}`;
export const GetallServiceTypesDocument = gql`
    query getallServiceTypes {
  allServiceType {
    ...ServiceType
  }
}
    ${ServiceTypeFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAllPage(variables?: GetAllPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPageQuery>(GetAllPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPage', 'query');
    },
    getAllPagePath(variables?: GetAllPagePathQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllPagePathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPagePathQuery>(GetAllPagePathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPagePath', 'query');
    },
    getBlogInnerPage(variables?: GetBlogInnerPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBlogInnerPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBlogInnerPageQuery>(GetBlogInnerPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogInnerPage', 'query');
    },
    getAllBlogInnerPagePath(variables?: GetAllBlogInnerPagePathQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllBlogInnerPagePathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllBlogInnerPagePathQuery>(GetAllBlogInnerPagePathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllBlogInnerPagePath', 'query');
    },
    getBlogPage(variables?: GetBlogPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBlogPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBlogPageQuery>(GetBlogPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogPage', 'query');
    },
    getallCategory(variables?: GetallCategoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetallCategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetallCategoryQuery>(GetallCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getallCategory', 'query');
    },
    getHireDedicatedType(variables?: GetHireDedicatedTypeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHireDedicatedTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHireDedicatedTypeQuery>(GetHireDedicatedTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHireDedicatedType', 'query');
    },
    getHomePage(variables?: GetHomePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageQuery>(GetHomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHomePage', 'query');
    },
    getallServiceTypes(variables?: GetallServiceTypesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetallServiceTypesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetallServiceTypesQuery>(GetallServiceTypesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getallServiceTypes', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;