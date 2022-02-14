import { useState, useEffect } from 'react';
import { maxVoteCount, filterUnpopularMovies, sortByVoteAverage } from '../utils/movies'

const REST_API_ROOT_ENDPOINT = 'http://localhost:2020/api';

const useFetchMovies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [error, setError] = useState(false);
  const endpoint = `${REST_API_ROOT_ENDPOINT}/movies`;

  const getUniqueGenres = (res) => {
    const genres = res.reduce((acc, movie) => [...acc, ...movie.genres], [])
    const uniqueGenres = [...new Set(genres)];
    const genresByTitleAndUrl = uniqueGenres.map(genre => ({
      title: genre,
      url: genre.replace(/\s/g, '-').toString().toLowerCase()
    }))
    setGenres(genresByTitleAndUrl)
    return res
  }

  const getTopMovies = (res) => {
    const movies = [...res]
    const popularMovies = filterUnpopularMovies(movies, maxVoteCount(movies))
    setTopMovies(sortByVoteAverage(popularMovies))
    return res
  }

  useEffect(() => {
    setLoading(true);
    fetch(endpoint)
      .then(res => res.json())
      .then(getUniqueGenres)
      .then(getTopMovies)
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading, genres, topMovies, error };
};

export default useFetchMovies;
