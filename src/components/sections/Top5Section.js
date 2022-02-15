import React, { useState } from 'react'
import Section from '../common/Section'
import TopMoviesCard from '../cards/TopMoviesCard'
import DotsImage from '../../assets/Dots.png'
import styled from 'styled-components'
import Glide from '../common/Glide'

const Top5Section = ({ loading, movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(-1)

  if (!movies || !movies.length) return null
  return (
    <Section id="top-5" title="Movies" subtitle="Top 5" style={{ backgroundImage: `url(${DotsImage})` }} >
      {loading ? (
        <div>Loading movies...</div>
      ) : (
        <Container className="d-flex">
          <Glide id="top-5" devices={['tablet']}>
            {movies.slice(0, 5).map((movie, index) => (
              <span onMouseEnter={() => setSelectedMovie(index)} onMouseLeave={() => setSelectedMovie(-1)} key={`top5-${movie.id}`} >
                <TopMoviesCard
                  movie={movie}
                  isSelected={selectedMovie === index}
                />
              </span>
            ))}
          </Glide>
        </Container>
      )}
    </Section>
  )
}

export default Top5Section

const Container = styled.ol`
  max-width: 100vw;
  @media(max-width: 480px) {
    justify-content: center;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .glide__arrow {
    top: 35%;
  }
`