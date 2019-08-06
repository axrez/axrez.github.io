import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Wrapper = styled.div`
  margin: 2rem;
`

export const MainText = styled.p`
  color: hsla(0, 0, 0, 0.3);
`

export const SubTitle = styled.h3`
  margin: 0 2rem;
  text-align: center;
  font-weight: 200;
`

const SubHeaderText = styled.h2`
  font-weight: 300;
  font-size: 1.9rem;
  text-align: center;
`

const SubHeaderDeco = styled.div`
  background-color: #fa7800;
  opacity: 0.38;
  width: 100%;
  height: 0.95rem;
  margin: -2.2rem 0 2rem 0;
`

const SubHeaderWrapper = styled.div`
  width: 7.5rem;
  margin-left: -1rem;
`

export const SubHeader = ({ children }) => (
  <SubHeaderWrapper>
    <SubHeaderText>{children}</SubHeaderText>
    <SubHeaderDeco />
  </SubHeaderWrapper>
)

SubHeader.propTypes = {
  children: PropTypes.string,
}
