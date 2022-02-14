import React from 'react'
import styled from 'styled-components'
import PosterCard from './PosterCard'
import Icon from './Icon'
import Button from './common/Button'

const TopMoviesCard = ({ movie }) => {
	return (
		<Container className="mh-1">
			<PosterCard image={movie.posterPath} id={movie.id} key={movie.id} />
			<div className="d-flex justify-content-space-between flex-direction-column">
				<div className="ph-2">
					<div className=" d-flex" >
						<h1 className="fs-3 mv-1" style={{ width: '80%' }}>{movie.originalTitle}</h1>
						<div className="fs-2 d-flex" style={{ width: '20%', paddingTop: 14 }}><Icon name="Star" heigt="32px" width="32px" /><span className="text-primary">{parseInt(movie.voteAverage).toFixed(1)}</span></div>
					</div>
					{movie.genres && movie.genres.length && <div className="fs-2 mb-6">{movie.genres.map((genre, index) => <span className="text-gray" key={`${movie.id}-genre-${index}`}>{genre}{index < movie.genres.length - 1 ? ', ' : ''}</span>)}</div>}
				</div>
				<Button to={`/${movie.id}`}>View Details</Button>
			</div>
		</Container>
	)
}

export default TopMoviesCard

const Container = styled.div`
	min-height: 535px;
	border: 1px solid transparent;
	:hover {
			border: 1px solid #ccc;
	}
`
