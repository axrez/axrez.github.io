import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 2rem;
`

export const MainText = styled.p`
  color: hsla(0, 0%, 0%, 0.8);
  font-size: 1.05rem;
  & a {
    text-decoration: none;
    color: inherit;
    transition: color 200ms ease-in-out;
    &:visited {
      color: hsla(29, 1%, 30%, 1);
    }
    &:hover {
      color: hsla(29, 100%, 49%, 0.62);
    }
  }
`

export const SubTitle = styled.h3`
  margin: 0 2rem;
  text-align: center;
  font-weight: 200;
`

export const ContactArea = styled.div`
  background: #222;
  width: 100%;
  color: white;
  display: grid;
  grid-template-columns: 1fr 20rem 1fr;
  grid-auto-rows: auto;
  grid-template-areas: 'ws bubbles ws';

  & h3 {
    grid-column: 2/3;
    text-align: center;
    align-self: flex-end;
    font-weight: 400;
    margin: 5rem 3rem;
    margin-bottom: 0.9rem;
  }

  & div {
    grid-column: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    margin-top: 0;
  }
`

export const BottomBar = styled.span`
  grid-column: 2/3;
  align-self: flex-end;
  margin-top: 3rem;

  & p {
    text-align: center;
  }
`

export const ContactBubble = styled.a`
  background: white;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  margin: auto;

  & svg {
    margin: 0;
    width: 65%;
    height: 65%;
    fill: #222;
    transition: fill 200ms ease-in-out;
  }

  &:hover {
    & svg {
      fill: hsla(29, 100%, 49%, 0.62);
    }
  }
`

// The rest is all for the somewhat fancy subheaders
const SubHeaderText = styled.h2`
  font-weight: 300;
  font-size: 1.9rem;
  text-align: center;
`

const SubHeaderDeco = styled.div`
  background-color: #fa7800;
  opacity: 0.38;
  width: 100%;
  height: 0.95rem;
  margin: -2.2rem 0 2rem 0;
`

const SubHeaderWrapper = styled.div`
  width: 7.5rem;
  margin-left: -1rem;
`

export const SubHeader = ({ children }) => (
  <SubHeaderWrapper>
    <SubHeaderText>{children}</SubHeaderText>
    <SubHeaderDeco />
  </SubHeaderWrapper>
)

SubHeader.propTypes = {
  children: PropTypes.string,
}
