import React from 'react'
import styled from 'styled-components'

const Section = ({ id, title, subtitle, style, HeaderComponent, children }) => (
  <Container id={id} style={style}>
    <StyledHeader className="d-flex justify-content-space-between align-items-center pl-2">
      <Header title={title} subtitle={subtitle} />
      {HeaderComponent && <HeaderComponent />}
    </StyledHeader>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  </Container>
)

export default Section

const Header = ({ title, subtitle }) => (
  <div>
    <h2 className="m-0 fs-3 text-light-gray" >{title}</h2>
    <h3 className="m-0 fs-6 text-dark" >{subtitle}</h3>
  </div>
)

const Container = styled.section`
    padding: 3em 8% 3em;
    overflow-x: hidden;
    overflow-y: visible;
    max-width: 100vw;
`

const StyledHeader = styled.div`
  @media(max-width: 800px) {
    flex-direction: column;
    align-items: start;
  }
`

const ChildrenContainer = styled.div`
    display: flex;
    padding-top: 16px;
    justify-content: left;
    align-items: center;
    @media(max-width: 800px) {
      overflow-x: scroll;
    }
`