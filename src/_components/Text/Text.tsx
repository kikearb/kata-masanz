import * as React from "react";
import classnames  from "classnames";

interface Props {
  as?: "p" | "div" | "span";
  uppercase?: boolean;
  className?: string;
}

export const Text: React.SFC<Props> = ({
  as: As = "span",
  uppercase,
  className,
  children
}) => (
  <As className={classnames(className, { "u-uppercase": uppercase })}>
    {children}
  </As>
);
