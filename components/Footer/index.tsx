import clsx from "clsx"
import { FooterFragment } from "../../app/api/generated/graphql/graphql"
import Link from "next/link"

import ScrollToTop from "react-scroll-to-top"
import DynamicComponent from "../DynamicComponent"


const Footer: React.FC<{ block: FooterFragment }> = ({ block }) => {
    const {
        mainTitle,
        address,
        email,
        phoneNo,
        subtitle,
        footerbar,
        image,
        title,
        // footerImage,
        footerNavItems,
        footerLogo,
        sectionTheme,
        footerTitleLinkList,
    } = block || {}

    return (
        <footer className={clsx('footerSection sectionInnerSpace mt-[8.125em] mb-[3.125em]', sectionTheme ?? 'bg-white')}>
            <div className="footerTop">
                <div className="container max-w-[1440px] w-[90%] mx-auto bg-black rounded-t-lg pt-[3.75em] pb-0 pr-[4.375em] pl-[3.75em]">
                    <div className="footerTopContent gridBox bg-blackWithRadius text-white grid grid-cols-2">
                        <div className="leftSide font-Montserrat pb-[4.375em]">
                            <h2 className="text-[3em] max-w-[80%] pb-[0.5em] font-[700]">{mainTitle}</h2>
                            <h5 className="font-[600] pb-[1.7em] text-white text-[1.5em] leading-[1.4]">{subtitle}</h5>
                            <ul className="contactWrap">
                                <li className="pb-[0.3em]">
                                    <Link href={`tel:${phoneNo || ''}`} className="text-[1em] font-[500] leading-[1.7] text-white hover:text-blue">{phoneNo}</Link>
                                </li>
                                <li className="pb-[0.3em]">
                                    <Link href={`mailto:${email || ''}`} className="text-[1em] font-[500] leading-[1.7] text-white hover:text-blue">{email}</Link>
                                </li>
                                <li className="address max-w-[50%] pt-[1.3em]">
                                    <span className="text-[1em] font-[500] leading-[1.7] text-white hover:text-blue">{address}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="rightSide flex flex-col items-end">
                            <div className="footerNav gridBox col3 w-[50%]">
                                <ul className="mainNav grid grid-cols-2 grid-rows-4 [&>li]:pb-[1.125em] [&>li>a]:text-[1em] [&>li>a]:font-[700]">
                                    {footerNavItems?.map((item, index) => {
                                        return <DynamicComponent block={item} key={index} />
                                    })}
                                </ul>

                                {/* {footerTitleLinkList?.map((item, index) => {
                                    return (
                                        <ul className="sideNav" key={index}>
                                            <DynamicComponent block={item} />
                                        </ul>
                                    )
                                })} */}
                            </div>

                            <div className="footerPersons flex flex-col justify-end [&>img]:hidden ">
                                {image?.map((image, index) => {
                                    return <DynamicComponent block={image} key={index} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="container max-w-[1440px] w-[90%] mx-auto bg-[#eee] rounded-b-lg py-[1.75em] px-[4.375em]">
                    <div className="footerBottomContent gridBox flex items-center justify-between">
                        <h6 className="font-Montserrat font-[500] text-[1em] leading-[1.4] text-black">{footerbar}</h6>
                        <ul className="socialWrap flex items-center justify-end">
                            {footerLogo?.map((logo, index) => {
                                return (
                                    <li key={index} className="pl-[0.625em]">
                                        <DynamicComponent block={logo} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <ScrollToTop
                smooth
                color="white"
                width="50"
                height="50"
                viewBox="0 0 100 100"
                svgPath="M66.3176 47.9925C65.8455 48.4645 65.2902 48.7 64.6515 48.6989C64.0129 48.7 63.4575 48.4645 62.9855 47.9925L49.657 34.664L36.3285 47.9925C35.8564 48.4645 35.3011 48.7 34.6624 48.6989C34.0238 48.7 33.4684 48.4645 32.9964 47.9925C32.5243 47.5204 32.2883 46.9645 32.2883 46.3248C32.2883 45.6872 32.5243 45.1324 32.9964 44.6604L47.9909 29.6658C48.463 29.1938 49.0178 28.9578 49.6553 28.9578C50.2951 28.9578 50.851 29.1938 51.323 29.6658L66.3176 44.6604C66.7896 45.1324 67.0251 45.6878 67.024 46.3264C67.0251 46.9651 66.7896 47.5204 66.3176 47.9925ZM66.3176 64.6531C65.8455 65.1252 65.2902 65.3606 64.6515 65.3595C64.0129 65.3606 63.4575 65.1252 62.9855 64.6531L49.657 51.3246L36.3285 64.6531C35.8564 65.1252 35.3011 65.3606 34.6624 65.3595C34.0238 65.3606 33.4684 65.1252 32.9964 64.6531C32.5243 64.1811 32.2883 63.6251 32.2883 62.9854C32.2883 62.3478 32.5243 61.793 32.9964 61.321L47.9909 46.3264C48.463 45.8544 49.0183 45.6178 49.657 45.6167C50.2956 45.6178 50.851 45.8544 51.323 46.3264L66.3176 61.321C66.7896 61.793 67.0257 62.3478 67.0257 62.9854C67.0257 63.6251 66.7896 64.1811 66.3176 64.6531Z"
            />
        </footer>
    )
}

export default Footer
