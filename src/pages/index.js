import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

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
  DownloadButton,
} from '../components/styled'
import { Mail, GitHub, FB } from '../components/img/icons'
// import SignalkasseImg from '../components/img/signalkasse'

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
          <div id="About" />
          <SubHeader>{About.frontmatter.head}</SubHeader>
          <MainText
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: About.html,
            }}
          ></MainText>
          <div id="Work" />
          <SubHeader>{Work.frontmatter.head}</SubHeader>
          {/* <SignalImg /> */}
          <MainText dangerouslySetInnerHTML={{ __html: Work.html }} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <DownloadButton>
              {' '}
              <a href="documents/CVweb.pdf">CV - DK</a>
            </DownloadButton>
            <DownloadButton>
              {' '}
              <a href="documents/CV_EN.pdf">CV - EN</a>
            </DownloadButton>
          </div>
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

// const SignalImg = styled(SignalkasseImg)`
//   &::before {
//     content: 'Signalkassen';
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.4);
//     z-index: 2;
//     padding: 8rem 0 0 2rem;
//     font-size: 2rem;
//     color: white;
//   }
// `
