import React from 'react'
import styled from 'styled-components'
import Icon from './common/Icon'
import { COLOR_PRIMARY } from '../constants/css'
import { Link } from 'react-router-dom'

const Header = () => (
  <Container>
    <Link to="/" className='h-100'><Logo /></Link>
    <Link to="/" className="text-decoration-none"><Title /></Link>
  </Container>
)

const Logo = () => <div className="flex-center h-100 bg-primary" style={{ width: 72, backgroundColor: COLOR_PRIMARY }}><Icon name="Logo" color="white" size={28} /></div>

const Title = () => <h1 className="fs-3 pl-7" ><b>Reel Cinema</b></h1>

export default Header

const Container = styled.div`
    display: flex;
    height: 72px;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: white;
    box-shadow: 0px 2px 8px 0px rgba(58, 58, 58, .23);
    z-index: 99;
    a {
      color: var(--text-dark)
    }
`