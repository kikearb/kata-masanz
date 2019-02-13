import * as React from "react";
import { Wrapper, Item, Map, InfoItem } from "./ContactData.styles";
import { Text } from '../Text';

export const ContactData: React.SFC = () => (
  <Wrapper>
    <Item className="u-flex@md u-margin-bottom@only-mobile">
        <InfoItem>
            <Text as="p" className="u-bold u-font-large u-margin-bottom-tiny">
                Dirección
            </Text>
            <Text as="p" className="u-margin-bottom">
                Calle estafeta, 67
                <br />
                Pamplona, Navarra
            </Text>
            <Text as="p" className="u-bold u-font-large u-margin-bottom-tiny">
                Email
            </Text>
            <Text as="p">
            info@rivendell.com</Text>
        </InfoItem>
        <InfoItem>
            <Text as="p" className="u-bold u-font-large u-margin-bottom-tiny">Teléfono</Text>
            <Text as="p">661 661 661</Text>
        </InfoItem>
    </Item>
    <Item>
      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d731.6646395157793!2d-1.6420634707784354!3d42.8167008986974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5092feb7d8b03d%3A0xeb4095993ec2f2ab!2sCalle+de+la+Estafeta%2C+67%2C+31001+Pamplona%2C+Navarra!5e0!3m2!1ses!2ses!4v1510321519632"
        frameBorder="0"
      />
    </Item>
  </Wrapper>
);
