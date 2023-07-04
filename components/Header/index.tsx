import React, { useState, useEffect, lazy, Suspense } from "react";
import clsx from "clsx";
import {
  FooterFragment,
  HeaderFragment,
  HireDedicatedPageTypesFragment,
  HomeNavServicesFragment,
  ServiceTypeFragment,
} from "../../app/api/generated/graphql/graphql";

const NavOpen = lazy(() => import("./NavOpen"));
const NavClose = lazy(() => import("./NavClose"));

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
  const { sectionTheme } = block || {};
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [navOpen]);

  const openNav = (val: boolean) => {
    setNavOpen(val);
  };

  return (
    <div className="block bg-black">
      <header className={clsx("headerSection", sectionTheme ?? "bg-white")}>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </header>
    </div>
  );
};

export default React.memo(Header);
