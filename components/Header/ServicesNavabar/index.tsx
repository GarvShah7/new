import React from "react";
import { useState } from "react";
import { AllPageFragment, HomeNavServicesFragment } from "../../../app/api/generated/graphql/graphql";
import Image from "../../Common/Image";
import Link from "../../Common/Link";
export type ServicesNavbarFragment = {
  label: string | null | undefined;
  data: HomeNavServicesFragment[] | undefined;
};
const ServicesNavbar: React.FC<{
  block: ServicesNavbarFragment;
}> = ({ block }) => {
  const [isLinkActive, setLinkActive] = useState(false);
  const linkClass = () => {
    setLinkActive(!isLinkActive);
  };
  return (
    <React.Fragment>
      <div className="dropdownBoxTitle">
        <h4>{block?.label}</h4>
      </div>
      <ul className="dropdownLinkGrid">
        {block?.data?.map((item, index) => {
          const { slug, logo, title } = item || {};
          const {current} = slug || {}
          return (
            <li key={index}>
              <Link to={current} onClick={linkClass}>
                <div className="logoIcon">
                  {logo && <Image block={logo} />}
                </div>
                <span>{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};
export default React.memo(ServicesNavbar);
