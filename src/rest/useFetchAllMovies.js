import { useState, useEffect } from 'react';

const REST_API_ROOT_ENDPOINT = 'http://localhost:2020/api';

const useFetchMovies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([])
  const [error, setError] = useState(false);
  const endpoint = `${REST_API_ROOT_ENDPOINT}/movies`;

  useEffect(() => {
    setLoading(true);
    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        const genres = res.reduce((acc, movie) => [...acc, ...movie.genres], [])
        const uniqueGenres = [...new Set(genres)];
        setGenres(uniqueGenres)
        return res
      })
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading, genres, error };
};

export default useFetchMovies;
