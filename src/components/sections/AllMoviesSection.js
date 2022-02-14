import React, { useEffect, useState } from 'react';
import Section from '../common/Section'
import MoviesList from '../MoviesList'
import Select from '../common/Select'
import { SORTER_FUNCTIONS, SORTING_OPTIONS } from '../../constants/sorting'

const AllMoviesSection = ({ loading, movies }) => {

  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS[0])
  const [sortedMovies, setSortedMovies] = useState([])

  const handleChange = (selectedOption) => {
    setSortingOption(selectedOption)
  }

  useEffect(() => {
    if (!loading) {
      setSortedMovies(SORTER_FUNCTIONS[sortingOption.value]([...movies]))
    }
  }, [loading, sortingOption.value])

  const SelectSorting = () => (
    <Select name="sorting-select" label="Sort by" value={sortingOption} options={SORTING_OPTIONS} onChange={handleChange} />
  )

  return (
    <Section title="Movies" subtitle="Browse All" HeaderComponent={SelectSorting}>
      <MoviesList movies={sortedMovies} loading={loading} path={'all'} />
    </Section>
  )
}

export default AllMoviesSection