import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  MainText,
  SubTitle,
  SubHeader,
  Wrapper,
  ContactArea,
  ContactBubble,
  BottomBar,
} from '../components/styled'

import { Mail, GitHub, FB } from '../components/img/icons'

const IndexPage = ({ data }) => {
  const { Title, About, Work } = data
  const { frontmatter: TitleFront } = Title

  return (
    <>
      <Layout>
        <SEO title="Home" />
        {/* <LandingpageImage style={{ width: '100vw', zIndex: -100 }} /> */}
        <SubTitle>{TitleFront.intro}</SubTitle>
        <Wrapper>
          <SubHeader>{About.frontmatter.head}</SubHeader>
          <MainText
            id="About"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: About.html,
            }}
          ></MainText>
          <SubHeader>{Work.frontmatter.head}</SubHeader>
          <MainText id="Work" dangerouslySetInnerHTML={{ __html: Work.html }} />
          {/* <a href="documents/CVOnline.pdf">CV</a> */}
        </Wrapper>
        <ContactArea id="Contact">
          <h3>Get in touch:</h3>
          <div>
            <ContactBubble href="mailto:emoestergaard@gmail.com">
              <Mail />
            </ContactBubble>
            <ContactBubble href="https://github.com/axrez">
              <GitHub />
            </ContactBubble>
            <ContactBubble href="https://www.facebook.com/e.eastergaard">
              <FB />
            </ContactBubble>
          </div>
          <BottomBar>
            <p>Emil Østergaard © {new Date().getFullYear()}</p>
          </BottomBar>
        </ContactArea>
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
      }
      html
    }
    Work: markdownRemark(
      frontmatter: { path: { eq: "src/markdown/work.md" } }
    ) {
      frontmatter {
        head
      }
      html
    }
  }
`
