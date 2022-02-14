import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { COLOR_PRIMARY } from '../../constants/css'

const Button = ({ color = "white", backgroundColor = COLOR_PRIMARY, children, to }) => {
  const ButtonComponent = () => <Container className="w-100 p-1" style={{ backgroundColor, color, cursor: to ? 'pointer' : 'default' }}>{children}</Container>
  return to ? <Link to={to}><ButtonComponent /></Link> : <ButtonComponent />
}

export default Button

const Container = styled.button`
    border: 1px solid var(--color-primary);
    border-radius: 4px;
`