import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MenuSidebarItems = ({ items }) => (
  <ListContainer>
    {items.map((item, i) => (
      <ListItem
        key={i}
        onClick={() => {
          if (!document.getElementById(item)) return
          document
            .getElementById(`${item}`)
            .scrollIntoView({ behavior: 'smooth' })
        }}
      >
        {item}
      </ListItem>
    ))}
  </ListContainer>
)

MenuSidebarItems.propTypes = {
  items: PropTypes.array.isRequired,
}

const ListContainer = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 20vw;
  height: 100%;
  list-style: none;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ListItem = styled.li`
  font-size: calc(1.3rem + 0.5vw);
  text-align: left;
  padding: 2vh 4vw;
  width: 100%;
`

export default MenuSidebarItems
