import * as React from "react";
import { Wrapper, Item } from "./Social.styles";
import { Text } from "../Text";

export const Social: React.SFC = () => (
  <Wrapper>
    <Item className="social--twitter">
      <Text className="u-sr-only">Twitter</Text>
    </Item>
    <Item className="social--facebook">
      <Text className="u-sr-only">Facebook</Text>
    </Item>
    <Item className="social--instagram">
      <Text className="u-sr-only">Instagram</Text>
    </Item>
    <Item className="social--google">
      <Text className="u-sr-only">Google +</Text>
    </Item>
  </Wrapper>
);
