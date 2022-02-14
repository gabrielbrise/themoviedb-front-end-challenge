import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GENRE_CARD_WIDTH, GENRE_CARD_HEIGHT } from '../../constants/cards'

const GenreCard = ({ title, url }) => (
  <Link to={url}>
    <Container className="text-decoration-none hover-zoom" width={GENRE_CARD_WIDTH} height={GENRE_CARD_HEIGHT}>
      <Title className="fs-4">{title}</Title>
    </Container>
  </Link>

)

export default GenreCard;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    background: linear-gradient(-225deg, rgb(154, 76, 237) 0%, rgb(134, 127, 239) 46%, rgb(127, 199, 242) 100%);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
`

const Title = styled.h3`
  text-weight: bold;
  color: white;
`
