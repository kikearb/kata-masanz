import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    @media(max-width: 767px) {
        display: block;
    }
`;

export const Item = styled.div`
    flex: 1;
`;

export const Map = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`;

export const InfoItem = styled.div`
    flex: 1;

    &:not(:last-child) {
        margin-bottom: 24px;
    }
`;