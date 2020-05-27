import React, { useEffect } from 'react';
import MainLayout from 'HOC/MainLayout';
import styled from 'styled-components/macro';
import { useParams, useLocation } from 'react-router-dom';

import tmdb from 'Apis/tmdb';
import jikan from 'Apis/jikan';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetail, activeItemSelector } from 'Features/activeItemSlice';

function ItemDetail() {
  const { api, itemType, itemId } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(activeItemSelector);

  useEffect(() => {
    const url = `/${itemType}/${itemId}`;

    switch (api) {
      case 'tmdb':
        dispatch(fetchItemDetail(tmdb, url));
        break;

      case 'jikan':
        dispatch(fetchItemDetail(jikan, url));
        break;

      default:
        throw new Error('Unknown item type!');
    }
  }, [api, itemType, itemId, dispatch]);
  return <MainLayout>{JSON.stringify(item)}</MainLayout>;
}

export default ItemDetail;
