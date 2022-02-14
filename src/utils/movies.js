import { VOTE_COUNT_THRESHOLD } from '../constants/movies'

export const maxVoteCount = (movies) => movies.sort((a, b) => (a.voteCount < b.voteCount) ? 1 : -1)[0].voteCount

export const filterUnpopularMovies = (movies, maxVoteCount) => movies.filter(movie => movie.voteCount > (maxVoteCount * VOTE_COUNT_THRESHOLD))

export const sortByVoteAverage = (movies) => sortByKey(movies, 'voteAverage')

export const sortByPopularity = (movies) => sortByKey(movies, 'popularity')

export const sortByBudget = (movies) => sortByKey(movies, 'budget')

export const sortByVoteCount = (movies) => sortByKey(movies, 'voteCount')

export const sortByRunTime = (movies) => sortByKey(movies, 'runTime')

export const sortByReleaseDate = (movies) => movies.sort((a, b) => (new Date(a.releaseDate) < new Date(b.releaseDate)) ? 1 : -1)

export const sortByKey = (data, key) => data.sort((a, b) => (a[key] < b[key]) ? 1 : -1)
