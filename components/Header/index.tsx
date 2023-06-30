import {
  FooterFragment,
  HeaderFragment,
  HireDedicatedPageTypesFragment,
  HomeNavServicesFragment,
  ServiceTypeFragment,
} from "../../app/api/generated/graphql/graphql";
import clsx from "clsx";
import { useState } from "react";
import React from "react";
import dynamic from "next/dynamic";
const NavOpen = dynamic(() => import("./NavOpen"));
const NavClose = dynamic(() => import('./NavClose'))

export type HeaderProps = {
  block?: HeaderFragment;
  footer?: FooterFragment;
  allServicesTypes?: ServiceTypeFragment[];
  servicesPage?: HomeNavServicesFragment[];
  hireDedicatedType?: HireDedicatedPageTypesFragment[];
  hireDedicatedPages?: HomeNavServicesFragment[];
};

const Header: React.FC<HeaderProps> = ({
  block,
  footer,
  allServicesTypes,
  servicesPage,
  hireDedicatedType,
  hireDedicatedPages,
}) => {
  const {sectionTheme} = block || {}
  const [navOpen, setNavOpen] = useState(false);
  const openNav = (val: boolean) => {
    if (val) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setNavOpen(val);
  };
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
        {navOpen && <NavClose block={block} onClickOpenNav={openNav} footer={footer} />}
      </header>
    </div>
  );
};

export default React.memo(Header);
