import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const BackButton = ({ title, subtitle }) => {
    return (
        <Container>
            <Icon name="BackArrow" color='#bbbaba' />
            <h2 className="pl-2 m-0" style={{ fontSize: 24, color: '#bbbaba' }}>
                {title}: <span style={{ color: '#393939' }}>{subtitle}</span>
            </h2>
        </Container>
    )
}

export default BackButton

const Container = styled.div`
    display: flex;
    align-items: center;
`
