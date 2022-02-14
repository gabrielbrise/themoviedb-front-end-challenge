import React from 'react'
import styled from 'styled-components'

import { ReactComponent as AvatarSVG } from '../../assets/Avatar.svg'
import { ReactComponent as BackArrowSVG } from '../../assets/BackArrow.svg'
import { ReactComponent as ChevronSVG } from '../../assets/Chevron.svg'
import { ReactComponent as DotsSVG } from '../../assets/Dots.svg'
import { ReactComponent as LogoSVG } from '../../assets/Logo.svg'
import { ReactComponent as StarSVG } from '../../assets/Star.svg'

const ICONS = {
  Avatar: AvatarSVG,
  BackArrow: BackArrowSVG,
  Chevron: ChevronSVG,
  Dots: DotsSVG,
  Logo: LogoSVG,
  Star: StarSVG
}

const Icon = ({ name, color, size }) => {
  const IconSVG = ICONS[name]
  return (
    <Container color={color}>
      <IconSVG style={{ fill: color }} height={size} width={size} />
    </Container>
  )
}

export default Icon

const Container = styled.span`
  g {
    fill: ${({ color }) => color};
  }
`