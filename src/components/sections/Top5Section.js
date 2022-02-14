import React from 'react'
import Section from '../common/Section'
import TopMoviesCard from '../TopMoviesCard'

const Top5Section = ({ loading, data }) => {
	return (
		<Section title="Movies" subtitle="TOP 5">
			{loading ? (
				<div>Loading movies...</div>
			) : (
				<ol className="flex-center">
					{data.slice(0, 5).map(movie => (
						<TopMoviesCard movie={movie} key={`top5-${movie.id}`} />
					))}
				</ol>
			)}
		</Section>
	)
}

export default Top5Section
