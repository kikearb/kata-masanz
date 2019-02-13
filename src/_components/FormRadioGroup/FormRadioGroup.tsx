import * as React from "react";
import { Wrapper, Input, Label, Checkbox } from "./FormRadioGroup.styles";

interface Props {
    name: string;
}

export const FormRadioGroup: React.SFC<Props> = ({name}) => (
  <Wrapper>
    <Input type="checkbox" name={name} id={name} />
    <Checkbox />
    <Label htmlFor={name}>¿Quieres subscribirte a nuestra newsletter?</Label>
  </Wrapper>
);
