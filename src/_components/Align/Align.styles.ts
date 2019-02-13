import styled, { css } from "styled-components";

interface Props {
    alignment?: "start" | "center" | "end" | "between" | "around";
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    vAlign?: "start" | "center" | "end" | "between" | "around";
    media?: string;
}

export const Wrapper = styled.div.attrs({})<Props>`
  display: flex;
  flex-direction: ${p => p.direction};

  ${p => p.media === 'tablet' && css`
    @media (max-width: 767px) {
      display: block;
    }
  `}

  ${p => p.vAlign === 'start' && css`
    align-items: flex-start;
  `}

  ${p => p.vAlign === 'center' && css`
    align-items: center;
  `}

  ${p => p.vAlign === 'end' && css`
    align-items: flex-end;
  `}

  ${p => p.vAlign === 'between' && css`
    align-items: space-between;
  `}

  ${p => p.vAlign === 'around' && css`
    align-items: space-around;
  `}

  ${p => p.alignment === 'start' && css`
    justify-content: flex-start;
  `}

  ${p => p.alignment === 'center' && css`
    justify-content: center;
  `}

  ${p => p.alignment === 'end' && css`
    justify-content: flex-end;
  `}

  ${p => p.alignment === 'between' && css`
    justify-content: space-between;
  `}

  ${p => p.alignment === 'around' && css`
    justify-content: space-around;
  `}
`;
