import * as React from "react";
import { Layout } from "../_components/Layout";
import { Section } from "../_components/Section";
import { Title } from "../_components/Title";
import { Text } from "../_components/Text";
import { Separator } from "../_components/Separator";

export { Coctels };

const Coctels: React.SFC = () => (
  <Layout>
    <Section coctel large titledSection className="u-flex">
      <Title className="u-font-hero u-font-h1@mobile u-uppercase u-margin-bottom u-white-text">
        Cócteles
      </Title>
    </Section>
    <Section medium>
      <Text as="p">
        Disponemos de una amplia carta de cócteles para que elijas el que más te
        atraiga, tenemos cócteles con y sin alcohol, ¡para todos los públicos!
      </Text>
    </Section>
    <Section large>
        <Title as="h2" className="u-text-center">Cócteles con alcohol</Title>
        <Separator secondary />
    </Section>
  </Layout>
);
