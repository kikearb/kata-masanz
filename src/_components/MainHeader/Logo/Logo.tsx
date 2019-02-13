import * as React from "react";
import { Title } from "../../Title";
import { Logolink, Wrapper } from "./Logo.styles";

export const Logo: React.SFC = () => (
    <Wrapper to="/">
      <Title className="u-margin-none">
        <Logolink>Rivendell</Logolink>
      </Title>
    </Wrapper>
);
