import * as React from "react";
import { Layout } from "../_components/Layout";
import { Section } from "../_components/Section";
import { Title } from "../_components/Title";

export const Tapas: React.SFC = () => (
  <Layout>
    <Section tapas large titledSection className="u-flex">
      <Title className="u-font-hero u-font-h1@mobile u-uppercase u-margin-bottom u-white-text">
        Tapas
      </Title>
    </Section>
  </Layout>
);
