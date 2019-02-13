import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const Item = styled.a`
  display: block;
  padding: 15px;
  border: solid 1px;
  border-radius: 100%;
  text-decoration: none;
  cursor: pointer;
  color: $light-text-color;
  font-size: $font-large;
  position: relative;
  margin-right: 12px;

  &::before {
    vertical-align: initial !important;
  }
`;
