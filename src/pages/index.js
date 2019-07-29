import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { CircleIndicator } from '../components/CircleIndicator'
import LandingpageImage from '../components/img/landingpage'

const IndexPage = ({ data }) => {
  const useCurrentScrollDistance = () => {
    const [scrollDist, setScrollDist] = useState(0)
    useEffect(() => {
      if (typeof window !== `undefined`) {
        window.addEventListener('scroll', e => setScrollDist(e.pageY))
      }
      return () => {
        if (typeof window !== `undefined`) {
          window.removeEventListener('scroll', e => setScrollDist(e.pageY))
        }
      }
    }, [])
    return scrollDist
  }
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <>
      <Main>
        <Home>
          <Homeh3> - hi, I'm - </Homeh3>
          <h1> {frontmatter.title} </h1>
          <Homeh3> {frontmatter.intro} </Homeh3>
        </Home>
      </Main>
      <DummyText>Test</DummyText>
      <DummyText>Test</DummyText>
      <Layout>
        <SEO title="Home" />
        {/* <LandingpageImage style={{ width: '100vw' }} /> */}
        {/* <h1>{frontmatter.title}</h1>
      <p>{frontmatter.intro}</p> */}
        <CircleIndicator
          home="true"
          scrollDistance={useCurrentScrollDistance()}
        />
        <CircleIndicator
          about="true"
          scrollDistance={useCurrentScrollDistance()}
        />
        <CircleIndicator
          work="true"
          scrollDistance={useCurrentScrollDistance()}
        />
        <CircleIndicator
          contact="true"
          scrollDistance={useCurrentScrollDistance()}
        />
      </Layout>
    </>
  )
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { path: { eq: "src/markdown/index.md" } }) {
      frontmatter {
        title
        intro
      }
    }
  }
`
const DummyText = styled.h1`
  margin-bottom: 200rem;
`

const Main = styled.main`
  display: grid;
  justify-content: center;
`

const Home = styled.div`
  margin-top: 11rem;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 100rem;
`

const Homeh3 = styled.h3`
  max-width: 50vw;
`
