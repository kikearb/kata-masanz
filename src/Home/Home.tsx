import * as React from "react";
import { Section } from "../_components/Section";
import { Title } from "../_components/Title";
import { Link } from "../_components/Link";
import { Layout } from "../_components/Layout";
import { Media } from "../_components/Media";
import { Text } from "../_components/Text";
import { Align } from "../_components/Align";
import { Button } from "../_components/Button";
import { ProductBox } from "../_components/ProductBox";
const apertura = require("../assets/images/apertura.jpg");

export const Home: React.SFC = () => (
  <Layout>
    <Section bar large titledSection className="u-flex">
      <Title className="u-font-hero u-font-rivendell@mobile u-text-center u-margin-bottom-none">
        Bienvenido a Rivendell
      </Title>
    </Section>
    <Section large>
      <Title as="h2" className="u-text-center u-margin-bottom u-bold u-font-h2">
        ¿Qué es Rivendell?
      </Title>
      <Text as="p" className="u-text-center u-margin-bottom-tiny">
        Rivendell es una coctelería - gastrobar en pleno centro de Pamplona
      </Text>
      <Text as="p" className="u-text-center u-margin-bottom-small">
        Perfecta para desconectar de la rutina, divertirse y estar con los
        amigos.
      </Text>
      <Text as="div" className="u-font-large u-text-center">
        Ven y&nbsp;
        <Link
          href="https://www.google.es/maps/place/Calle+de+la+Estafeta,+67,+31001+Pamplona,+Navarra/@42.8167019,-1.6420635,19z/data=!3m1!4b1!4m5!3m4!1s0xd5092feb7d8b03d:0xeb4095993ec2f2ab!8m2!3d42.8167009!4d-1.6415163"
          target="_blank"
        >
          ¡visítanos!
        </Link>
      </Text>
    </Section>
    <Section secondary large>
      <Media>
        <Media.Object image={apertura} />
        <Media.Body>
          <Title
            as="p"
            className="u-bold u-font-h2 u-white-text u-text-center u-margin-bottom"
          >
            Promoción apertura
          </Title>
          <Text as="p" className="u-margin-bottom u-white-text">
            Acercate a visitarnos el día de nuestra apertura y podrás disfrutar
            del evento de cata de cócteles que vamos a organizar.
            <br />
            En él mostraremos el proceso de elaboración de los cócteles más
            sofisticados de nuestra carta.
          </Text>
          <Align alignment="between">
            <Text as="p" className="u-white-text">
              Por tan solo&nbsp;
              <Title as="span" className="u-bold u-font-h2 u-valign-sub">
                30
              </Title>
              &nbsp;€
            </Text>
            <Button to="#" negative coctel={false}>
              infórmate
            </Button>
          </Align>
        </Media.Body>
      </Media>
    </Section>
    <Section large>
      <Title as="h3" className="u-font-h2 u-bold u-text-center u-margin-bottom">
        ¿Quieres celebrar algo con nosotros?
      </Title>
      <Text as="p" className="u-text-center u-margin-bottom">
        Si tienes algún evento en mente que te gustaría realizar en el local
        <br />o quieres celebrar alguna fiesta con nosotros (cumpleaños,
        despedidas,... ) no dudes en contactarnos.
      </Text>
      <Align alignment="center">
        <Button to="/contact" secondary>contacto</Button>
      </Align>
    </Section>
    <Section coctel large titledSection className="u-flex">
      <Align direction="column" alignment="center" vAlign="center">
        <Align alignment="center">
          <i className="icon icon--coctel u-icon-size-big u-margin-bottom" />
        </Align>
        <Title
          as="h4"
          className="u-font-h3 u-text-center u-uppercase u-black u-margin-bottom"
        >
          Crea tu propio cóctel
        </Title>
        <Text as="p" className="u-text-center u-margin-bottom">
          Disponemos de una gran variedad de ingredientes que harán volar tu
          imaginación, así como disfrutar a tus papilas gustativas.
        </Text>
        <Button to="#" negative coctel>
          Crea tu coctel
        </Button>
      </Align>
    </Section>
    <Section large>
      <Align alignment="center" media="tablet">
        <ProductBox>
          <Button to="/coctels" coctel negative={false} className="u-margin-bottom">
            Cócteles
          </Button>
          <Text as="p" uppercase>Nuestro producto estrella</Text>
        </ProductBox>
        <ProductBox>
          <Button to="/tapas" tapas className="u-margin-bottom">Tapas</Button>
          <Text as="p" uppercase>Por si tienes hambre...</Text>
        </ProductBox>
        <ProductBox>
          <Button to="/beers" beers className="u-margin-bottom">
            Cervezas
          </Button>
          <Text as="p" uppercase>Fresquita y espumosa</Text>
        </ProductBox>
        <ProductBox>
          <Button to="/coffeandmore" coffee className="u-margin-bottom">
            Bebidas calientes
          </Button>
          <Text as="p" uppercase>Una tacita caliente</Text>
        </ProductBox>
      </Align>
    </Section>
  </Layout>
);
