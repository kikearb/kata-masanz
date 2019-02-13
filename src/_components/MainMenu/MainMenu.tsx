import * as React from "react";
import { MenuItem } from "./MenuItem";
import { Wrapper, Menu } from "./MainMenu.styles";

interface Props {
  isVisible?: boolean;
}

export const MainMenu: React.SFC<Props> = ({isVisible}) => (
  <Menu mobileVisible={isVisible}>
    <Wrapper>
      <MenuItem theme="coctels">Cócteles</MenuItem>
      <MenuItem theme="tapas">Tapas</MenuItem>
      <MenuItem theme="beers">Cervezas</MenuItem>
      <MenuItem theme="coffeandmore">Bebidas calientes</MenuItem>
    </Wrapper>
  </Menu>
);
