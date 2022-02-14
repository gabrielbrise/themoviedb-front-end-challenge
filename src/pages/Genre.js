import React from 'react'
import { useFetchAllMovies } from '../rest'
import { useCallback, useEffect, useState } from 'react'
import MoviesList from '../components/MoviesList'
import Box from '../components/common/Box'
import BackButton from '../components/BackButton'

const Home = (props) => {
  const [filteredMoviesByGenre, setFilteredMoviesByGenre] = useState([])
  const [currentGenre, setCurrentGenre] = useState('')

  const { data, loading, genres } = useFetchAllMovies()

  const { match } = props
  const { params } = match
  const { genre } = params

  const getCurrentGenre = useCallback(() => {
    if (data) {
      const currentGenre = genres.find(g => g.url === genre)
      setCurrentGenre(currentGenre)
      const filteredMoviesByGenre = data.filter(movie => movie.genres.includes(currentGenre.title))
      setFilteredMoviesByGenre(filteredMoviesByGenre)
    }
  }, [loading])

  useEffect(() => {
    getCurrentGenre()
  }, [loading])

  if (!currentGenre || !filteredMoviesByGenre || !filteredMoviesByGenre.length) return null

  return (
    <Box>
      <BackButton title="Movies" subtitle={currentGenre.title} url={'/'} />
      <MoviesList loading={loading} movies={filteredMoviesByGenre} path={`genre/${currentGenre.url}`} />
    </Box>

  )
}

export default Home
