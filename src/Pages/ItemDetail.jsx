import React, { useEffect } from 'react';
import MainLayout from 'HOC/MainLayout';
import styled from 'styled-components/macro';
import { useParams, useLocation } from 'react-router-dom';

import tmdb from 'Apis/tmdb';
import jikan from 'Apis/jikan';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetail, activeItemSelector } from 'Features/activeItemSlice';

function ItemDetail() {
  const { itemType } = useParams();
  const { pathname: locationPathname } = useLocation();
  const dispatch = useDispatch();
  const item = useSelector(activeItemSelector);

  useEffect(() => {
    switch (itemType) {
      case 'movie':
        dispatch(fetchItemDetail(tmdb, locationPathname));
        break;

      case 'tv':
        dispatch(fetchItemDetail(tmdb, locationPathname));
        break;

      case 'anime':
        dispatch(fetchItemDetail(jikan, locationPathname));
        break;

      case 'manga':
        dispatch(fetchItemDetail(jikan, locationPathname));
        break;

      default:
        throw new Error('Unknown item type!');
    }
  }, [locationPathname, itemType, dispatch]);
  return <MainLayout>{JSON.stringify(item)}</MainLayout>;
}

export default ItemDetail;
