import * as React from "react";
import { Wrapper, MainWrapper } from "./Button.styles";

type Props =
  | SecondaryProps
  | NegativeProps
  | BeersProps
  | TapasProps
  | CoffeeProps;

interface SecondaryProps extends BaseProps {
  secondary: true;
  negative?: false;
  coctel?: false;
  beers?: false;
  tapas?: false;
  coffee?: false;
}

interface NegativeProps extends BaseProps {
  secondary?: false;
  negative: boolean;
  coctel: boolean;
  beers?: false;
  tapas?: false;
  coffee?: false;
}

interface BeersProps extends BaseProps {
  secondary?: false;
  negative?: false;
  coctel?: false;
  beers?: true;
  tapas?: false;
  coffee?: false;
}

interface TapasProps extends BaseProps {
  secondary?: false;
  negative?: false;
  coctel?: false;
  beers?: false;
  tapas: true;
  coffee?: false;
}

interface CoffeeProps extends BaseProps {
  secondary?: false;
  negative?: false;
  coctel?: false;
  beers?: false;
  tapas?: false;
  coffee: true;
}

interface BaseProps {
  className?: string;
  to: string;
}

export const Button: React.SFC<Props> = ({
  secondary,
  negative,
  coctel,
  beers,
  tapas,
  coffee,
  className,
  to,
  children
}) => (
  <MainWrapper to={to}>
    <Wrapper
      secondary={secondary}
      negative={negative}
      coctel={coctel}
      beers={beers}
      tapas={tapas}
      coffee={coffee}
      className={className}
    >
      {children}
    </Wrapper>
  </MainWrapper>
);
