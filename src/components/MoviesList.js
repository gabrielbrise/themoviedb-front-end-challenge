import React from 'react';
import PosterCard from './cards/PosterCard'
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

const MoviesList = ({ loading, movies, path }) => {
  return (
    <>
      {loading ? (
        <div>Loading movies...</div>
      ) : (
        <Container
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          {movies.map(movie => (
            <LazyLoad height={400} key={`${path}/${movie.id}`}><PosterCard className="hover-zoom" image={movie.posterPath} url={`/${path}/${movie.id}`} /></LazyLoad>
          ))}
        </Container>
      )}
    </>
  )
}

export default MoviesList

const Container = styled.ol`
  @media(max-width: 480px) {
    justify-content: center;
  }
`