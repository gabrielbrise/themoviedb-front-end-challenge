import React from 'react'
import styled from 'styled-components'
import ImageCard from './ImageCard'

const CastCard = ({ image, name, role }) => {
  return (
    <Container className="p-1">
      <CastImage image={image}></CastImage>
      <CastInfo name={name} role={role} />
    </Container>
  )
}

const CastInfo = ({ name, role }) => (
  <div className="mt-2">
    <div className="fs-1 fw-bold pb-1">{name}</div>
    <div className="text-gray">{role}</div>
  </div>
)

export default CastCard

const CastImage = styled(ImageCard)`
  width: 200px;
  height: 235px;
`
const Container = styled.div`
  max-width: min-content;
`
