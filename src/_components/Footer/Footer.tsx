import * as React from "react";
import { Wrapper, ContentWrapper, LinkWrapper } from "./Footer.styles";
import { Text } from "../Text";
import { Social } from "../Social";
import { Link } from "../Link";

export const Footer = () => (
  <Wrapper>
    <Social />
    <ContentWrapper>
      <LinkWrapper to="/contact">
        <Link
          routerLink
          secondary
          className="u-margin-bottom-small@only-mobile u-margin-right@only-mobile"
        >
          Contacto
        </Link>
      </LinkWrapper>
      <Link
        secondary
        href="https://www.google.es/maps/place/Calle+de+la+Estafeta,+67,+31001+Pamplona,+Navarra/@42.8167019,-1.6420635,19z/data=!3m1!4b1!4m5!3m4!1s0xd5092feb7d8b03d:0xeb4095993ec2f2ab!8m2!3d42.8167009!4d-1.6415163"
        target="_blank"
        className="u-margin-bottom-small@only-mobile order3"
      >
        Visítanos
      </Link>
      <Text as="p" className="order2">
        &copy; 2017 Rivendell
      </Text>
    </ContentWrapper>
  </Wrapper>
);
