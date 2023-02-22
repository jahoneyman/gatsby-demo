import React from "react";
import clsx from "clsx";

const styles = {
  size: {
    "2xl": "text-8xl font-bold leading-dense",
    xl: "text-7xl font-bold leading-dense",
    lg: "text-[72px] font-bold leading-tight 2xl:text-6xl xl:text-[56px] xl:leading-dense md:text-[44px]",
    md: "text-6xl font-bold leading-dense",
    sm: "text-4xl font-semibold",
    xs: "text-base font-bold tracking-wider uppercase",
  },
  theme: {
    white: "text-white",
    black: "text-black dark:text-white",
  },
};

interface IHeading {
  className: string;
  tag: keyof JSX.IntrinsicElements;
  size: string;
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element) | null;
}

const Heading: React.FunctionComponent<IHeading & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  className: additionalClassName = null,
  tag: Tag = "div",
  size = null,
  children,
  ...otherProps
}) => {
  const className = clsx(styles.size[size!], additionalClassName);
  return (
    <Tag className={className} {...otherProps}>
      {children}
    </Tag>
  );
};

export default Heading;
