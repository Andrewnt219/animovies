import React, { useEffect } from 'react';
import { fetchMovies } from 'Features/moviesSlice';
import { useDispatch } from 'react-redux';
function Movie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <div>Movie</div>;
}

export default Movie;
