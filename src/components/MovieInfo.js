import React from 'react'
import styled from 'styled-components'
import PosterCard from './cards/PosterCard'
import CastCard from './cards/CastCard'
import Icon from './common/Icon'

const MovieInfo = ({ movie }) => {
  if (!movie) return null
  return (
    <Container>
      <div className="d-flex justify-content-center mobile-flex-direction-column">
        <div><PosterCard className="pl-0" image={movie.posterPath} isLarge /></div>
        <div className="pt-4 pl-2" style={{ width: 'fit-content' }}>
          <ScoreInfo voteAverage={movie.voteAverage} />
          <TitleInfo originalTitle={movie.originalTitle} releaseDate={movie.releaseDate} />
          {movie.genres && movie.genres.length && (
            <GenresInfo genres={movie.genres} />
          )}
          {movie.director && <DirectorInfo director={movie.director} />}
          {movie.overview && <MovieOverview overview={movie.overview} />}
        </div>
      </div>
      <CastInfo cast={movie.cast} />
    </Container>
  )
}

export default MovieInfo

const ScoreInfo = ({ voteAverage }) => (
  <div className="score-info fs-3 fw-bold">
    <Icon name="Star" size={20} />
    <span className="text-primary ph-1">{voteAverage}</span>
    <span className="fs-1 text-light-gray">/10</span>
  </div>
)

const TitleInfo = ({ originalTitle, releaseDate }) => (
  <h1 className="fs-5 mv-1 title-info">
    {originalTitle}
    <span className="text-light-gray fw-normal">{` (${new Date(
      releaseDate
    ).getFullYear()})`}</span>
  </h1>
)

const GenresInfo = ({ genres }) => (
  <div className="fs-2 mb-6">
    {genres.map((genre, index) => (
      <span className="text-gray" key={`genre-${genre.trim().toLowerCase()}`}>
        {genre}
        {index < genres.length - 1 ? ', ' : ''}
      </span>
    ))}
  </div>
)

const DirectorInfo = ({ director }) => (
  <span className="fw-bold">Director: {director.name}</span>
)

const MovieOverview = ({ overview }) => (
  <p className="fs-2 text-gray">{overview}</p>
)

const CastInfo = ({ cast }) => (
  <div>
    <h3 className="fs-4 fw-normal mb-2 text-dark">Cast</h3>
    <div className="d-flex mobile-overflow-x-scroll">
      {cast &&
        cast.length &&
        cast.map(c => (
          <CastCard image={c.profilePath} name={c.name} role={c.character} key={(c.name + c.character).trim().toLowerCase()} />
        ))}
    </div>
  </div>
)

const Container = styled.article`
  max-width: 100vw;
  overflow: hidden;
  .title-info {
    @media(max-width: 480px) {
      font-size: 24px;
    }
  }
  .score-info {
    @media(min-width: 480px) {
      padding-top: 32px;
    }
  }
`
