import * as React from "react";
import { Title } from "../../Title";
import { Link } from "react-router-dom";

interface Props {
  theme: "coctels" | "beers" | "tapas" | "coffeandmore";
}

let icon: string;

export const MenuItem: React.SFC<Props> = ({ theme, children }) => {
  switch (theme) {
    case "coctels":
      icon = "coctel";
      break;
    case "beers":
      icon = "beer";
      break;
    case "tapas":
      icon = "sandwich";
      break;
    case "coffeandmore":
      icon = "mug";
      break;
    default:
      break;
  }

  return (
    <div className={`main-menu__item theme-${theme}`}>
      <Link to={theme} className="main-menu__item-link u-theme-hovercolor u-theme-hoverbackground-color">
        <Title as="p" className="main-menu__item-link-text">
          {children}
        </Title>
        <i className={`icon icon--${icon} u-icon-size-large u-only-mobile`} />
      </Link>
    </div>
  );
};
