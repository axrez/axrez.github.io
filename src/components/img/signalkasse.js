import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const SignalkasseImg = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      signalkasseImg: file(relativePath: { eq: "signalkasse.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.signalkasseImg.childImageSharp.fluid}
      alt="Image of a digital osciloscope"
      style={{ zIndex: -100 }}
      className={className}
    />
  )
}

SignalkasseImg.propTypes = {
  className: PropTypes.string,
}

export default SignalkasseImg
