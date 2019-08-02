import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import './layout.css'
import MenuContainer from './menu'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { siteMetadata: meta } = data.site
  return (
    <Main>
      <div>
        <TopTitle>{meta.title}</TopTitle>
        <TopTitleDeco />
      </div>

      <MenuContainer />
      {children}
    </Main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  position: fixed;
  overflow-x: hidden;
  padding: 8rem 0;
  display: grid;
  align-items: center;
  justify-items: center;

  /* remove this when the page is populated with data */
  height: 100vh;
`

const TopTitle = styled.h1`
  width: 100vw;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 300;
`

const TopTitleDeco = styled.div`
  position: relative;
  top: -2.3rem;
  background-color: #fa7800;
  opacity: 0.38;
  width: 24rem;
  height: 1.4rem;
  margin: 0 calc(50vw - 12rem);
  z-index: -1;
`
