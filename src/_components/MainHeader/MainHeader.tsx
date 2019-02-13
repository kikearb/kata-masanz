import * as React from "react";
import { Logo } from "./Logo";
import { MainMenu } from "../MainMenu";
import { MobileMenuIcon, Header } from "./MainHeader.styles";

interface State {
  menuVisible: boolean;
}

export class MainHeader extends React.Component<{}, State> {
  state = { menuVisible: false };

  handleClick = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  };

  render() {
    const { menuVisible } = this.state;
    return (
      <Header>
        <div className="main-header-container">
          <div className="main-header__title">
            <Logo />
          </div>
          <MobileMenuIcon onClick={this.handleClick}>
            <i className={`icon icon--${!menuVisible ? 'menu' : 'close'} u-icon-size-normal`} />
          </MobileMenuIcon>
          <MainMenu isVisible={menuVisible} />
        </div>
      </Header>
    );
  }
}
