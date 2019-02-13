import * as React from "react";
import { Layout } from "../_components/Layout";
import { Section } from "../_components/Section";
import { Title } from "../_components/Title";

export const Beers: React.SFC = () => (
  <Layout>
    <Section beers large titledSection className="u-flex">
      <Title className="u-font-hero u-font-h1@mobile u-uppercase u-margin-bottom u-white-text">
        Cervezas
      </Title>
    </Section>
  </Layout>
);
