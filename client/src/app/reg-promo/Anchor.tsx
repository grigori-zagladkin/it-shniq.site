"use client";

import clsx from "clsx";
import { FC, MouseEvent } from "react";

const Anchor: FC<{
  link: string;
  label: string;
  className?: string;
  copyOnClick?: boolean;
}> = ({ link, label, className, copyOnClick = false, ...otherProps }) => {
  return (
    <a
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        if (copyOnClick) {
          event.preventDefault();
          navigator.clipboard.writeText(label).then(() => {
            window.location.href = link;
          });
        }
      }}
      href={link}
      target="_blank"
      className={clsx(
        "text-blue-500 hover:underline underline-offset-3",
        className
      )}
      {...otherProps}
    >
      {label}
    </a>
  );
};

export default Anchor;
