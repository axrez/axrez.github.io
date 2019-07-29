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
    const [scrollDist, setScrollDist] = useState(window.pageYOffset)
    useEffect(() => {
      window.addEventListener('scroll', e => setScrollDist(e.pageY))
      return () => {
        window.removeEventListener('scroll', e => setScrollDist(e.pageY))
      }
    }, [])
    return scrollDist
  }

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  console.log(useCurrentScrollDistance())
  return (
    <>
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
