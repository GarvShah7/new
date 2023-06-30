import clsx from "clsx";
import React, { PropsWithChildren } from "react";

import Link from "../Link";
import { LinkFragment } from "../../../app/api/generated/graphql/graphql";

const Customlink: React.FC<PropsWithChildren<{ block: LinkFragment }>> = ({
  block,
  ...props
}) => {
  const { href, linkTarget, title, linkType } = block || {};
  return (
    <div className={clsx("arrowLink", linkType ?? "withoutArrow")}>
      <Link
        to={href}
        target={linkTarget || ""}
        className={clsx("link", linkType ?? "withoutArrow")}
      >
        {linkType && linkType === "withArrow" && <i className="arrowIcon" />}
        <span>{title}</span>
      </Link>
    </div>
  );
};
export default Customlink;
