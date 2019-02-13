import * as React from "react";
import classnames from "classnames";

type Props =
  | NoStyleProps
  | SecondaryProps
  | BarProps
  | AperturaProps
  | CoctelProps
  | BeersProps
  | TapasProps
  | CoffeeProps;

interface SecondaryProps extends BaseProps {
  secondary: true;
  bar?: false;
  apertura?: false;
  coctel?: false;
  beers?: false;
  tapas?: false;
  coffee?: false;
}

interface BarProps extends BaseProps {
  secondary?: false;
  bar: true;
  apertura?: false;
  coctel?: false;
  beers?: false;
  tapas?: false;
  coffee?: false;
}

interface AperturaProps extends BaseProps {
  secondary?: false;
  bar?: false;
  apertura: true;
  coctel?: false;
  beers?: false;
  tapas?: false;
  coffee?: false;
}

interface CoctelProps extends BaseProps {
  secondary?: false;
  bar?: false;
  apertura?: false;
  coctel: true;
  beers?: false;
  tapas?: false;
  coffee?: false;
}

interface BeersProps extends BaseProps {
  secondary?: false;
  bar?: false;
  apertura?: false;
  coctel?: false;
  beers: true;
  tapas?: false;
  coffee?: false;
}

interface TapasProps extends BaseProps {
  secondary?: false;
  bar?: false;
  apertura?: false;
  coctel?: false;
  beers?: false;
  tapas: true;
  coffee?: false;
}

interface CoffeeProps extends BaseProps {
  secondary?: false;
  bar?: false;
  apertura?: false;
  coctel?: false;
  beers?: false;
  tapas?: false;
  coffee: true;
}

interface NoStyleProps extends BaseProps {
  secondary?: false;
  bar?: false;
  apertura?: false;
  coctel?: false;
  beers?: false;
  tapas?: false;
  coffee?: false;
}

interface BaseProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  titledSection?: boolean;
  className?: string;
}

export const Section: React.SFC<Props> = props => (
  <section
    className={classnames(
      "section o-section",
      {
        "section--secondary": props.secondary,
        "section--bar": props.bar,
        "section--apertura": props.apertura,
        "section--coctel": props.coctel,
        "section--beers": props.beers,
        "section--tapas": props.tapas,
        "section--coffee": props.coffee,
        "o-section--small": props.small,
        "o-section--medium": props.medium,
        "o-section--large": props.large
      },
      props.className
    )}
  >
    <div
      className={classnames("container-fluid", {
        "u-flex u-flex-align-center u-flex-justify-center": props.titledSection
      })}
    >
      {props.children}
    </div>
  </section>
);
