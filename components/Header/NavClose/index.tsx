import Link from "next/link";
import React from "react";
import Image from "../../Common/Image";
import { default as NextImage } from "next/image";
import close from "../../../app/assets/images/close.svg";
import {
  FooterFragment,
  HeaderFragment,
  NavbarLinksFragment,
} from "../../../app/api/generated/graphql/graphql";

export type NavCloseProps = {
  block?: HeaderFragment;
  onClickOpenNav: (val?: boolean) => void;
  footer?: FooterFragment;
};

const NavClose: React.FC<NavCloseProps> = ({
  block,
  footer,
  onClickOpenNav,
}) => {
  const { navItems, sectionTheme, toggleNavItems, logo } = block || {};
  const { address, email, phoneNo, subtitle, footerLogo } = footer || {};
  const NavItems = (item: NavbarLinksFragment) => {
    const { navLabel, navLink } = item || {};
    return (
      <React.Fragment>
        <li
          className="navItem ml-[3.125em]"
          onClick={() => onClickOpenNav(false)}
        >
          <Link
            href={navLink as string}
            className="text-[1.125em] text-black font-[500] hover:text-[#000ee6]"
          >
            {navLabel}
          </Link>
        </li>
      </React.Fragment>
    );
  };
  return (
    <div className="toggleBox">
      <div className="max-w-[1440px] w-[90%] mx-auto">
        <div className="py-[3.125em] flex justify-between items-center z-[999]">
          <div className="w-full flex justify-between items-center">
            <div className="logo">
              <Link href="/">{logo && <Image block={logo} />}</Link>
            </div>

            <div className="closeItem" onClick={() => onClickOpenNav(false)}>
              <div>
                <NextImage src={close} alt="close icon" className="w-auto" />
              </div>
            </div>
          </div>
          <div className="absolute hidden toggleGrid gridBox col2-1">
            <div className="leftside">
              <nav className="navigation">
                <ul className="navItemList toggleNavList">
                  {navItems?.map((item: NavbarLinksFragment, index) => {
                    return (
                      <React.Fragment key={index}>
                        {NavItems(item)}
                      </React.Fragment>
                    );
                  })}
                </ul>
              </nav>
              <div className="fullNav footerContent">
                <ul>
                  {toggleNavItems?.map((item, index) => {
                    const { navLabel, navLink } = item || {};
                    return (
                      <li key={index}>
                        <Link href={navLink as string}>{navLabel}</Link>
                      </li>
                    );
                  })}
                </ul>

                <ul className="socialLinks">
                  {footerLogo?.map((item, index) => {
                    const { ApplogoLink, title } = item || {};
                    return (
                      <li key={index}>
                        <Link href={ApplogoLink as string}>{title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="rightSide">
              <h5>{subtitle}</h5>
              <ul className="contactWrap">
                <li>
                  <Link href={`tel:${phoneNo || ""}`}>{phoneNo}</Link>
                </li>
                <li>
                  <Link href={`mailto:${email || ""}`}>{email}</Link>
                </li>
                <li className="address">
                  <a>{address}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NavClose);
