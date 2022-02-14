import React from 'react'
import styled from 'styled-components'
import PosterCard from './PosterCard'
import Icon from '../common/Icon'
import Button from '../common/Button'

const TopMoviesCard = ({ movie, isSelected }) => {
  return (
    <Container className="mh-1 pv-1 hover-zoom">
      <PosterCard image={movie.posterPath} url={`/top-5/${movie.id}`} key={movie.id} />
      <div className="d-flex justify-content-space-between flex-direction-column" style={{ minHeight: 180 }}>
        <TopMoviesSummary movie={movie} />
        <TopMoviesViewDetails movieId={movie.id} isSelected={isSelected} />
      </div>
    </Container>
  )
}

const TopMoviesSummary = ({ movie }) => {
  return (
    <div className="ph-2">
      <div className=" d-flex">
        <h1 className="fs-3 mv-1" style={{ width: '80%' }}>
          {movie.originalTitle}
        </h1>
        <div
          className="fs-2 d-flex"
          style={{ width: '20%', paddingTop: 10 }}
        >
          <Icon name="Star" size="16px" />
          <span className="text-primary" style={{ paddingLeft: 2, fontWeight: 'bolder' }}>
            {movie.voteAverage.toFixed(1)}
          </span>
        </div>
      </div>
      {movie.genres && movie.genres.length && (
        <div className="fs-2">
          {movie.genres.map((genre, index) => (
            <span className="text-gray" key={`${movie.id}-genre-${index}`}>
              {genre}
              {index < movie.genres.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

const TopMoviesViewDetails = ({ movieId, isSelected }) => {
  return (
    <div className="d-flex justify-content-space-between flex-direction-column">
      {isSelected &&
        <div className="p-1">
          <Button url={`top-5/${movieId}`}>View Details</Button>
        </div>}
    </div>
  )
}

export default TopMoviesCard

const Container = styled.div`
  height: 545px;
  width: 270px;
  :hover {
    box-shadow: 0px 2px 8px 0px rgba(58, 58, 58, .23);
  }
`
