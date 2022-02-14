import React from 'react'
import styled from 'styled-components'
import DotsImage from '../../assets/Dots.png'

const Box = ({ children }) => (
  <Container className="flex-center" backgroundImage={DotsImage}>
    <InnerContainer>{children}</InnerContainer>
  </Container>
)

export default Box

const InnerContainer = styled.div`
  max-width: 1366px;
  margin-bottom: 10%;
  @media(max-width: 1366px) {
    max-width: 100vw;
    overflow-x: scroll;
    padding: 12px;
  }
`

const Container = styled.div`
  padding-top: calc(72px + 3em);
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  @media(max-width: 480px) {
    padding-top: calc(72px + 2em);
  }
`
