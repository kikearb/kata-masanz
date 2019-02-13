import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
`;

export const Input = styled.input`
  display: none;
`;

export const Checkbox = styled.span`
  &::before {
    content: "\\e908";
    font-family: "icon-font";
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    speak: none;
    vertical-align: middle;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
  }

  ${Input}:checked + & {
    &::before {
      content: "\\e907";
    }
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-left: 3px;
  margin-bottom: 6px;
`;

