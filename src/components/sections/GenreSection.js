import React from 'react';
import GenreCard from '../cards/GenreCard'
import Section from '../common/Section'
import Glide from '../common/Glide'
import { BG_WHITE } from '../../constants/css'

const GenreSection = ({ genres }) => {
  if (!genres.length) return null

  return (
    <Section
      title="Browse"
      subtitle="by Genre"
      style={{ backgroundColor: BG_WHITE }}
    >
      <Glide id='genre-glide'>
        {genres.map(({ title, url }, index) => (
          <GenreCard title={title} key={`${url}-${index}`} url={`/genre/${url}`} />
        ))}
      </Glide>
    </Section>
  )
}

export default GenreSection