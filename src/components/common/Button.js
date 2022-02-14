import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { COLOR_PRIMARY } from '../../constants/css'

const Button = ({ color = "white", backgroundColor = COLOR_PRIMARY, children, url }) => {
  const ButtonComponent = () => <Container className="w-100 p-2" style={{ backgroundColor, color, cursor: url ? 'pointer' : 'default' }}>{children}</Container>
  return url ? <Link to={url}><ButtonComponent /></Link> : <ButtonComponent />
}

export default Button

const Container = styled.button`
    border: 1px solid var(--color-primary);
    border-radius: 4px;
`