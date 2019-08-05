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
      <MenuContainer />

      <ContentWrapper>
        <div id="Home">
          <TopTitle>{meta.title}</TopTitle>
          <TopTitleDeco />
        </div>

        {children}
      </ContentWrapper>
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
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;

  @media screen and (min-width: 960px) {
    grid-template-columns: 20vw 1fr;
    grid-auto-rows: 1fr;
    grid-template-areas: 'menu content';
  }
`

const TopTitle = styled.h1`
  width: 100%;
  padding-top: 8rem;
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

  @media screen and (min-width: 960px) {
    margin: 0 calc(40vw - 12rem);
  }
`

const ContentWrapper = styled.div`
  grid-area: content;
  @media screen and (min-width: 960px) {
    width: 80vw;
  }
`
