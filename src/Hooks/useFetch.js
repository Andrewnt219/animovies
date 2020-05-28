import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const useFetch = (fetchAction, valueSelector, isLoadingSelector) => {
  const dispatch = useDispatch();
  const value = useSelector(valueSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch, fetchAction]);

  return [value, isLoading];
};
