/* eslint-disable*/

import AuthorCardSection from "../Common/AuthorCardSection";
import AuthorQouteSection from "../Common/AuthorQouteSection";
import Button from "../Common/Button";
import imageRichTextCardSection from "../Common/CompanyVisionSection/ImageRichTextCardSection";
import Image from "../Common/Image";
import Customlink from "../Common/CustomLink";
import HiringModelDetails from "../Common/HiringModelSection/HiringModelDetails";
import IconTitleArray from "../Common/IconTitleArray";
import ImageTitleDescriptionDetails from "../Common/ImageTitleDescription/ImageTitleDescriptiondetails";
import JamStackResourceSection from "../Common/JamstackResourceSection";
import RichTextSection from "../Common/RichTextSection";
import RightSymbolTitleArray from "../Common/RightSymbolTitleArray";
import TitleButton from "../Common/TitleButton";
import TitleContent from "../Common/TitleContent";
import TitleSubtitle from "../Common/TitleSubtitle";
import ImageTitle from "../Common/TitleWithSliderImageSection/ImageTitle";
import FooterAppLogos from "../Footer/FooterAppLogos";
import FooterNavItems from "../Footer/FooterNavItems";
import FooterTitleLinkList from "../Footer/FooterTitleLinkList";
import ServicesDetails from "../HomePage/HomeServicesSection/ServiceDetails";

const DynamicComponent: React.FC<{ block: any }> = ({ block, ...props }) => {
  const Components = {
    titleContent:TitleContent,
    imageRichTextCardSection:imageRichTextCardSection,
    servicesDetails:ServicesDetails,
    navbarLinks: FooterNavItems,
    footerLogo: FooterAppLogos,
    hiringModelDetails:HiringModelDetails,
    customImage: Image,
    button: Button,
    footerTitleLinkList: FooterTitleLinkList,
    link: Customlink,
    IconTitleArray:IconTitleArray,
    imageTitleDescriptionDetails:ImageTitleDescriptionDetails,
    titleButton:TitleButton,
    jamstackResourceSection:JamStackResourceSection,
    authorCardSection:AuthorCardSection,
    authorQoute:AuthorQouteSection,
    richText: RichTextSection,
    titleSubtitle: TitleSubtitle,
    rightSymbolTitleArray:RightSymbolTitleArray,
    imageTitle:ImageTitle
  };
  const Component = Components[block?._type as keyof typeof Components];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  return Component ? <Component block={block} {...props} /> : null;
};

export default DynamicComponent;
