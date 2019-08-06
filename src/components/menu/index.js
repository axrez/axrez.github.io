import React, { useState, useEffect } from 'react'

import Menu from './Menu'
import MenuIcon from './MenuIcon'

const MenuContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (document.getElementById('Home')) {
      document.getElementById('Home').scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

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
