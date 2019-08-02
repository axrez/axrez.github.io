import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useTransition, useTrail, useChain, animated } from 'react-spring'
import styled from 'styled-components'

import MenuItem from './MenuItem'

const items = ['Home', 'About', 'Work', 'Contact']

const Menu = ({ open }) => {
  const transRef = useRef()
  const transition = useTransition(open, null, {
    ref: transRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const trailRef = useRef()
  const trail = useTrail(items.length, {
    ref: trailRef,
    opacity: open ? 1 : 0,
  })

  useChain(
    open ? [transRef, trailRef] : [trailRef, transRef],
    open ? [0, 0.3] : [0, 0.5]
  )

  return transition.map(
    ({ item, key, props }) =>
      item && (
        <MenuBG key={key} style={props}>
          {trail.map(({ opacity, ...rest }, index) => (
            <Menuli style={{ opacity, listStyle: 'none' }} key={items[index]}>
              <MenuItem title={items[index]} />
            </Menuli>
          ))}
        </MenuBG>
      )
  )
}

Menu.propTypes = {
  open: PropTypes.bool,
}

const MenuBG = styled(animated.ul)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: #ddd;
  display: grid;
  align-items: center;
  justify-content: center;
`

const Menuli = styled(animated.li)`
  list-style: none;
  width: 12rem;

  :first-child {
    margin-top: 20vh;
  }

  :last-child {
    margin-bottom: 20vh;
  }
`

export default Menu
