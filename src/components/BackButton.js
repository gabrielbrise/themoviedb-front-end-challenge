import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from './common/Icon'

const BackButton = ({ title, subtitle, url }) => {
  return (
    <Link to={url}>
      <Container className="mb-2 pl-2">
        <Icon name="BackArrow" color='#bbbaba' size={18} />
        <h2 className="pl-3 m-0" style={{ fontSize: 24, color: '#bbbaba' }}>
          {title}: <span style={{ color: '#393939' }}>{subtitle}</span>
        </h2>
      </Container>
    </Link>
  )
}

export default BackButton

const Container = styled.div`
    display: flex;
    align-items: center;
`
