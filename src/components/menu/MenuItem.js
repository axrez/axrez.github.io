import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MenuItem = ({ title }) => (
  <>
    <MenuItemTitle>
      {title}
      <MenuItemDeco />
    </MenuItemTitle>
  </>
)

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
}

const MenuItemTitle = styled.h2`
  font-weight: 300;
  opacity: inherit;
  text-align: center;
  font-size: 2rem;
  z-index: 10;
  padding: 2rem;
`

const MenuItemDeco = styled.div`
  background: #fa7800;
  width: 100%;
  height: 1rem;
  opacity: 0.38;
  margin-top: -0.7rem;
`

export default MenuItem
