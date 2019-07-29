import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LandingpageImage = () => {
  const data = useStaticQuery(graphql`
    {
      landingpageImg: file(relativePath: { eq: "landingpage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.landingpageImg.childImageSharp.fluid}
      alt="Background image"
    />
  )
}

export default LandingpageImage
