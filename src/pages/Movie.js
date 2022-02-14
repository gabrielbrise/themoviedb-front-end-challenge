import React, { useState, useCallback, useEffect } from 'react'
import MovieInfo from '../components/MovieInfo'
import useFetchMovie from '../rest/useFetchMovie'
import useFetchAllMovies from '../rest/useFetchAllMovies'
import BackButton from '../components/BackButton'
import Box from '../components/common/Box'

const Movie = ({ match }) => {
  const [currentGenre, setCurrentGenre] = useState('')

  const { params, path } = match
  const { movie, genre } = params

  const { data, loading } = useFetchMovie(movie)
  const { genres } = useFetchAllMovies()

  const currentPath = path.split('/')[1]

  const getCurrentGenre = useCallback(() => {
    if (currentPath === 'genre' && genres.length) {
      const currentGenre = genres.find(g => g.url === genre)
      setCurrentGenre(currentGenre)
    }
  }, [genres])

  useEffect(() => {
    getCurrentGenre()
  }, [genres])

  const backButtonProps = {
    'all': {
      title: 'Movies',
      subtitle: 'All',
      url: '/'
    },
    'genre': {
      title: 'Movies',
      subtitle: currentGenre.title,
      url: `/genre/${genre}`
    },
    'top-5': {
      title: 'Movies',
      subtitle: 'Top 5',
      url: '/'
    }
  }
  return (
    <Box>
      <BackButton {...backButtonProps[currentPath]} />
      {loading ? <span>Loading...</span> : <MovieInfo movie={data} />}
    </Box>
  )
}

export default Movie
