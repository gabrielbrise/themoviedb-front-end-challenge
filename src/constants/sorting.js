import {
  sortByPopularity,
  sortByVoteAverage,
  sortByBudget,
  sortByVoteCount,
  sortByRunTime,
  sortByReleaseDate,
} from '../utils/movies'

export const SORTING_OPTIONS = [
  {
    label: 'Most Popular',
    value: 'popularity'
  },
  {
    label: 'Best Average Score',
    value: 'voteAverage'
  },
  {
    label: 'Most Recent',
    value: 'releaseDate'
  },
  {
    label: 'Longest Runtime',
    value: 'runTime'
  },
  {
    label: 'Largest Budget',
    value: 'budget'
  },
  {
    label: 'Most Votes',
    value: 'voteCount'
  },
]

export const SORTER_FUNCTIONS = {
  "budget": sortByBudget,
  "popularity": sortByPopularity,
  "releaseDate": sortByReleaseDate,
  "runTime": sortByRunTime,
  "voteAverage": sortByVoteAverage,
  "voteCount": sortByVoteCount,
}