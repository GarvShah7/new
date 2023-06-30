import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { ButtonFragment } from "../../../app/api/generated/graphql/graphql";
import Link from "next/link";

const Button: React.FC<
  PropsWithChildren<
    { block?: ButtonFragment } & React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > 
  >
> = ({ block, ...props }) => {
  const { buttonType, buttonLabel, buttonLink, buttonTarget } = block || {};
  return block ? (
    <Link
      className={clsx("button font-Montserrat text-[0.875em] font-[600] text-[white] bg-blue py-[1.071em] px-[1.786em] tracking-[0.025em] rounded-[10px]", buttonType ?? "black")}
      href={buttonLink || ""}
      target={buttonTarget || ""}
    >
      {buttonLabel}
    </Link>
  ) : (
    <button className={clsx("")} {...props}>{props.children}</button>
  );
};
export default React.memo(Button);
