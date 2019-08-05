import React, { useState } from 'react'

import Menu from './Menu'
import MenuIcon from './MenuIcon'

const MenuContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  if (!document) {
    document.getElementById('Home').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Menu open={isOpen} close={() => setIsOpen(false)} />
      <MenuIcon
        rotated={isOpen}
        click={() => setIsOpen(!isOpen)}
        color="#333"
      />
    </>
  )
}

export default MenuContainer
