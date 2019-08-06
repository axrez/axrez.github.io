import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LandingpageImage from '../components/img/landingpage'
import convertMDLinks from '../utils/convertMDLinks'
import { MainText, SubTitle, SubHeader, Wrapper } from '../components/styled'

const IndexPage = ({ data }) => {
  const { Title, About, Work } = data
  const { frontmatter: TitleFront } = Title
  const { frontmatter: AboutFront } = About
  const { frontmatter: WorkFront } = Work

  return (
    <>
      <Layout>
        <SEO title="Home" />
        {/* <LandingpageImage style={{ width: '100vw', zIndex: -100 }} /> */}
        <SubTitle>{TitleFront.intro}</SubTitle>
        <Wrapper>
          <SubHeader>{AboutFront.head}</SubHeader>
          <MainText
            id="About"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: convertMDLinks(AboutFront.text),
            }}
          ></MainText>
          <SubHeader>{WorkFront.head}</SubHeader>
          <MainText
            id="Work"
            dangerouslySetInnerHTML={{ __html: convertMDLinks(WorkFront.text) }}
          />
        </Wrapper>
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
    Title: markdownRemark(
      frontmatter: { path: { eq: "src/markdown/index.md" } }
    ) {
      frontmatter {
        title
        intro
      }
    }
    About: markdownRemark(
      frontmatter: { path: { eq: "src/markdown/about.md" } }
    ) {
      frontmatter {
        head
        text
      }
    }
    Work: markdownRemark(
      frontmatter: { path: { eq: "src/markdown/work.md" } }
    ) {
      frontmatter {
        head
        text
      }
    }
  }
`
