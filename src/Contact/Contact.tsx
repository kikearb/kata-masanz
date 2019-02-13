import * as React from "react";
import { Layout } from "../_components/Layout";
import { Section } from "../_components/Section";
import { Title } from "../_components/Title";
import { ContactData } from "../_components/ContactData";
import { Form } from "./Form";

export const Contact: React.SFC = () => (
  <Layout>
    <Section large>
      <Title className="u-text-center u-font-h2 u-margin-bottom">
        ¿Dónde estamos?
      </Title>
      <ContactData />
    </Section>
    <Section large>
      <Title className="u-text-center u-font-h3 u-margin-bottom">
        Rellena el formulario para contactar con nosotros
      </Title>
      <Form />
    </Section>
  </Layout>
);
