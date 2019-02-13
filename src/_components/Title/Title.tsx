import * as React from "react";
import classnames from "classnames";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
  className?: string;
}

export const Title: React.SFC<Props> = ({
  as: As = "h1",
  className,
  children
}) => <As className={classnames("u-title", className)}>{children}</As>;
