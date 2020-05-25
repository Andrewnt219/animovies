import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useMovieRequest = (url) => {
  const dispatch = useDispatch();

  useEffect(() => {}, [url]);
};
