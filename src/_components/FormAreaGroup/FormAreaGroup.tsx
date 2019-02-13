import * as React from 'react';
import { Wrapper, Label, TextArea } from "./FormAreaGroup.styles";

interface Props {
    name: string;
}

export const FormAreaGroup: React.SFC<Props> = ({name}) => (
    <Wrapper>
        <Label htmlFor={name}>
            {name}
        </Label>
        <TextArea cols={30} rows={10} name={name} id={name} />
    </Wrapper>
);