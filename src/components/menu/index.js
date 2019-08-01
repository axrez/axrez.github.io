import React, { useState } from 'react'

import Menu from './Menu'
import MenuIcon from './MenuIcon'

const MenuContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Menu open={isOpen} />
      <MenuIcon
        rotated={isOpen}
        click={() => setIsOpen(!isOpen)}
        color="#333"
      />
    </>
  )
}

export default MenuContainer
