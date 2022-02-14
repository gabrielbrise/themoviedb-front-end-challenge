import React from 'react';
import GenreCard from '../GenreCard'
import Section from '../common/Section'
import Glide from '../common/Glide'

const GenreSection = ({ genres }) => {

    const parsedGenres = genres.map(genre => ({
        title: genre,
        url: `/${genre.replace(/\s/g, '-').toString().toLowerCase()}`
    }))

    console.log('genres', parsedGenres)

    if (!genres.length) return null

    return (
        <Section
            title="Browse"
            subtitle="by Genre"
            style={{ backgroundColor: 'rgb(244, 245, 251)' }}
        >
            <Glide>
                {parsedGenres.map(({ title, url }, index) => (
                    <GenreCard title={title} key={`${url}-${index}`} />
                ))}
            </Glide>
        </Section>
    )
}

export default GenreSection