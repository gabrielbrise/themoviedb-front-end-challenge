import React from 'react'
import styled from 'styled-components'

const Section = ({ title, subtitle, style, children }) => (
    <Container style={style}>
        <h2 className="m-0" style={{ fontSize: 24, color: '#bbbaba' }}>{title}</h2>
        <h3 className="m-0" style={{ fontSize: 48, color: '#393939' }}>{subtitle}</h3>
        <ChildrenContainer>
            {children}
        </ChildrenContainer>
    </Container>
)

export default Section

const Container = styled.section`
    padding: 3em 10% 3em;
`

const ChildrenContainer = styled.div`
    display: flex;
    padding-top: 16px;
    justify-content: left;
    align-items: center;
`