import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const MObject = styled.div`
    flex-shrink: 0;
    margin-right: 24px;
    max-width: 100%;
    justify-content: center;

    @media (max-width: 767px) {
        margin-bottom: 12px;
        margin-right: 0;
    }

    & img {
        max-width: 100%;
        height: auto;

        @media (min-width: 768px) {
            height: 250px;
        }
        border-radius: 4px;
    }
`;

export const MBody = styled.div`
    display: flex;
    flex-direction: column;    
    flex-grow: 1;
    justify-content: center;
`;