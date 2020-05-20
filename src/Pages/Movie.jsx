import React, { useEffect } from 'react';
import { fetchNowPlaying } from 'Features/moviesSlice';
import { useDispatch } from 'react-redux';
function Movie() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, [dispatch]);

  return <div>Movie</div>;
}

export default Movie;
