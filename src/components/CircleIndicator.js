import styled, { css } from 'styled-components'

export const CircleIndicator = styled.div`
  overflow-x: hidden;
  background: red;
  height: 10vh;
  width: 10vh;
  margin: 1rem;
  clip-path: circle(50% at 50% 50% );
  transition: all 0.5s ease-in-out;

  ${props =>
    props.home &&
    css`
      background: linear-gradient(140.09deg, #32f9f9 16.22%, #32f952 88.05%);

      ${props.scrollDistance < 600 &&
        css`
          transform: scale(10);
          z-index: 100;
        `}
    `}
  ${props =>
    props.about &&
    css`
      background: linear-gradient(142.98deg, #ff0000 5.13%, #ff24e9 89.22%);

      ${props.scrollDistance > 750 &&
        props.scrollDistance < 1350 &&
        css`
          transform: scale(10) translateY(-1.7vh);
          z-index: 100;
        `}
    `}
  ${props =>
    props.work &&
    css`
      background: linear-gradient(141.46deg, #ffd600 11.02%, #ff2020 87.74%);

      ${props.scrollDistance > 1500 &&
        props.scrollDistance < 2100 &&
        css`
          transform: scale(10) translateY(-3.5vh);
          z-index: 100;
        `}
    `}
  ${props =>
    props.contact &&
    css`
      background: linear-gradient(139.36deg, #ff00e5 8.56%, #0400cc 92.25%);

      ${props.scrollDistance > 2250 &&
        props.scrollDistance < 2850 &&
        css`
          transform: scale(10) translateY(-5.25vh);
          z-index: 100;
        `}
    `};
`
