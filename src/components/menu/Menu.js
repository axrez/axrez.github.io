import React from 'react'
import PropTypes from 'prop-types'
import { useTransition, animated } from 'react-spring'

const Menu = ({ open }) => {
  const transition = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transition.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          🤘
        </animated.div>
      )
  )
}

Menu.propTypes = {
  open: PropTypes.bool,
}

export default Menu
