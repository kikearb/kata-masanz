import * as React from "react";
import { Row } from "../_components/Grid";
import { FormGroup } from "../_components/FormGroup";
import { FormAreaGroup } from "../_components/FormAreaGroup";
import { FormRadioGroup } from "../_components/FormRadioGroup";
import { ButtonRow } from "./Form.styles";
import { Button } from "../_components/Button";

export const Form: React.SFC = () => (
  <form>
    <Row>
      <div className="col-sm-6 col-md-4 col-md-offset-2">
        <FormGroup name="nombre" />
      </div>
      <div className="col-sm-6 col-md-4">
        <FormGroup name="asunto" />
      </div>
    </Row>
    <Row>
      <div className="col-xs-12 col-md-8 col-md-offset-2">
        <FormAreaGroup name="mensaje" />
      </div>
    </Row>
    <Row>
      <div className="col-xs-12 col-md-8 col-md-offset-2">
        <FormRadioGroup name="newsletter" />
      </div>
    </Row>
    <ButtonRow>
      <Button to="#" secondary>
        Enviar
      </Button>
    </ButtonRow>
  </form>
);
