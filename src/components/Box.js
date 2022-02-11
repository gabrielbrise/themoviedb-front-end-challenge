import React from 'react'
import styled from 'styled-components'

const Box = ({ children }) => <div className="flex-center"><InnerContainer>{children}</InnerContainer></div>

export default Box

const InnerContainer = styled.div`
    max-width: 1366px;
    margin-bottom: 10%;
`

