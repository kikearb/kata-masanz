import * as React from "react";
import { Wrapper, LinkWrapper } from "./Link.styles";

interface Props {
  href?: string;
  target?: string;
  className?: string;
  secondary?: boolean;
  routerLink?: boolean
}

export const Link: React.SFC<Props> = ({
  href,
  target,
  className,
  secondary,
  routerLink,
  children
}) => {
  if (routerLink)
    return (
      <LinkWrapper secondary={secondary} className={className}>
        {children}
      </LinkWrapper>
    );

  return (
    <Wrapper
      secondary={secondary}
      href={href}
      target={target}
      className={className}
    >
      {children}
    </Wrapper>
  );
};
