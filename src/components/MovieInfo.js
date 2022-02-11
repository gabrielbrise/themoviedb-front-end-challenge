import React from 'react'
import styled from 'styled-components'
import PosterCard from './PosterCard'
import CastCard from './CastCard'
import Icon from './Icon'
import { COLOR_PRIMARY } from '../constants/css'

const MovieInfo = ({ movie }) => {
    console.log(movie)
    if (!movie) return null
    return (
        <Container>
            <div className="d-flex justify-content-center">
                <PosterCard className="pl-0" image={movie.posterPath} isLarge />
                <div className="pt-4 pl-2">
                    <div className="fs-2"><Icon name="Star" heigt="32px" width="32px" /><span style={{ color: COLOR_PRIMARY }}>{movie.voteAverage}</span><span className="fs-1 text-light-gray">/10</span></div>
                    <h1 className="fs-5 mv-1">{movie.originalTitle}<span className="text-light-gray fw-normal" >{` (${new Date(movie.releaseDate).getFullYear()})`}</span></h1>
                    {movie.genres && movie.genres.length && <div className="fs-2 mb-6">{movie.genres.map((genre, index) => <span className="text-gray">{genre}{index < movie.genres.length - 1 ? ', ' : ''}</span>)}</div>}
                    {movie.director && <span className="fw-bold">Director: {movie.director.name}</span>}
                    {movie.overview && <p className="fs-2 text-gray">{movie.overview}</p>}
                </div>
            </div>
            <div>
                <h3 className="fs-3 fw-normal mb-2">Cast</h3>
                <div className="d-flex">
                    {movie.cast && movie.cast.length && movie.cast.map((cast) => <CastCard image={cast.profilePath} name={cast.name} role={cast.character} />)}
                </div>
            </div>
        </Container>

    )
}

export default MovieInfo

const Container = styled.article`
`