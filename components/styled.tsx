import styled from "styled-components";

export const HeaderBar = styled.div`
  h1 {
    font-size: 3rem;
    margin: 0;
    line-height: 1;
    letter-spacing: -0.025em;
    color: rgb(226 232 240);
    text-align: center;
  }
  h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: rgb(226 232 240);
    font-weight: 500;
    letter-spacing: -0.025em;
    margin-top: 0.75rem;
    text-align: center;
  }

  p {
    max-width: 20rem;
    line-height: 1.5;
    /* display: block; */
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    color: rgb(226 232 240);
  }
`;

export const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: rgb(15 23 42);
  height: 100%;
`;
