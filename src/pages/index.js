import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.intro}</p>
    </Layout>
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
