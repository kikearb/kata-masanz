import styled from "styled-components";
import { Section } from "../Section";


export const Header = styled.header`
width: 100%;
background-color: #deb887;
z-index: 20;

@media (max-width: 767px) {
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: solid 1px #482400;
}

@media print {
    display: none;
}
`;

export const MobileMenuIcon = styled.div`
    align-self: center;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;