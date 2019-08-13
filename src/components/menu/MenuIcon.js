import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const MenuIcon = ({ rotated = false, color = '#000', click }) => (
  <MenuButton type="button" onClick={() => click()}>
    <MenuBar top="true" color={color} rotate={rotated ? 'true' : ''} />
    <MenuBar mid="true" color={color} rotate={rotated ? 'true' : ''} />
    <MenuBar bottom="true" color={color} rotate={rotated ? 'true' : ''} />
  </MenuButton>
)

MenuIcon.propTypes = {
  rotated: PropTypes.bool,
  color: PropTypes.string,
  click: PropTypes.func,
}

const MenuButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  border: none;
  background: inherit;
  height: 3rem;
  width: 3rem;
  z-index: 11;
  @media screen and (min-width: 960px) {
    display: none;
  }
`

const MenuBar = styled.div`
    width: 35px;
    height: 1px;
    background: ${props => props.color};
    margin: 4px 0;
    transition: all 200ms ease-in-out;
    border-radius: 10px;

    ${props =>
      props.rotate &&
      props.top &&
      css`
        transform: rotate(-45deg) translate(-4px, 4px);
      `}

    ${props =>
      props.rotate &&
      props.mid &&
      css`
        opacity: 0;
      `}
    ${props =>
      props.rotate &&
      props.bottom &&
      css`
        transform: rotate(45deg) translate(-4px, -4px);
      `}
  `

export default MenuIcon
