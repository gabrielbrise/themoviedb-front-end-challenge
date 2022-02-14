import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ImageCard from './ImageCard'

const PosterCard = ({ image, id, isLarge, className }) => {
    const PosterImage = () => <Poster className={className} image={image} isLarge={isLarge} />
    return id ? <Link to={`/${id}`}><PosterImage /></Link> : <PosterImage />
}

export default PosterCard

const Poster = styled(ImageCard)`
    margin: 16px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
    min-width: ${({ isLarge }) => isLarge ? '340px' : '230px'};
    min-height: ${({ isLarge }) => isLarge ? '490px' : '340px'};
`