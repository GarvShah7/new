import { LinkProps, default as NextLink } from "next/link";
import React, { PropsWithChildren } from "react";
export const getLink = (url?: string) => {
  const url_pre = url?.startsWith("/") ? url : "/" + String(url);
  const url_final = url_pre[url_pre?.length - 1] == "/" ? url_pre : url_pre;
  return url_final;
};
const Link: React.FC<
  PropsWithChildren<
    Omit<LinkProps & React.RefAttributes<HTMLAnchorElement>, "to" | "href"> & {
      to: string | null | undefined;
      target?: React.HTMLAttributeAnchorTarget;
      className?: string;
    }
  >
> = ({ to, target, children, className, ...props }) => {
  if (!to) {
    return (
      <a className={className} {...props}>
        {children}
      </a>
    );
  } else if (
    to.startsWith("http") ||
    to.startsWith("mailto:") ||
    to.startsWith("tel:")
  ) {
    return (
      <a
        href={to}
        target={target ?? "_blank"}
        className={className}
        rel="nofollow"
      >
        {children}
      </a>
    );
  }
  return (
    <NextLink
      href={getLink(to)}
      target={target || "_self"}
      {...props}
      className={className}
    >
      {children}
    </NextLink>
  );
};

export default React.memo(Link);
