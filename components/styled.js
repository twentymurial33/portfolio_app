import styled from "styled-components";

export const HeaderBar = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 1;
    letter-spacing: -0.025em;
    color: rgb(226 232 240);
  }
  h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: rgb(226 232 240);
    font-weight: 500;
    letter-spacing: -0.025em;
    margin-top: 0.75rem;
  }

  p {
    max-width: 20rem;
    line-height: 1.5;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: rgb(226 232 240);
  }
`;

export const LayoutContainer = styled.div`
  background-color: rgb(15 23 42);
`;
