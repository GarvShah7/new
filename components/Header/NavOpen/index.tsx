import React, { useState } from "react";
import {
  HeaderFragment,
  HireDedicatedPageTypesFragment,
  HomeNavServicesFragment,
  NavbarLinksFragment,
  ServiceTypeFragment,
} from "../../../app/api/generated/graphql/graphql";
import toggle from "../../../app/assets/images/toggle.png";
import dynamic from "next/dynamic";

const ServicesNavbar = dynamic(() => import("../ServicesNavabar"));
const Image = dynamic(() => import("../../Common/Image"));
const Link = dynamic(() => import("next/link"));
const NextImage = dynamic(() => import('next/image'))


export type NavOpenProps = {
  block?: HeaderFragment;
  allServicesTypes?: ServiceTypeFragment[];
  servicesPage?: HomeNavServicesFragment[];
  hireDedicatedType?: HireDedicatedPageTypesFragment[];
  hireDedicatedPages?: HomeNavServicesFragment[];
  onClickOpenNav: (val?: boolean) => void;
};

const NavOpen: React.FC<NavOpenProps> = ({
  allServicesTypes,
  block,
  servicesPage,
  hireDedicatedType,
  hireDedicatedPages,
  onClickOpenNav,
}) => {
  const { navItems, logo } = block || {};

  const extractedSubItems = allServicesTypes?.map((i) => {
    const data =
      servicesPage &&
      servicesPage.filter((item) => item?.service_types?.label == i?.label);
    return { label: i?.label, data: data };
  });

  const extractedSubItemsOfHireDedicated = hireDedicatedType?.map((item) => {
    const data =
      hireDedicatedPages &&
      hireDedicatedPages?.filter(
        (i) => i?.hire_dedicated_page_types?.label == item?.label
      );
    return { label: item?.label, data: data };
  });
  const [isLinkActive, setLinkActive] = useState(false);
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
    <div className="max-w-[1440px] w-[90%] mx-auto">
      <div className="py-[3.125em] flex justify-between items-center z-[999]">
        <div className="logo">
          <Link href="/">{logo && <Image block={logo} />}</Link>
        </div>
        <nav className="navigation">
          <ul className="flex items-center font-Montserrat">
            {/* dropdown */}
            <li className="navItem dropdown">
              <Link
                href="/services"
                target="_self"
                className="text-[1.125em] text-black font-[500] hover:text-[#000ee6]"
              >
                Services
              </Link>
              <div
                className={`dropdown-content absolute ${
                  isLinkActive ? "none" : "block"
                }`}
              >
                <div
                  className={`dropdownGrid col-${
                    extractedSubItems && extractedSubItems?.length - 1
                  }`}
                >
                  {extractedSubItems
                    ?.filter((i) => i?.data?.length != 0)
                    ?.map((i, index) => {
                      return (
                        <div className="dropdownBox" key={index}>
                          {i && <ServicesNavbar block={i} />}
                        </div>
                      );
                    })}
                </div>
              </div>
            </li>
            {/* ====== */}
            <li className="navItem dropdown hireDeveloperIte ml-[3.125em]">
              <Link
                href="/services"
                target="_self"
                className="text-[1.125em] text-black font-[500] hover:text-[#000ee6]"
              >
                Hire Developers
              </Link>
              <div
                className={`dropdown-content absolute ${
                  isLinkActive ? "none" : "block"
                }`}
              >
                <div className="dropdownGrid col-1">
                  {extractedSubItemsOfHireDedicated?.map((i, index) => {
                    return (
                      <div className="dropdownBox" key={index}>
                        {i && <ServicesNavbar block={i} />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
            {/* dropdown */}
            {navItems?.map((item: NavbarLinksFragment, index) => {
              return (
                <React.Fragment key={index}>
                  {NavItems(item)}
                  </React.Fragment>
              );
            })}
            <li
              className="navItem withToggle ml-[4em]"
              onClick={() => onClickOpenNav(true)}
            >
              <div className="toggleIcon">
                <NextImage src={toggle} alt="toggle" className="w-auto" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default React.memo(NavOpen);
