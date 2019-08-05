import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LandingpageImage from '../components/img/landingpage'

const IndexPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <>
      <Layout>
        <SEO title="Home" />
        {/* <LandingpageImage style={{ width: '100vw', zIndex: -100 }} /> */}
        {/* <h1>{frontmatter.title}</h1>
        <p>{frontmatter.intro}</p> */}
        <p style={{ marginBottom: '40rem' }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit auctor,
          convallis cras vulputate felis himenaeos nisi dictum mollis metus,
          mauris orci pretium pharetra eu penatibus aenean. Dapibus mauris
          blandit dictum nibh imperdiet pretium hac conubia, parturient augue
          dui himenaeos eget penatibus urna taciti, luctus eleifend curae aptent
          maecenas ligula justo. Porttitor morbi hendrerit consequat metus ut a
          eros scelerisque nullam proin eu, pellentesque aliquam convallis mus
          non ornare facilisis mauris in. Porttitor et purus tellus torquent
          mattis cum iaculis, eleifend interdum neque litora nec volutpat luctus
          dis, aliquet vestibulum cursus pharetra non velit. Sed venenatis nibh
          hendrerit inceptos ornare lacus, elementum et pretium malesuada
          nascetur, magna ad nunc commodo tristique. Tortor conubia malesuada
          gravida tincidunt sagittis nostra interdum fames aenean a
          pellentesque, sociosqu ut taciti vel tempor molestie mi tristique leo.
          Felis porttitor ad commodo magnis vitae arcu platea phasellus placerat
          mus, imperdiet nullam molestie dis donec tellus interdum iaculis
          mollis venenatis est, sollicitudin purus penatibus hac orci habitasse
          tempor sociosqu ligula. Malesuada class mauris urna, pulvinar
          interdum. Phasellus pharetra risus neque taciti class nec cum mollis,
          conubia sollicitudin pulvinar commodo netus scelerisque laoreet,
          consequat semper in sapien penatibus lacinia dictumst. Accumsan id
          lobortis inceptos condimentum sollicitudin libero parturient,
          curabitur vivamus magnis ultrices sodales nostra porttitor ad, class
          nulla mollis dapibus phasellus lacus tempor, enim aliquet curae fames
          gravida augue. Lacinia tincidunt duis dictumst quisque euismod nisi
          integer eu, urna in semper turpis luctus a posuere. Duis nulla
          vestibulum curae mus augue ut platea natoque id cubilia, eros nunc
          integer torquent congue dui feugiat nullam aliquet diam nec, felis
          imperdiet fusce conubia faucibus condimentum neque porta cras.
        </p>
        <p id="About">
          Lorem ipsum dolor sit amet consectetur adipiscing elit auctor,
          convallis cras vulputate felis himenaeos nisi dictum mollis metus,
          mauris orci pretium pharetra eu penatibus aenean. Dapibus mauris
          blandit dictum nibh imperdiet pretium hac conubia, parturient augue
          dui himenaeos eget penatibus urna taciti, luctus eleifend curae aptent
          maecenas ligula justo. Porttitor morbi hendrerit consequat metus ut a
          eros scelerisque nullam proin eu, pellentesque aliquam convallis mus
          non ornare facilisis mauris in. Porttitor et purus tellus torquent
          mattis cum iaculis, eleifend interdum neque litora nec volutpat luctus
          dis, aliquet vestibulum cursus pharetra non velit. Sed venenatis nibh
          hendrerit inceptos ornare lacus, elementum et pretium malesuada
          nascetur, magna ad nunc commodo tristique. Tortor conubia malesuada
          gravida tincidunt sagittis nostra interdum fames aenean a
          pellentesque, sociosqu ut taciti vel tempor molestie mi tristique leo.
          Felis porttitor ad commodo magnis vitae arcu platea phasellus placerat
          mus, imperdiet nullam molestie dis donec tellus interdum iaculis
          mollis venenatis est, sollicitudin purus penatibus hac orci habitasse
          tempor sociosqu ligula. Malesuada class mauris urna, pulvinar
          interdum. Phasellus pharetra risus neque taciti class nec cum mollis,
          conubia sollicitudin pulvinar commodo netus scelerisque laoreet,
          consequat semper in sapien penatibus lacinia dictumst. Accumsan id
          lobortis inceptos condimentum sollicitudin libero parturient,
          curabitur vivamus magnis ultrices sodales nostra porttitor ad, class
          nulla mollis dapibus phasellus lacus tempor, enim aliquet curae fames
          gravida augue. Lacinia tincidunt duis dictumst quisque euismod nisi
          integer eu, urna in semper turpis luctus a posuere. Duis nulla
          vestibulum curae mus augue ut platea natoque id cubilia, eros nunc
          integer torquent congue dui feugiat nullam aliquet diam nec, felis
          imperdiet fusce conubia faucibus condimentum neque porta cras.
        </p>
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
