import React, { useState } from 'react'
import Section from '../common/Section'
import TopMoviesCard from '../cards/TopMoviesCard'
import DotsImage from '../../assets/Dots.png'
import styled from 'styled-components'

const Top5Section = ({ loading, movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(-1)

  if (!movies || !movies.length) return null
  return (
    <Section title="Movies" subtitle="Top 5" style={{ backgroundImage: `url(${DotsImage})` }} >
      {loading ? (
        <div>Loading movies...</div>
      ) : (
        <Container className="d-flex">
          {movies.slice(0, 5).map((movie, index) => (
            <div onMouseEnter={() => setSelectedMovie(index)} onMouseLeave={() => setSelectedMovie(-1)} key={`top5-${movie.id}`}>
              <TopMoviesCard
                movie={movie}
                isSelected={selectedMovie === index}
              />
            </div>
          ))}
        </Container>
      )}
    </Section>
  )
}

export default Top5Section

const Container = styled.ol`
  @media(max-width: 480px) {
    justify-content: center;
  }
`