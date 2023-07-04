import React, { useState, memo } from "react";
import clsx from "clsx";
import dynamic from "next/dynamic";

const NavOpen = dynamic(() => import("./NavOpen"));
const NavClose = dynamic(() => import("./NavClose"));

type HeaderProps = {
  block?: HeaderFragment;
  footer?: FooterFragment;
  allServicesTypes?: ServiceTypeFragment[];
  servicesPage?: HomeNavServicesFragment[];
  hireDedicatedType?: HireDedicatedPageTypesFragment[];
  hireDedicatedPages?: HomeNavServicesFragment[];
};

const Header: React.FC<HeaderProps> = memo(
  ({
    block,
    footer,
    allServicesTypes,
    servicesPage,
    hireDedicatedType,
    hireDedicatedPages,
  }) => {
    const { sectionTheme } = block || {};
    const [navOpen, setNavOpen] = useState(false);

    const openNav = (val: boolean) => {
      setNavOpen(val);
    };

    const bodyClass = navOpen ? "modal-open" : "";

    return (
      <div className="block bg-black">
        <header className={clsx("headerSection", sectionTheme ?? "bg-white")}>
          {!navOpen && (
            <NavOpen
              onClickOpenNav={openNav}
              hireDedicatedPages={hireDedicatedPages}
              hireDedicatedType={hireDedicatedType}
              servicesPage={servicesPage}
              allServicesTypes={allServicesTypes}
              block={block}
            />
          )}
          {navOpen && (
            <NavClose block={block} onClickOpenNav={openNav} footer={footer} />
          )}
        </header>
      </div>
    );
  }
);

export default Header;
