import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #000;
  padding: 36px 24px;
  color: #fff;
`;

export const ContentWrapper = styled.div`
    text-transform: uppercase;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
