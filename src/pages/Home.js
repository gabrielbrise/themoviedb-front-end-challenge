import React from 'react'
import { useFetchAllMovies } from '../rest'
import GenreSection from '../components/sections/GenreSection'
import Top5Section from '../components/sections/Top5Section'
import AllMoviesSection from '../components/sections/AllMoviesSection'

const Home = () => {
  const { data, loading, genres, topMovies } = useFetchAllMovies()

  return (
    <div>
      <div style={{ paddingTop: '4em' }}>
        <Top5Section loading={loading} movies={topMovies} />
        <GenreSection genres={genres} />
        <AllMoviesSection loading={loading} movies={data} />
      </div>
    </div>

  )
}

export default Home
