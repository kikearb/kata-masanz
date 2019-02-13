import * as React from 'react';
import { Wrapper, Label, Input } from "./FormGroup.styles";

interface Props {
    name: string;
}

export const FormGroup: React.SFC<Props> = ({name}) => (
    <Wrapper>
        <Label htmlFor={name}>
            {name}
        </Label>
        <Input type="text" name={name} id={name} />
    </Wrapper>
);