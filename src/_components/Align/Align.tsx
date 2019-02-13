import * as React from "react";
import { Wrapper } from "./Align.styles";

interface Props {
  alignment: "start" | "center" | "end" | "between" | "around";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  vAlign?: "start" | "center" | "end" | "between" | "around";
  media?: string;
  className?: string;
}

export const Align: React.SFC<Props> = ({
  alignment,
  direction,
  vAlign,
  media,
  className,
  children
}) => (
  <Wrapper
    direction={direction}
    alignment={alignment}
    vAlign={vAlign}
    media={media}
    className={className}
  >
    {children}
  </Wrapper>
);
