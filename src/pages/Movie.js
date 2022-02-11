import React from 'react'
import MovieInfo from '../components/MovieInfo'
import useFetchMovie from '../rest/useFetchMovie'
import BackButton from '../components/BackButton'
import Box from '../components/Box'

const Movie = props => {
    const { match } = props
    const { params } = match
    const { movie } = params

    const { data, loading } = useFetchMovie(movie)

    return (
        <Box>
            <BackButton title="Movies" subtitle="Top 5" />
            {loading ? <span>Loading...</span> : <MovieInfo movie={data} />}
        </Box>
    )
}

export default Movie
